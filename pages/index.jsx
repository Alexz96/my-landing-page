import {
  Box,
  Center,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const myBackground = useColorModeValue("#f3f3f3", "#172b54");
  const itemBackground = useColorModeValue("#7b4a64", "teal.600");
  const [myLinks, setMyLinks] = useState([]);

  useEffect(() => {
    fetch("https://my-landing-page-seven.vercel.app/api/links")
      .then((resp) => resp.json())
      .then(setMyLinks);
  }, []);

  function renderizarLinks() {
    if (myLinks) {
      return myLinks.map((link, index) => {
        return (
          <Box
            key={index}
            height="8vh"
            width="60vw"
            rounded="2xl"
            background={itemBackground}
          >
            <Center>
              <NextLink href={link.url} passHref>
                <Link
                  color="#f3f3f3"
                  _hover={{
                    color: "#ad5a6c",
                  }}
                  isExternal
                >
                  <Heading size="xl">{link.text}</Heading>
                </Link>
              </NextLink>
            </Center>
          </Box>
        );
      });
    }

    return false;
  }

  return (
    <div>
      <Head>
        <title>Alex Landing Page</title>
        <meta name="description" content="One page with all my social links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Flex
          height="100vh"
          width="100vw"
          alignItems="center"
          justifyContent="center"
          background={myBackground}
        >
          <Flex p={12} rounded={6}>
            <VStack spacing={5}>{renderizarLinks()}</VStack>
          </Flex>
        </Flex>
      </main>

      <footer></footer>
    </div>
  );
}
