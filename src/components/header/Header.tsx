import React from 'react'
import { Container, Text, Flex } from '@mantine/core'
import Logo from './logo/Logo'
import MenuHeader from './menu-header/MenuHeader'

interface IHeader {}

const Header: React.FC<IHeader> = () => {
    return (
        <Flex
            bg={'dark.6'}
            direction={'row'}
            justify={'space-between'}
            p={6}
        >
            <Logo />
            <MenuHeader />
        </Flex>
    )
}
export default Header
