import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Card } from './components/Card';
import { Header } from './components/Header';


function App() {
  return (
    <ChakraProvider cssVarsRoot={undefined}>
      <Card />
    </ChakraProvider>
  );
}

export default App;
