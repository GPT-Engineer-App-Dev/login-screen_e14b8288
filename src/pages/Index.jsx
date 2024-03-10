import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.200">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Login</Heading>
          <Text fontSize="lg" color="gray.600">
            Welcome back!
          </Text>
        </Stack>
        <Box rounded="lg" bg="white" boxShadow="lg" p={8}>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FaEnvelope color="gray.300" />} />
              <Input type="email" placeholder="Email address" />
            </InputGroup>
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
            >
              Login with Email
            </Button>
            <Button
              bg="white"
              color="gray.900"
              _hover={{
                bg: "gray.100",
              }}
              leftIcon={<FaGoogle />}
            >
              Login with Google
            </Button>
            <Button
              bg="white"
              color="gray.900"
              _hover={{
                bg: "gray.100",
              }}
              leftIcon={<FaApple />}
            >
              Login with Apple
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Index;
