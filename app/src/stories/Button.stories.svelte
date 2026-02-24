<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '$lib/components/shared/Button.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary'],
      },
      href: { control: 'text' },
    },
    args: {
      onclick: fn(),
    }
  });
</script>

<Story name="Primary" args={{ variant: 'primary' }}>
  Button
</Story>
<Story name="Secondary" args={{ variant: 'secondary' }}>
  Button
</Story>
