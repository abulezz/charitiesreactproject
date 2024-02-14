import { Button, Modal } from "antd";
import React from "react";

type CardModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

function CardModal({ isModalOpen, handleCancel, handleOk }: CardModalProps) {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default CardModal;
