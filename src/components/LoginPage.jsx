import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("authenticated", "true");
      navigate("/orders");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button width="full" mt={4} onClick={handleLogin}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
