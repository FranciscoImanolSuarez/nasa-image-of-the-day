import Link from "next/link";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Center,
} from "@chakra-ui/react";

import { HERO_DATA } from "../../utils/constant";
export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Center
         h="100vh" m="auto" p="auto"
        >

        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          >
          <Heading fontWeight={600} lineHeight={"110%"}>
            <Text fontSize="6xl" as={"span"} color={"green.400"}>
              {HERO_DATA.title}
            </Text>
          </Heading>
          <Text fontSize="2xl" color={"gray.500"}>
            {HERO_DATA.subtitle}
          </Text>
          <Text fontSize="sm">{HERO_DATA.disclaimer}</Text>
          <Link href="#image">
          <Button >
            Ver
          </Button>
          </Link>
        </Stack>
          </Center>
      </Container>
    </>
  );
}
