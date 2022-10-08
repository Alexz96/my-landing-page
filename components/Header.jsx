import {
  Box,
  Button,
  Heading,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { toggleColorMode } = useColorMode();
  const currentIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const title = "Alex's Social Links";

  return (
    <HStack
      width="100%"
      height="75px"
      background="#161a1d"
      justify="end"
      paddingEnd={50}
      spacing={50}
    >
      <Heading color="white" size="md" noOfLines={1}>
        {title}
      </Heading>
      <Box />
      <Button rightIcon={currentIcon} onClick={toggleColorMode}>
        Light/Dark
      </Button>
    </HStack>
  );
}
