import type { Meta, StoryObj } from "@storybook/react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: " Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      value: "solid",
      options: ["solid", "outline", "ghost"],
    },
    border: {
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
    loaderPosition: {
      control: { type: "select" },
      options: ["left", "right", "none"],
    },
    isDisabled: {
      control: { type: "boolean" },
      options: [true, false],
    },
    isLoading: {
      control: { type: "boolean" },
      options: [true, false],
    },
    fullWidth: {
      control: { type: "boolean" },
      options: [true, false],
    },
    activeState: {
      control: { type: "boolean" },
      options: [true, false],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    border: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    border: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    border: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
  },
};

export const IsDisabled: Story = {
  args: {
    variant: "solid",
    border: "default",
    size: "md",
    rounded: "2xl",
    children: "Button",
    isDisabled: true,
  },
  argTypes: {
    isDisabled: {
      control: { type: "boolean" },
      options: [true, false],
    },
  },
};

export const IsLoading: Story = {
  args: {
    variant: "solid",
    border: "default",
    size: "md",
    rounded: "2xl",
    children: "Loading...",
    leftIcon: <AiOutlineLoading />,
    loaderPosition: "left",
    isLoading: true,
  },
};

export const WithIcons: Story = {
  args: {
    variant: "solid",
    border: "default",
    size: "md",
    rounded: "2xl",
    children: "Icons",
    leftIcon: <FaCoffee />,
    rightIcon: <FaCoffee />,
  },
};

export const Icon: Story = {
  args: {
    variant: "solid",
    border: "default",
    size: "md",
    rounded: "full",
    leftIcon: <FaCoffee />,
    loaderPosition: "left",
  },
};

export const State: Story = {
  args: {
    variant: "solid",
    border: "default",
    size: "md",
    rounded: "2xl",
    children: "Save",
    activeState: true,
    loaderPosition: "right",
    rightIcon: <AiOutlineLoading />,
  },
};
