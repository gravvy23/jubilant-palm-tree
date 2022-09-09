import { Box, BoxProps } from "@chakra-ui/react";

export const Card: React.FC<BoxProps> = (props) => (
  <Box
    {...props}
    border="1px"
    borderColor="gray.200"
    borderRadius="lg"
    m="2"
    p="2"
    position="relative"
  ></Box>
);
