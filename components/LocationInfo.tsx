import { Code } from "@chakra-ui/react";
import { IPAdressData } from "../services/types";
import { Card } from "./Card";
import { Loader } from "./Loader";

type LocationInfoProps = { data?: IPAdressData; isLoading?: boolean };

export const LocationInfo: React.FC<LocationInfoProps> = ({
  data,
  isLoading,
}) => {
  return (
    <Card flex="2" overflowY="auto">
      {isLoading ? (
        <Loader />
      ) : (
        <Code as="pre">{JSON.stringify(data, null, 2)}</Code>
      )}
    </Card>
  );
};
