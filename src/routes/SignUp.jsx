import { useState } from "react";
import {
  Button,
  useToast,
  Box,
  Flex,
  FormControl,
  Input,
  Select,
  InputGroup,
  InputRightElement,
  Text,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import logo from "../../src/assets/img/veda-bot-favicon.png";
import bgimg from "../../src/assets/img/veda-bot-bg.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    gender: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    password: "",
  });

  const backendUrl =
    import.meta.env.VITE_BACKEND_URI || "http://localhost:5001";
  const apiKey = import.meta.env.VITE_API_KEY;
  const [show, setShow] = useState(false);
  const [error, setError] = useState(""); // Password error
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleShow = () => setShow(!show);

  // Password Validation
  const validatePassword = (password) => {
    if (password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter.";
    if (!/[0-9]/.test(password))
      return "Password must contain at least one number.";
    if (!/[@$!%*?&]/.test(password))
      return "Password must contain at least one special character.";
    return "";
  };

  // Handle Password Change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    setError(validatePassword(newPassword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error) {
      toast({
        title: "Weak Password!",
        description: error,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${backendUrl}/api/users/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        e.target.reset();
        toast({
          title: "Registration successful",
          description: "Your account has been created",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        window.location.href = "/";
      } else {
        toast({
          title: "Registration failed",
          description: "Please check your inputs",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "An error occurred",
        description: "Please try again later",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Flex
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        w="lg"
        p="5"
        className="bg-green-950"
        boxShadow="2xl"
        rounded="md"
        method="POST"
      >
        <Image
          className="h-20 w-20 mx-auto justify-center"
          src={logo}
          alt="Logo"
        />
        <Text className="text-center mb-5" fontWeight="bold" fontSize="xl">
          Create an account
        </Text>
        <Box mb="5">
          <FormControl mb="4">
            <Input
              required
              placeholder="Enter your full name"
              name="username"
              onChange={handleInputChange}
              focusBorderColor="white"
            />
          </FormControl>
          <Flex mb="4" className="space-x-2">
            <Input
              required
              name="dob"
              onChange={handleInputChange}
              focusBorderColor="white"
              size="md"
              type="text"
              placeholder="Enter your date of birth"
              onFocus={(e) => {
                e.target.type = "date";
              }}
            />
            <Select
              required
              name="gender"
              onChange={handleInputChange}
              focusBorderColor="white"
            >
              <option style={{ backgroundColor: "rgb(5 46 22)" }} value="">
                Select your gender
              </option>
              <option style={{ backgroundColor: "rgb(5 46 22)" }} value="Male">
                Male
              </option>
              <option
                style={{ backgroundColor: "rgb(5 46 22)" }}
                value="Female"
              >
                Female
              </option>
            </Select>
          </Flex>
          <FormControl mb="4">
            <Input
              required
              type="email"
              placeholder="Enter your email id"
              name="email"
              onChange={handleInputChange}
              focusBorderColor="white"
            />
          </FormControl>
          <FormControl mb="4">
            <Input
              required
              placeholder="Enter your address"
              name="address"
              onChange={handleInputChange}
              focusBorderColor="white"
            />
          </FormControl>
          <Flex mb="4" className="space-x-2">
            <FormControl>
              <Input
                required
                placeholder="Enter your city"
                name="city"
                onChange={handleInputChange}
                focusBorderColor="white"
              />
            </FormControl>
            <FormControl>
              <Input
                required
                placeholder="Enter pincode"
                name="pincode"
                onChange={handleInputChange}
                focusBorderColor="white"
              />
            </FormControl>
          </Flex>

          {/* Password with Validation */}
          <FormControl mb="4" isInvalid={!!error}>
            <InputGroup size="md">
              <Input
                required
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handlePasswordChange}
                focusBorderColor="white"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </FormControl>

          <Flex className="flex items-center justify-center space-x-2">
            <Button
              type="submit"
              bg="green.700"
              _hover={{ bg: "green.800" }}
              color="white"
              fontWeight="bold"
              py={2}
              px={4}
              rounded="md"
              _focus={{ outline: "none", shadow: "outline" }}
              isDisabled={loading || !!error}
              isLoading={loading}
            >
              Sign Up
            </Button>
            <Button
              bg="white"
              color="green.700"
              fontWeight="bold"
              py={2}
              px={4}
              rounded="md"
              _focus={{ outline: "none", shadow: "outline" }}
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Log In
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
