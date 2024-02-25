import {
  EllipsisOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Button, Modal } from "antd";
import {useContext, useState} from "react";
import CardModal from "./CardModal";
import { Link, useNavigate } from "react-router-dom";
import {AuthContextV2} from "./AuthContxtV2";
import { collection, addDoc } from "firebase/firestore";

const { Meta } = Card;

type CharityCardProps = {
  cover: string;
  avatar: string;
  title: string;
  descreption: string;
  logoURL: string;
  location: string;
  ein: string;
};

function CharityCard({ cover, avatar, title, ein }: CharityCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const user = useContext(AuthContextV2)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };



  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addCharityToFavorite = async (ein:string) => {

    // firestore -> add ein to favorites
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });



    // remove
  };

  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt={title} src={cover} />}
        actions={[
          /*<HeartOutlined key="favourite" onClick={isSignedIn? likePost(id): navigateToSignUpPage} />,*/
          // <EllipsisOutlined key="ellipsis" onClick={`/charity/${ein}`} />,
          <HeartOutlined key="favourite" onClick={()=>{user?addCharityToFavorite(ein):showModal()}} />,
          <EllipsisOutlined key="ellipsis"   onClick={()=>{
            navigate("/charities/"+ein)
          }} />,
        ]}
      >
        <Meta
          avatar={<Avatar src={avatar} />}
          title={title}
          // description={descreption}
        />
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
