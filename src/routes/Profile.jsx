import { Box, Flex } from "@chakra-ui/react";
import UserBio from "../components/profile/userBio/UserBio";

function Profile() {
  return (
    <div>
      <Flex className="md:flex-row flex-col mb-10" color="white">
        <Box flex="1">
          <UserBio />
        </Box>
        <Box
          flex="2"
          className="flex space-y-3 flex-col justify-center items-start"
        ></Box>
      </Flex>
    </div>
  );
}

export default Profile;
