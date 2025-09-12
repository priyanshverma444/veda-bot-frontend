import { useState } from "react";
import {
  Button,
  useToast,
  Input,
  Flex,
  Box,
  FormControl,
  InputGroup,
  InputRightElement,
  Text,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import logo from "../../src/assets/img/veda-bot-favicon.png";
import bgimg from "../../src/assets/img/veda-bot-bg.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const apiKey = import.meta.env.VITE_API_KEY;
  const backendUrl =
    import.meta.env.VITE_BACKEND_URI || "http://localhost:5001";
  const [token, setToken] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleShow = () => setShow(!show);

  // Helper function to extract error message from response
  const getErrorMessage = (error) => {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      // Check for specific error messages from backend
      if (data?.message) {
        return data.message;
      }

      if (data?.error) {
        return data.error;
      }

      // Handle common HTTP status codes
      switch (status) {
        case 400:
          return "Invalid email or password format";
        case 401:
          return "Invalid credentials. Please check your email and password";
        case 403:
          return "Account access denied. Please contact support";
        case 404:
          return "User not found. Please check your email or sign up";
        case 422:
          return "Invalid input data. Please check your entries";
        case 429:
          return "Too many login attempts. Please try again later";
        case 500:
          return "Server error. Please try again later";
        case 503:
          return "Service temporarily unavailable. Please try again later";
        default:
          return `Login failed with status ${status}. Please try again`;
      }
    } else if (error.request) {
      // Network error
      return "Unable to connect to server. Please check your internet connection";
    } else {
      // Other error
      return "An unexpected error occurred. Please try again";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic client-side validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/users/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          timeout: 10000, // 10 second timeout
        }
      );

      const data = response.data;
      console.log("Login successful:", data);

      if (data.accessToken) {
        setToken(data.accessToken);
        localStorage.setItem("token", data.accessToken);

        // Also store user info if available
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        e.target.reset();
        toast({
          title: "Login Successful",
          description: `Welcome back${
            data.user?.name ? `, ${data.user.name}` : ""
          }!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Small delay to show success message
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        // Handle case where response is successful but no token
        toast({
          title: "Login Error",
          description: "Login response missing access token. Please try again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Login error:", error);

      const errorMessage = getErrorMessage(error);

      toast({
        title: "Login Failed",
        description: errorMessage,
        status: "error",
        duration: 5000, // Longer duration for error messages
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
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
        p="10"
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
          Log in to your account
        </Text>
        <FormControl mb="5">
          <Input
            required
            type="email"
            name="email"
            placeholder="Enter your email id"
            value={formData.email}
            onChange={handleInputChange}
            focusBorderColor="white"
            disabled={isLoading}
          />
        </FormControl>
        <FormControl mb="5">
          <InputGroup size="md">
            <Input
              required
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              focusBorderColor="white"
              disabled={isLoading}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleShow}
                disabled={isLoading}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Flex className="flex items-center justify-center space-x-2">
          <Button
            type="submit"
            bg="green.700"
            _hover={{ bg: isLoading ? "green.700" : "green.800" }}
            color="white"
            fontWeight="bold"
            py={2}
            px={4}
            rounded="md"
            _focus={{ outline: "none", shadow: "outline" }}
            isLoading={isLoading}
            loadingText="Logging in..."
            disabled={isLoading}
          >
            Log In
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
              window.location.href = "/signup";
            }}
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </Flex>
        {/* <Flex className="flex items-center justify-center space-x-2">
          <Button
            bg="white"
            color="teal.800"
            fontWeight="bold"
            my={2}
            onClick={() => (window.location.href = "/forgot-password")}
          >
            Forgot Password? Reset
          </Button>
        </Flex> */}
      </Box>
    </Flex>
  );
};

export default Login;
