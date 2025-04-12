import { Box, Flex } from "@chakra-ui/react";
import UserDetailsSection from "../components/profile/studentDetails/UserDetailsSection"
import UserBio from "../components/profile/userBio/UserBio";
import Layout from "../components/layout/Layout";

function Profile() {

  return (
    <div>
      <Layout>
      <Flex className="md:flex-row flex-col mb-10">
        <Box
          flex="1"
        >
          <UserBio />
        </Box>
        <Box
          flex="2"
          className="flex space-y-3 flex-col justify-center items-start"
        >
          <UserDetailsSection />
        </Box>
      </Flex>
      </Layout>
    </div>
  );
}

export default Profile;
