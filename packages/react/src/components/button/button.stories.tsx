import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Stories } from "@storybook/blocks";
import { Button } from "./button";
import type { ButtonProps } from "./button.types";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Stories includePrimary />
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const row: React.CSSProperties = { display: "flex", gap: 8, alignItems: "center" };

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 2v10M2 7h10" strokeLinecap="round" />
  </svg>
);

const variantRow = (variant: ButtonProps["variant"]) => (
  <div style={row}>
    <Button variant={variant} size="large">Large</Button>
    <Button variant={variant} size="medium">Medium</Button>
    <Button variant={variant} size="small">Small</Button>
    <Button variant={variant} size="large" icon={<PlusIcon />} />
    <Button variant={variant} size="medium" icon={<PlusIcon />} />
    <Button variant={variant} size="small" icon={<PlusIcon />} />
  </div>
);

export const Primary: Story = {
  render: () => variantRow("primary"),
};

export const Secondary: Story = {
  render: () => variantRow("secondary"),
};

export const Outline: Story = {
  render: () => variantRow("outline"),
};

export const Ghost: Story = {
  render: () => variantRow("ghost"),
};
