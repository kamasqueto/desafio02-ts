import {Button} from '@chakra-ui/react'

interface iButton {
    title: string,
    event: VoidFunction
}

export const ButtonLogin = ({ title, event}: iButton) => {
    return (
        <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              {title}
        </Button>
    )
}