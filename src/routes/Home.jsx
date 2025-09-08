import Layout from "../components/layout/Layout";
import ImageCarousel from "/src/components/layout/ImageCarousel/ImageCarousel";
import { Text, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <ImageCarousel />
      <Box textAlign="center">
        <Text
          fontSize="5xl"
          fontWeight="bold"
          // fontFamily="'Dancing Script', cursive"
          color="green.900"
        >
          Welcome to VedaBot
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          // fontFamily="'Dancing Script', cursive"
          color="green.900"
        >
          Take your health into your hands
        </Text>
      </Box>
    </Layout>
  );
};

export default Home;
