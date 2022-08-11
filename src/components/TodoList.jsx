import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const TodoList = ({item, handleDelete}) => {
  const {id} = item ;

  return (
    <Flex  gap={5} margin={'0 auto'} >
      <Text>{item.todo}</Text>
      <Button onClick={() => handleDelete (id)} bgColor={'maroon'} > Delete </Button>
    </Flex>
  )
}

export default TodoList