import { Link } from "react-router-dom";
import { GithubOutlined,TwitterOutlined,FacebookOutlined,InstagramOutlined,MailOutlined,AppleOutlined} from "@ant-design/icons";
export const Footer = () => {
  return (
    <div className="footer">
    <TwitterOutlined />
    <FacebookOutlined />
    <InstagramOutlined />
    <GithubOutlined />
    <MailOutlined />
    <AppleOutlined />
    </div>
  );
};
