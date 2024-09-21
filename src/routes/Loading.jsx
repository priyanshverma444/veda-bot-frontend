import { FaSpinner } from "react-icons/fa";
import { Text, Image } from "@chakra-ui/react";
import logo from "../../src/assets/img/healthai-favicon.png";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen text-green-900">
      <div className="flex flex-col items-center">
      <Image
          className="h-44 w-44 mx-auto justify-center"
          src={logo}
          alt="Logo"
        />
        <Text className="text-center mb-10 text-green-900" fontWeight="bold" fontSize="5xl">
          HealthAI
        </Text>
        <FaSpinner className="animate-spin text-green-900 text-6xl mb-3" />
        <Text className="text-center text-green-900" fontWeight="bold" fontSize="lg">
          Loading...
        </Text>
      </div>
    </div>
  );
};

export default Loading;
