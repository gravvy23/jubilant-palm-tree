import { Box, Code, Text } from "@chakra-ui/react";
import { IPAdressData } from "../services/types";
import { Card } from "./Card";

export const LocationInfo: React.FC<{ data?: IPAdressData }> = ({ data }) => {
  return (
    <Card flex="2" overflowY="auto">
      <Code as="pre">{JSON.stringify(data, null, 2)}</Code>
    </Card>
  );
};
