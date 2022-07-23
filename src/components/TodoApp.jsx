import React, { useEffect, useState } from 'react'
import {VStack, FormControl, Input, Flex, Button, Heading} from '@chakra-ui/react'
import TodoList from './TodoList';

const TodoApp = () => {
    const [todo, setTodo] = useState('');
    const [todoArray, setTodoArray] = useState([]);

    const handleChange = (e) =>{
        const todoName = e.target.value;
        setTodo(todoName);
    };

    const handleClick = () =>{
        const todoItem ={
            id : new Date().getMilliseconds(),
            todo : todo
        };
        todo
        ? setTodoArray ((prev) => [...prev, todoItem]) 
        : alert('Please fill in a Todo');
        setTodo('')
    };
    const handleDelete = (id) => {
        const newTodoList =
         todoArray.filter((item) => item.id !== id);
         setTodoArray(newTodoList);
    }
    const renderList = 
    todoArray?.map((item,index) => (<TodoList item={item} key={index} handleDelete={handleDelete} /> ));

  return (
    <VStack>
        <Heading>TODO DESIGNED BY ME</Heading>
        <Flex width = {'50%'} margin={'100px auto'}>
            <FormControl>
                <Input bgColor={'#ccc'} 
                placeholder={'Add Todo'} value={todo}
                 onChange = {(e) => handleChange(e)} />
            </FormControl>
            <Button 
                colorScheme={'facebook'} _hover={{backgroundColor : "green"}} 
                onClick={handleClick}>
                 Add Todo 
            </Button>
        </Flex>

        {renderList}
    </VStack>
  )
}

export default TodoApp;