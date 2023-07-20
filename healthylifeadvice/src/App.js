import logo from './logo.svg';
import './App.css';
import HealthAdvice1 from "./HealthAdvice1.svg"
import { Heading,Box,Image,Text, Input, Button,Link, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { handlePostRequest } from './Redux/action';
import {useDispatch} from "react-redux"
import Status from './Components/Status';
import Featured from './Components/Featured';

function App() {
  let[userInput,setUserInput] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const disptach = useDispatch()

  

  
  return (
    <Box className="App">
      
      <Box id='parent-container'>
      <Heading id='title'>Healthy Life Advice</Heading>
      <Text className='text'>I will create a personalized meditation for you.Then I will guide you through it!</Text>
      <Image id='cover-image'  src={HealthAdvice1} alt='HealthAdvice'></Image>
      <Box id="input-form">
          <span className="label">1. How are You feeling right now?</span>
          <Input  type='text' name='feelingRightNow' onChange={(e)=>{setUserInput({...userInput,[e.target.name]:e.target.value})}}/>
          <span className="label">2. What do you do?</span>
          <Input type='text' name='profession' onChange={(e)=>{setUserInput({...userInput,[e.target.name]:e.target.value})}}/>
          <span className="label">3. What are the issues you're facing today?</span>
          <Input type='text' name='issues' onChange={(e)=>{setUserInput({...userInput,[e.target.name]:e.target.value})}}/>
          <Button _hover={{backgroundColor:"teal.200",color:"black"}} colorScheme="teal" variant="outline" onClick={()=>{disptach(handlePostRequest(userInput))
            onOpen()}}>Get Advice</Button>
      </Box>
      {
        onOpen?<Status isOpen={isOpen}  onClose={onClose} />:false
      }

      <Featured/>
      </Box>

      <Box id="final-description">
        We never share your data.We use <Link _hover={{color:"red"}} color='blue' href='https://openai.com/policies/api-data-usage-policies'>OpenAI</Link> to generate your meditation.Made with ❤️ by the Mindful Nerd (🐦)
      </Box>
    </Box>
  );
}

export default App;
