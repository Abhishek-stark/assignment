import { useColorMode, Switch, Flex } from "@chakra-ui/react";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="flex-end" p={4}>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </Flex>
  );
};

export default ThemeToggle;
