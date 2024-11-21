import { Flex, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom'; // Import Link
import bgimg from "../../src/assets/img/veda-bot-bg.png";

const Blogs = () => {
  return (
    <div>
      <Flex className="flex justify-center items-center h-screen" style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div>
          <Link to="/yoga-ayurveda">
            <Button colorScheme="teal" m={2}>Yoga Ayurveda</Button>
          </Link>
          <Link to="/ayurvedic-herbs">
            <Button colorScheme="teal" m={2}>Ayurvedic Herbs</Button>
          </Link>
          <Link to="/ayurvedic-diet">
            <Button colorScheme="teal" m={2}>Ayurvedic Diet</Button>
          </Link>
          <Link to="/holistic-healing">
            <Button colorScheme="teal" m={2}>Holistic Healing</Button>
          </Link>
          <Link to="/seasonal-ayurvedic-practices">
            <Button colorScheme="teal" m={2}>Seasonal Ayurvedic Practices</Button>
          </Link>
          <Link to="/managing-stress-with-ayurveda">
            <Button colorScheme="teal" m={2}>Managing Stress With Ayurveda</Button>
          </Link>
        </div>
      </Flex>
    </div>
  );
}

export default Blogs;