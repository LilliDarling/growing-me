<script lang="ts">
	import { onMount } from 'svelte';
	import ladybugSvg from '$lib/assets/ladybug.svg';

	let bugEl: HTMLDivElement = $state(undefined!);
	let visible = $state(false);
	let tx = $state(0);
	let ty = $state(0);
	let rotation = $state(0);
	let fleeing = $state(false);

	const BUG_SIZE = 28;
	const DETECTION_RADIUS = 120;
	const CRAWL_SPEED = 0.35;
	const FLEE_DURATION = 600;

	// Internal position tracked outside of reactivity for perf
	let posX = 0;
	let posY = 0;
	let heading = 0; // current heading in radians
	let wanderAngle = 0; // slowly drifting wander offset
	let animFrame: number;
	let appearTimeout: ReturnType<typeof setTimeout>;
	let hideTimeout: ReturnType<typeof setTimeout>;
	let paused = false;

	function randomEdgePosition() {
		const w = window.innerWidth;
		const h = window.innerHeight;
		const edge = Math.floor(Math.random() * 4);
		switch (edge) {
			case 0: return { x: Math.random() * w, y: -BUG_SIZE };
			case 1: return { x: w + BUG_SIZE, y: Math.random() * h };
			case 2: return { x: Math.random() * w, y: h + BUG_SIZE };
			default: return { x: -BUG_SIZE, y: Math.random() * h };
		}
	}

	function randomInnerPosition() {
		const margin = 100;
		return {
			x: margin + Math.random() * (window.innerWidth - margin * 2),
			y: margin + Math.random() * (window.innerHeight - margin * 2)
		};
	}

	function distanceTo(x1: number, y1: number, x2: number, y2: number) {
		return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
	}

	// Waypoints for organic curved paths
	let waypoints: { x: number; y: number }[] = [];
	let waypointIndex = 0;

	function generateWaypoints(fromX: number, fromY: number, toX: number, toY: number) {
		// Create 3-5 intermediate waypoints with random offsets for curvy paths
		const count = 3 + Math.floor(Math.random() * 3);
		const points: { x: number; y: number }[] = [];
		for (let i = 1; i <= count; i++) {
			const t = i / (count + 1);
			const baseX = fromX + (toX - fromX) * t;
			const baseY = fromY + (toY - fromY) * t;
			// Perpendicular offset for curve
			const dx = toX - fromX;
			const dy = toY - fromY;
			const len = Math.sqrt(dx * dx + dy * dy);
			const perpX = -dy / len;
			const perpY = dx / len;
			const offset = (Math.random() - 0.5) * len * 0.4;
			points.push({
				x: baseX + perpX * offset,
				y: baseY + perpY * offset
			});
		}
		points.push({ x: toX, y: toY });
		return points;
	}

	function setNewDestination() {
		const target = randomInnerPosition();
		waypoints = generateWaypoints(posX, posY, target.x, target.y);
		waypointIndex = 0;
	}

	function fleeFrom(mouseX: number, mouseY: number) {
		if (fleeing) return;
		fleeing = true;
		paused = false;

		const angle = Math.atan2(posY - mouseY, posX - mouseX);
		const fleeX = posX + Math.cos(angle) * window.innerWidth;
		const fleeY = posY + Math.sin(angle) * window.innerWidth;

		rotation = angle * (180 / Math.PI) - 90;

		// Use transform-based flee
		tx = fleeX;
		ty = fleeY;

		setTimeout(() => {
			visible = false;
			fleeing = false;
			scheduleAppearance();
		}, FLEE_DURATION);
	}

	function crawl() {
		if (!visible || fleeing) return;

		if (paused) {
			animFrame = requestAnimationFrame(crawl);
			return;
		}

		const wp = waypoints[waypointIndex];
		if (!wp) {
			// Reached end of waypoints — pause and pick a new path
			paused = true;
			const pauseDur = 800 + Math.random() * 2500;
			setTimeout(() => {
				if (!visible || fleeing) return;
				paused = false;
				setNewDestination();
			}, pauseDur);
			animFrame = requestAnimationFrame(crawl);
			return;
		}

		const dist = distanceTo(posX, posY, wp.x, wp.y);

		if (dist < 3) {
			waypointIndex++;
			// Tiny micro-pause between waypoints for organic feel
			if (Math.random() < 0.3) {
				paused = true;
				setTimeout(() => { paused = false; }, 200 + Math.random() * 600);
			}
			animFrame = requestAnimationFrame(crawl);
			return;
		}

		// Steer toward waypoint with gentle turning
		const targetAngle = Math.atan2(wp.y - posY, wp.x - posX);
		// Smooth heading interpolation — bug turns gradually
		let angleDiff = targetAngle - heading;
		// Normalize to [-PI, PI]
		while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
		while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
		heading += angleDiff * 0.08;

		// Add subtle wander wobble
		wanderAngle += (Math.random() - 0.5) * 0.15;
		wanderAngle *= 0.95; // dampen
		const moveAngle = heading + wanderAngle * 0.3;

		// Variable speed — slightly faster on straights, slower on turns
		const turnFactor = 1 - Math.min(Math.abs(angleDiff) / Math.PI, 0.6);
		const speed = CRAWL_SPEED * (0.6 + turnFactor * 0.4);

		posX += Math.cos(moveAngle) * speed;
		posY += Math.sin(moveAngle) * speed;

		// Update reactive state for rendering
		tx = posX;
		ty = posY;
		rotation = (heading + wanderAngle * 0.3) * (180 / Math.PI) + 90;

		animFrame = requestAnimationFrame(crawl);
	}

	function appear() {
		const start = randomEdgePosition();
		posX = start.x;
		posY = start.y;
		tx = posX;
		ty = posY;

		const target = randomInnerPosition();
		heading = Math.atan2(target.y - posY, target.x - posX);
		wanderAngle = 0;
		waypoints = generateWaypoints(posX, posY, target.x, target.y);
		waypointIndex = 0;

		rotation = heading * (180 / Math.PI) + 90;
		fleeing = false;
		paused = false;
		visible = true;

		animFrame = requestAnimationFrame(crawl);

		// Auto-leave after a while
		hideTimeout = setTimeout(() => {
			if (visible && !fleeing) {
				const exit = randomEdgePosition();
				waypoints = generateWaypoints(posX, posY, exit.x, exit.y);
				waypointIndex = 0;
				paused = false;

				setTimeout(() => {
					visible = false;
					scheduleAppearance();
				}, 18000);
			}
		}, 20000 + Math.random() * 15000);
	}

	function scheduleAppearance() {
		clearTimeout(appearTimeout);
		const delay = 30000 + Math.random() * 60000;
		appearTimeout = setTimeout(appear, delay);
	}

	function handleMouseMove(e: MouseEvent) {
		if (!visible || fleeing) return;
		const dist = distanceTo(posX, posY, e.clientX, e.clientY);
		if (dist < DETECTION_RADIUS) {
			fleeFrom(e.clientX, e.clientY);
		}
	}

	onMount(() => {
		appearTimeout = setTimeout(appear, 10000 + Math.random() * 15000);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			cancelAnimationFrame(animFrame);
			clearTimeout(appearTimeout);
			clearTimeout(hideTimeout);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

{#if visible}
	<div
		bind:this={bugEl}
		class="ladybug"
		class:fleeing
		style="transform: translate3d({tx}px, {ty}px, 0) translate(-50%, -50%) rotate({rotation}deg);"
		aria-hidden="true"
	>
		<img src={ladybugSvg} alt="" width={BUG_SIZE} height={BUG_SIZE} draggable="false" />
	</div>
{/if}

<style>
	.ladybug {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		pointer-events: none;
		will-change: transform;
		opacity: 0.85;
		filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));
	}

	.ladybug.fleeing {
		transition: transform 0.6s cubic-bezier(0.2, 0, 0.8, 0.2);
	}

	.ladybug img {
		display: block;
		user-select: none;
	}
</style>
