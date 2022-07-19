import { HStack,IconButton, VStack , useTheme, Text, Heading, FlatList} from 'native-base';
import { useState } from 'react';


import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';

import {SignOut} from 'phosphor-react-native';


export function Home() {
    const [statusSlected, setStatusSelected] = useState <'open' | 'closed'> ('open' );
    const [orders, setOrders] = useState ([{
        id:'123',
        patrimony:'123456',
        when: '10/05/2022 ás 8',
        status: 'open'
    }]);

    const { colors } = useTheme() ;

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
                        title='finalizado'
                        onPress={() => setStatusSelected('closed')}
                        isActive= {statusSlected === 'closed'}
                    />
                </HStack>

                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem = {({item}) => <Text color ="white"> {item.patrimony}</Text>}
                />

            </VStack>

            
        </VStack>
    );
}