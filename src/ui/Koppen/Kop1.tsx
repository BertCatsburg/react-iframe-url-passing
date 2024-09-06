import { ReactNode } from 'react'
import { styled, useTheme } from 'styled-components'

interface Kop1Interface {
    children: ReactNode
}

const Kop1Content = styled.h1<{ theme: unknown }>`
    
    padding-top: 2rem;
    padding-left: 1rem;
    font-size: 2rem;
    padding-bottom: 1rem;
    font-weight: bold;
    
`
export const Kop1 = ({ children }: Kop1Interface) => {
    const theme = useTheme()

    return <Kop1Content theme={theme}>{children}</Kop1Content>
}
