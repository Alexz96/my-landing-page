import {
  Box,
  Center,
  Flex,
  Heading,
  useColorModeValue,
  VStack,
  Link,
  Container,
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
    fetch("api/links")
      .then((resp) => resp.json())
      .then(setMyLinks);
  }, []);

  function renderizarLinks() {
    if (myLinks) {
      return myLinks.map((link, index) => {
        return (
          <Container
            key={index}
            height="8vh"
            width="60vw"
            rounded="2xl"
            background={itemBackground}
            centerContent
          >
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
          </Container>
        );
      });
    }

    return false;
  }

  return (
    <div>
      <Head>
        <title>Alex Landing Page</title>
        <meta property="og:title" content="Alexsander Landing Page" />
        <meta name="description" content="One page with all my social links" />
        <meta name="google" content="notranslate" key="notranslate" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5834550119410045"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main>
        <Header />
        <Flex
          height="100%"
          width="100%"
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
