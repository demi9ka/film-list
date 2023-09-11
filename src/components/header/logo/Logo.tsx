import React from 'react'
import { Flex, Image, Title } from '@mantine/core'

interface ILogo {}

const Logo: React.FC<ILogo> = () => {
    return (
        <Flex align={'center'}>
            <Image
                src={'/icon.svg'}
                width={40}
            />
            <Title
                order={3}
                ml={5}
                ff={'monospace'}
            >
                Film list
            </Title>
        </Flex>
    )
}
export default Logo
