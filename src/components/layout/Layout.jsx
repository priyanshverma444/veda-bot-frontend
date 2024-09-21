import Nav from "./navbar/Nav";
import MobileNav from "./navbar/MobileNav";
import Profile from "./profile/Profile";
import { Link } from "react-router-dom";
import logo from "../../assets/img/healthai-favicon.png";
import { fetchUserData } from "../../services/userServices";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";

const Layout = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData().then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/signup";
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="navbar flex justify-between items-center p-1">
        <Link to="/" className="h-12 w-12 mx-1">
          <img src={logo} alt="Logo" />
        </Link>
        <Nav />
        {userData.role === "admin" ? (
          <Button
            leftIcon={<AiOutlineLogout className="text-xl mx-2 text-red-500" />}
            colorScheme="green.900"
            variant="solid"
            onClick={handleSignOut}
            className="hover:bg-green-700"
          >
            Sign Out
          </Button>
        ) : (
          <Profile />
        )}
      </div>
      <MobileNav />
    </div>
  );
};

export default Layout;
