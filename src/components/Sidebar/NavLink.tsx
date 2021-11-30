import { ElementType } from 'react'

import { Link, Icon, Text, LinkProps as ChakraLinkProps} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: String;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="midium">{children}</Text>
        </Link>
    )
}