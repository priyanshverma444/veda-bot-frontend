import Nav from "./navbar/Nav";
import MobileNav from "./navbar/MobileNav";
import Profile from "./profile/Profile";
import { Link } from "react-router-dom";
import logo from "../../assets/img/veda-bot-favicon.png";
import { fetchUserData } from "../../services/userServices";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import bgimg from "../../assets/img/veda-bot-bg.png";

// Add children prop to Layout
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
    <div 
  className="w-full min-h-screen flex flex-col" 
  style={{
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed' // optional - keeps image fixed while scrolling
  }}
>
      {/* Navbar */}
      <div className="navbar flex justify-between items-center mt-1 p-1 mb-4">
        <Link to="/" className="h-12 w-12 mx-1 flex flex-row">
          <img src={logo} alt="Logo" />
          <span className="mx-2 my-2 text-green-950 text-2xl font-bold">VedaBot</span>
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

      {/* Main content area - where children will render */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;