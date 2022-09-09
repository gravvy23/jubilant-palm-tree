import React, { useState, useCallback } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";

type SearchInputProps = {
  isLoading: boolean;
  onSearch: (name: string) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  isLoading,
  onSearch,
}) => {
  const [value, setValue] = useState("");

  const handleOnInputChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value),
    []
  );

  const handleOnButtonClick = useCallback(() => {
    onSearch(value);
  }, [onSearch, value]);

  return (
    <Flex m="2">
      <Input
        size="lg"
        value={value}
        name="ipAddress"
        onChange={handleOnInputChange}
      />
      <Button
        disabled={value.trim() === ""}
        ml="3"
        variant="solid"
        colorScheme="blue"
        size="lg"
        isLoading={isLoading}
        onClick={handleOnButtonClick}
      >
        Search
      </Button>
    </Flex>
  );
};
