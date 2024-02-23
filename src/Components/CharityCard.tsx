import {
  EllipsisOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Button, Modal } from "antd";
import { useState } from "react";
import CardModal from "./CardModal";
import { Link } from "react-router-dom";

const { Meta } = Card;

type CharityCardProps = {
  cover: string;
  avatar: string;
  title: string;
  descreption: string;
  logoURL: string;
  location: string;
};

function CharityCard({ cover, avatar, title, descreption }: CharityCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt={title} src={cover} />}
        actions={[
          /*<HeartOutlined key="favourite" onClick={isSignedIn? likePost(id): navigateToSignUpPage} />,*/
          // <EllipsisOutlined key="ellipsis" onClick={`/charity/${ein}`} />,
          <HeartOutlined key="favourite" onClick={showModal} />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={avatar} />}
          title={title}
          // description={descreption}
        />
        {/* <Link to={"charitydetails/123123123"}>
          <h2>test</h2>
        </Link> */}
        <CardModal
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          name="Sign In"
          description="Sign in or Sign up to view your favorites list"
        />
      </Card>
    </div>
  );
}

export default CharityCard;
