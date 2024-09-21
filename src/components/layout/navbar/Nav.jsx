import { Link, useLocation } from "react-router-dom";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { RiHealthBookFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHelpCenter } from "react-icons/md";

const Nav = () => {
  const navLinks = [
    {
      to: "/chatwithbot",
      name: "Chat with our bot",
      icon: <TbMessageChatbotFilled className="w-9 h-9 mx-2" />,
    },
    {
      to: "/healthhistory",
      name: "Your health history",
      icon: <RiHealthBookFill className="w-9 h-9 mx-2" />,
    },
    {
      to: "/nearbydoctors",
      name: "Nearby doctors",
      icon: <FaUserDoctor className="w-9 h-9 mx-2" />,
    },
    {
      to: "/helpcenter",
      name: "Help center",
      icon: <MdHelpCenter className="w-9 h-9 mx-2" />,
    },
  ];
  const location = useLocation();

  return (
    <div className="h-full sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
      <div className="flex justify-center my-2">
        {navLinks.map((link) => {
          const isActive = location.pathname.startsWith(link.to);
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center ${
                isActive ? "text-green-950" : "text-green-800 hover:underline"
              } font-bold py-2.5 px-4 mx-5`}
            >
              {link.icon}
              <span className="sm:max-lg:hidden">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
