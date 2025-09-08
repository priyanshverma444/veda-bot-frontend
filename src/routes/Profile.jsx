import { Box, Flex, Card, CardBody } from "@chakra-ui/react";
import UserDetailsSection from "../components/profile/userDetails/UserDetailsSection";
import UserBio from "../components/profile/userBio/UserBio";
import Layout from "../components/layout/Layout";

function Profile() {
  return (
    <div>
      <Layout>
        <Box px={10}>
          <Card
            shadow="md"
            borderRadius="lg"
            p={5}
            bg="#AFD9B1"
            mb={10}
          >
            <CardBody>
              <Flex className="md:flex-row flex-col">
                <Box flex="1">
                  <UserBio />
                </Box>
                <Box
                  flex="2"
                  className="flex space-y-3 flex-col justify-center items-start"
                >
                  <UserDetailsSection />
                </Box>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Layout>
    </div>
  );
}

export default Profile;
