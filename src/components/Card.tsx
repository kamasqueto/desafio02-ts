import {
  Box, 
  Center,
  Input
} from '@chakra-ui/react'
import { ButtonLogin } from './ButtonLogin'
import { login } from '../services/login'
import { Header } from './Header'



export const Card = () => {
  return(
      <>
      <Header />
      <Box minHeight='100vh' backgroundColor='#000057' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" marginBottom={'20px'}/>
          <Input placeholder="password" marginBottom={'20px'} />
          <Center>
            <ButtonLogin event={login} title="Login"/> 
          </Center>
        </Box>
      </Box>
      </>
  )
}