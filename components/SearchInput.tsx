import React, { useState, useCallback } from "react";
import {
  Flex,
  Input,
  Button,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

type SearchInputProps = {
  isLoading: boolean;
  error: string;
  onSearch: (name: string) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  isLoading,
  error,
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
      <FormControl isInvalid={!!error}>
        <Input
          size="lg"
          value={value}
          name="ipAddress"
          onChange={handleOnInputChange}
        />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
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
