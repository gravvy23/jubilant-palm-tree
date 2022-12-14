import { OrderedList, ListItem } from "@chakra-ui/react";
import { Card } from "./Card";
import { Location } from "../features/location/locationSlice";

type IPAddressListProps = {
  locations: Location[];
};

export const IPAddressList: React.FC<IPAddressListProps> = ({ locations }) => {
  return (
    <Card minW="60" overflowY="auto">
      <OrderedList>
        {locations.map(({ key, value }) => (
          <ListItem key={key}>{value}</ListItem>
        ))}
      </OrderedList>
    </Card>
  );
};
