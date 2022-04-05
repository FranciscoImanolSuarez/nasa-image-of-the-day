import * as React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import {CardProps } from "../../types/";

type Props = {
  result: CardProps
}

const CardComponent: React.FC<Props> = ({result}) => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "0", lg: "12" }}
    py={{ base: "0", lg: "12" }}
    id="image"
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        transform={{ base: "translateY(-50%)", lg: "none" }}
        bg={{
          base: useColorModeValue("red.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{ base: "6", md: "8", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Heading size="xl" color={useColorModeValue("red.500", "red.300")}>
              {result.title}
            </Heading>
            <Text size="xl" fontWeight="normal">
              {result.explanation}
            </Text>
          </Stack>
          <HStack spacing="3">
            <Link
              fontWeight="bold"
              fontSize="lg"
            >
              Foto tomada por: {result.copyright}
            </Link>
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src={result.url}
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="300px"
          objectFit="cover"
          flex="1"
        />
      </Flex>
    </Stack>
  </Box>
);

export default CardComponent;
