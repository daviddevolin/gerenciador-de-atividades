import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';


export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
        <Header title="nova solicitação"/> 
        
        <Input
            placeholder="Número do patrimonio"
            mt={4}
        />

        <Input
            placeholder="descrição do problema"
            mt={5}  
            flex={1}
            multiline
            textAlignVertical="top"
        />   

        <Button
            title="cadastrae"
            mt={5}
        />
    </VStack>
  );
}