import { IconStar } from '@tabler/icons-react'
import { Flex, ThemeIcon } from '@mantine/core'

import React from 'react'

interface IMenuHeader {}

const MenuHeader: React.FC<IMenuHeader> = () => {
    return (
        <Flex
            align={'center'}
            justify={'space-between'}
        >
            <ThemeIcon
                variant='outline'
                size='lg'
                p={7}
                color='orange'
            >
                <IconStar />
            </ThemeIcon>
        </Flex>
    )
}
export default MenuHeader
