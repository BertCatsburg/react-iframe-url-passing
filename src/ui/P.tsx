import { ReactNode } from 'react'
import { styled, useTheme } from 'styled-components'

interface PInterface {
    children: ReactNode
}

const PContent = styled.p<{ theme: unknown }>`
    padding-left: 1rem;
    font-size: 1rem;
    padding-top:0.5rem;
`
export const P = ({ children }: PInterface) => {
    const theme = useTheme()

    return <PContent theme={theme}>{children}</PContent>
}
