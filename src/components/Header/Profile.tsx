import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align="center" >
            <Box mr="4" textAlign="right" >
                <Text>Ricardo Gomes</Text>
                <Text color="gray.300" fontSize="small">
                    rickgomeslima@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Ricardo Gomes" src="https://github.com/RicardoGDLima.png" />
        </Flex>
    )

}