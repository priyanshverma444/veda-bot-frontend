import { Link } from "react-router-dom";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { RiHealthBookFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { TbCheckupList } from "react-icons/tb";

const MobileNav = () => {
  const navLinks = [
    {
      to: "/chatwithbot",
      name: "Chat with our bot",
      icon: <TbMessageChatbotFilled className="w-9 h-9 mx-2" />,
    },
    {
      to: "/blogs",
      name: "Blogs",
      icon: <RiHealthBookFill className="w-9 h-9 mx-2" />,
    },
    {
      to: "/nearbydoctors",
      name: "Nearby doctors",
      icon: <FaUserDoctor className="w-9 h-9 mx-2" />,
    },
    {
      to: "/healthcheckup",
      name: "Health Checkup",
      icon: <TbCheckupList className="w-9 h-9 mx-2" />,
    },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-green-950 border-t border-gray-700 p-2 sm:hidden min-[320px]:max-sm:flex justify-around">
      {navLinks.map((link) => (
        <Link
          key={link.to}  // Changed from link.href to link.to
          to={link.to}    // Changed from link.href to link.to
          className="flex flex-col items-center justify-center text-white hover:text-green-300 p-2"
          title={link.name}
        >
          {link.icon}
          <span className="text-xs mt-1">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;