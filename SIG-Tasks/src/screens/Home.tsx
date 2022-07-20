import { HStack,IconButton, VStack , useTheme, Text, Heading, FlatList, Center} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Button } from '../components/Button';

import { Order, OrderProps } from '../components/Order';


import {SignOut} from 'phosphor-react-native';
import {ChatTeardropText} from 'phosphor-react-native'


export function Home() {
    const [statusSlected, setStatusSelected] = useState <'open' | 'closed'> ('open');
    const [orders, setOrders] = useState <OrderProps []> ([
        {
            id:'456',
            patrimony:'123456',
            when: '10/12/2012 as 10',
            status: 'open'
        }
        
    ]);
    const navigation = useNavigation();
    const { colors } = useTheme() ;

    
    function handleNewOrder(){
        navigation.navigate('new');
    }

    function handleOpenDetails( orderId: string){
        navigation.navigate('details', { orderId});
    }

    return (
        <VStack flex={1} pb={6} bg= "gray.700">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.600"
                pt={12}
                pb={5}
                px={6}
            >

                <Logo/>

                <IconButton
                    icon={ <SignOut size={26} color={ colors.gray[300]} />}
                />



            </HStack>

            <VStack flex={1}>
                <HStack w="full" mt={8} mb={4} justifyContent= "space-between" alignItems="center">
                    <Heading color="gray.100">
                        Chamados
                    </Heading>
                    <Text color= "gray.200">
                        3
                    </Text>
                </HStack>

                <HStack space={3} mb={8}>
                    <Filter
                        type='open'
                        title='em andamento'
                        onPress={() => setStatusSelected('open')}
                        isActive= {statusSlected === 'open'}
                    />
                    <Filter
                        type='closed'
                        title='finalizados'
                        onPress={() => setStatusSelected ('closed')}
                        isActive= {statusSlected === 'closed'}
                    />
                </HStack>

                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem = {({item}) => <Order data={item} onPress={()=> handleOpenDetails(item.id)} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle = {{
                        paddingBottom: 100
                    }}
                    ListEmptyComponent={()=> (
                        <Center>
                            <ChatTeardropText color= {colors.gray[300]} size={40} />
                            <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                                Vocâ ainda não possui {'\n'} 
                                solicitações { statusSlected === 'open' ? 'em aberto' : 'fechado' }
                            </Text>
                        </Center>
                    )}
                />
                <Button title="nova solicitação" onPress={handleNewOrder} />
            </VStack>
        </VStack>
    );
}