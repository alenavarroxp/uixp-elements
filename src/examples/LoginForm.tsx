import { Button, Input, Text } from "@/components";
import { Box, Stack } from "@/components/Layout";
import { FaSignInAlt } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Text
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"3xl"}
          className="mb-2"
        >
          Login
        </Text>
        <Text
          as="span"
          size={"sm"}
          emphasis={"low"}
          align={"center"}
          className="mb-8"
        >
          Please enter your credentials to login
        </Text>

        <Text
          as="label"
          htmlFor="username"
          weight={"medium"}
          size={"sm"}
          className="mb-1.5"
        >
          Username
        </Text>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          className="mb-4"
        />

        <Text
          as="label"
          htmlFor="password"
          weight={"medium"}
          size={"sm"}
          className="mb-1.5"
        >
          Password
        </Text>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          className="mb-4"
        />

        <Box className="flex items-center justify-center w-full">
          <Button
            type="submit"
            variant={"solid"}
            icon={<FaSignInAlt />}
            loaderPosition="right"
            fullWidth={false}
          >
            Login
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
