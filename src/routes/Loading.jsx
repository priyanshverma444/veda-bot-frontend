import { FaSpinner } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import bgimg from "../../src/assets/img/veda-bot-bg.png";

const Loading = () => {
  return (
    <div
      className="relative h-screen w-full text-green-900"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Spinner + Loading text centered */}
      <div className="flex flex-col items-center justify-center h-full">
        <FaSpinner className="animate-spin text-green-900 text-6xl mb-3" />
        <Text className="text-center text-green-900" fontWeight="bold" fontSize="lg">
          Loading...
        </Text>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-10 w-full text-center px-4">
        <Text
          fontSize="5xl"
          fontWeight="bold"
          fontFamily="'Dancing Script', cursive"
          color="green.900"
        >
          VedaBot
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          fontFamily="'Dancing Script', cursive"
          color="green.900"
        >
          Take your health into your hands
        </Text>
      </div>
    </div>
  );
};

export default Loading;