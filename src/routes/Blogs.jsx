import { Flex, Box, Text, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Blogs = () => {
  const blogData = [
    { title: "Yoga Ayurveda", path: "/yoga-ayurveda" },
    { title: "Ayurvedic Herbs", path: "/ayurvedic-herbs" },
    { title: "Ayurvedic Diet", path: "/ayurvedic-diet" },
    { title: "Holistic Healing", path: "/holistic-healing" },
    {
      title: "Seasonal Ayurvedic Practices",
      path: "/seasonal-ayurvedic-practices",
    },
    {
      title: "Managing Stress With Ayurveda",
      path: "/managing-stress-with-ayurveda",
    },
    { title: "Panchakarma", path: "/panchakarma" },
    { title: "Ayurvedic Beauty Secrets", path: "/ayurvedic-beauty-secrets" },
  ];

  return (
    <Layout>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: 4, md: 6 }}
        p={{ base: 3, md: 5 }}
      >
        {blogData.map((blog, index) => (
          <Link to={blog.path} key={index}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={5}
              bg="green.900"
              color="green.500"
              minHeight="200px"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ 
                boxShadow: "lg", 
                transform: "scale(1.05)",
                color: "green.300"
              }}
              transition="all 0.3s"
            >
              <Text 
                fontSize={{ 
                  base: "lg",
                  md: "xl"
                }} 
                fontWeight="bold"
                textAlign="center"
              >
                {blog.title}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};

export default Blogs;