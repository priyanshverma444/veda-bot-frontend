import { Link } from "react-router-dom";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { RiHealthBookFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHelpCenter } from "react-icons/md";

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
      to: "/helpcenter",
      name: "Help center",
      icon: <MdHelpCenter className="w-9 h-9 mx-2" />,
    },
  ];

  return (
    <div className="navbar fixed bottom-0 w-full bg-green-950 flex justify-between border-t border-gray-700 p-2 sm:hidden min-[320px]:max-sm:block">
      <div className="flex justify-between">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`flex items-center justify-center rounded bg-green-950 hover:underline font-bold py-2 px-4`}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
