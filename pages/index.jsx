import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const myBackground = useColorModeValue("#172b54", "#ad5a6c");
  const itemBackground = useColorModeValue("teal.300", "grey.200");

  // TODO: Criar uma função que receba um array com os links
  // e a partir daí renderize as Box com o link num map

  return (
    <div>
      <Head>
        <title>Alex Landing Page</title>
        <meta name="description" content="One page with all my social links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex
          height="100vh"
          width="100vw"
          alignItems="center"
          justifyContent="center"
          background={myBackground}
        >
          <Box background="orange">
            <Button onClick={toggleColorMode}>Light/Dark</Button>
          </Box>
          <Flex p={12} rounded={6}>
            <VStack spacing={5}>
              <Box
                height="7vh"
                width="60vw"
                rounded="2xl"
                paddingTop={2}
                background={itemBackground}
              >
                <Center>
                  <Heading>Teste</Heading>
                </Center>
              </Box>
              <Box
                height="7vh"
                width="60vw"
                rounded="2xl"
                paddingTop={2}
                background={itemBackground}
              >
                <Center>
                  <Heading>Teste #2</Heading>
                </Center>
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </main>

      <footer></footer>
    </div>
  );
}
