import { Button, Modal } from "antd";
import React from "react";
import Charities from "../Pages/Charities";

type CardModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  // handleCancel: () => void;
  description: string;
  name: string;
  // location: string;
  // logoUrl: string;
};

function CardModal({
  isModalOpen,
  handleCancel,
  handleOk,
  description,
  name,
  location,
  logoUrl,
}: CardModalProps) {
  return (
    <>
      <Modal
        title={name}
        open={isModalOpen}
        onOk={handleOk}
        footer={
          <div>
            <Button onClick={handleOk}>OK</Button>
          </div>
        }
      >
        <p>{logoUrl}</p>
        <p>{description}</p>
        <p>{location}</p>
      </Modal>
    </>
  );
}

export default CardModal;
