import Nav from "./navbar/Nav";
import MobileNav from "./navbar/MobileNav";
import Profile from "./profile/Profile";
import { Link } from "react-router-dom";
import logo from "../../assets/img/veda-bot-favicon.png";
import bgimg from "../../assets/img/veda-bot-bg.png";
import { fetchUserData } from "../../services/userServices";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import ImageCarousel from "./imageCarousel";
import { Text, Box } from "@chakra-ui/react";

const Layout = () => {
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
    <div className="w-full h-screen flex flex-col" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="navbar flex justify-between items-center mt-1 p-1">
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
      <ImageCarousel/>
      <Box textAlign="center">
      <Text fontSize="5xl" fontWeight="bold" fontFamily="'Dancing Script', cursive" color="green.900">
        Welcome to VedaBot
      </Text>
      <Text fontSize="3xl" fontWeight="bold" fontFamily="'Dancing Script', cursive" color="green.900">
      Take your health into your hands
      </Text>
      </Box>
    </div>
  );
};

export default Layout;
