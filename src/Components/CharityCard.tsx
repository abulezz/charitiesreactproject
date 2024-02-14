import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

type CharityCardProps = {
  cover: string;
  avatar: string;
  title: string;
  descreption: string;
};

function CharityCard({ cover, avatar, title, descreption }: CharityCardProps) {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt={title} src={cover} />}
        actions={[
          <ShareAltOutlined key="share" />,
          <HeartOutlined key="favourite" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={avatar} />}
          title={title}
          description={descreption}
        />
      </Card>
    </div>
  );
}

export default CharityCard;
