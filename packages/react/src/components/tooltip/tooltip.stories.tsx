import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Stories } from "@storybook/blocks";

import { Button } from "../button";
import { Tooltip } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
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

type Story = StoryObj<typeof Tooltip>;

const row: React.CSSProperties = { display: "flex", gap: 32, alignItems: "center", padding: 48 };

export const Default: Story = {
  render: () => (
    <div style={row}>
      <Tooltip label="Save the document">
        <Button variant="primary">Save</Button>
      </Tooltip>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={row}>
      <Tooltip label="Top placement" placement="top">
        <Button variant="ghost">Top</Button>
      </Tooltip>
      <Tooltip label="Right placement" placement="right">
        <Button variant="ghost">Right</Button>
      </Tooltip>
      <Tooltip label="Bottom placement" placement="bottom">
        <Button variant="ghost">Bottom</Button>
      </Tooltip>
      <Tooltip label="Left placement" placement="left">
        <Button variant="ghost">Left</Button>
      </Tooltip>
    </div>
  ),
};

export const LongText: Story = {
  render: () => (
    <div style={row}>
      <Tooltip label="This is a much longer tooltip to show how the content wraps at the max-width. It should look clean at multiple lines.">
        <Button variant="secondary">Hover for details</Button>
      </Tooltip>
    </div>
  ),
};
