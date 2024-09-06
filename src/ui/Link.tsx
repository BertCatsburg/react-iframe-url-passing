import { ReactNode } from 'react'
import { styled, useTheme } from 'styled-components'

interface LinkInterface {
    children: ReactNode,
    to: string
}

const LinkContent = styled.a<{ theme: unknown }>`
    text-decoration: none;
    color: coral; 
`
export const Link = ({ children, to }: LinkInterface) => {
    const theme = useTheme()

    return <LinkContent theme={theme}><a href={to}>{children}</a></LinkContent>
}
