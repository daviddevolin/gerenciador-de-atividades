import { Text, Button, IBadgeProps, useTheme, IButtonProps } from 'native-base';

type Pops = IButtonProps & {
    title: string;
    isActive?:boolean;
    type : 'open' | 'closed' ;

}

export function Filter({title, isActive = false , type, ...rest} : Pops) {

    const{colors} = useTheme ();
    const colorType = type == 'open' ? colors.secondary[700] : colors.green[300];

    return (
        <Button
            variant="outline"
            borderWidth={ isActive ? 1: 0}
            borderColor={colorType}
            bgColor="gray.600"
            flex={1}
            size="sm"
            {...rest}
        >
            <Text color={isActive ? colorType: "gray.300"} fontSize="xs" textTransform= "uppercase" >
                {title}
            </Text>
        </Button>
    );
}