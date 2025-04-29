import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import "../../styles/reset.css";

const meta = {
  title: "Component/Modal",
  component: Modal,
  args: {
    isOpen: true,
    title: "Modal Title",
    onClose: () => {},
    position: "center",
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
