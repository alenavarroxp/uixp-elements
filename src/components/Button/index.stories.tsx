import type { Meta, StoryObj } from "@storybook/react";
import { FaCoffee } from "react-icons/fa";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: " Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      value: "solid",
      options: ["solid", "outline", "ghost"],
    },
    color: {
      control: { type: "select" },
      value: "default",
      options: ["default", "primary"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    color: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    color: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    color: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
  },
};

export const IconButton: Story = {
  args: {
    variant: "solid",
    color: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
    icon: <FaCoffee />,
    iconPosition: "left",
  },
};
