import { Spinner, Center } from "@chakra-ui/react";
import React from "react";

export const Loader: React.FC = () => (
  <Center
    position="absolute"
    h="full"
    zIndex="1"
    top={0}
    left={0}
    bottom={0}
    right={0}
    bg="blackAlpha.200"
  >
    <Spinner size="xl" />
  </Center>
);
