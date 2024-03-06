import React, { useState } from "react";
import { Box, VStack, HStack, Input, IconButton, Text, Heading, Container, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (!inputValue.trim()) {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, { id: Date.now(), content: inputValue }]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxW="container.md" p={5}>
      <VStack spacing={8}>
        <Heading>Todo App</Heading>
        <HStack w="full">
          <Input placeholder="Add new todo" value={inputValue} onChange={handleInputChange} />
          <IconButton colorScheme="blue" aria-label="Add todo" icon={<FaPlus />} onClick={handleAddTodo} />
        </HStack>
        <VStack w="full" bg="gray.50" p={4} borderRadius="md" boxShadow="md" spacing={4}>
          {todos.map((todo) => (
            <HStack key={todo.id} w="full" justify="space-between">
              <Text>{todo.content}</Text>
              <IconButton size="sm" colorScheme="red" aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(todo.id)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
