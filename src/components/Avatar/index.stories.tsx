import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      description: "Size of the avatar",
      options: ["sm", "md", "lg"],
    },
    border: {
      control: { type: "select" },
      description: "Color of the avatar",
      options: ["none", "default", "primary"],
    },
    color: {
      control: { type: "select" },
      description: "Border of the avatar",
      options: ["default", "primary"],
    },
    rounded: {
      control: { type: "select" },
      description: "Roundedness of the avatar",
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "default",
    size: "md",
  },
};
