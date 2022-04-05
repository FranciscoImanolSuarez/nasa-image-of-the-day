import React from "react";
import { Center, Alert } from "@chakra-ui/react";

export default function ErrorFetch() {
  return (
    <Center w="100vh" h="100vh" m="auto" p="auto">
      <Alert status="error">
        Error al cargar la información.
      </Alert>
    </Center>
  );
}
