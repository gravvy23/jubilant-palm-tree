import React, { useState, useCallback } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  const handleOnInputChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value),
    []
  );

  return (
    <Flex m="2">
      <Input size="lg" value={value} onChange={handleOnInputChange} />
      <Button
        disabled={value.trim() === ""}
        ml="3"
        variant="solid"
        colorScheme="blue"
        size="lg"
      >
        Search
      </Button>
    </Flex>
  );
};
