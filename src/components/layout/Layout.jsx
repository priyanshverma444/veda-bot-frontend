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
import ImageCarousel from "./imageCarousel/ImageCarousel";
import { Text, Box,Flex } from "@chakra-ui/react";
import{FaInstagram,FaRobot} from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

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
      
<Flex
          className="fixed bottom-24 right-5 lg:right-10 flex-col items-center gap-4"
          zIndex={100}
        >
          <a 
            href="https://vedabot-ayurved.streamlit.app/" 
            className="bouncing-icon bg-green-500 rounded-full p-4 shadow-lg animate-bounce"
          >
            <FaRobot className="text-white text-2xl" title="Chatbot" />
          </a>
          <a 
            href="https://www.instagram.com/kanishka_sharma.11/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-pink-500 rounded-full p-4 shadow-lg"
          >
            <FaInstagram className="text-white text-2xl" title="Instagram" />
          </a>
          <a 
            href="https://forms.gle/ToHhAZrKFMJhzWuK7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 rounded-full p-4 shadow-lg"
          >
            <BiCommentDetail className="text-white text-2xl" title="Feedback" />
          </a>
        </Flex>
    </div>
  );
};

export default Layout;






