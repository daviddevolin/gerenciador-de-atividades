import { HStack , Text} from 'native-base';

export type OrderProps = {
    id:string;
    patrimony: string;
    when: string;
    statu: 'open' | 'close' ;

}

type Props ={
    data : OrderProps;
}

export function Order({data, ...rest} : Props) {
  return (
    <HStack>
        <Text color ="white">
            Patrimônio {data.patrimony}
        
        </Text>
    </HStack>
  );
}