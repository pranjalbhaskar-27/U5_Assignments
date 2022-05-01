import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
export const Navi = () => {
  return (
    <div className="nav">
      <Link to="/" className="navlink">Home</Link>
      <Link to="/men" className="navlink">Mens Product</Link>
      <Link to="/womens" className="navlink">Womens Product</Link>
      <Link to="/kids" className="navlink">Kids Product</Link>
      <Link to="/about" className="navlink">About US</Link>
      <Link to="/faq" className="navlink">FAQ</Link>
      <ShoppingCartOutlined />
    </div>
  );
};
