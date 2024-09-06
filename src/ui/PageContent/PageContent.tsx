import { ReactNode } from 'react'
import { styled, useTheme } from 'styled-components'

interface PageContentInterface {
    children: ReactNode
}

const StyledPageContent = styled.main<{ theme: unknown }>`
    background-color: ${(props) =>
        props.theme.colors.light.background || '#000000'};
    margin-top: 3rem;
    padding-top: 1rem;
    width: 100%;
    height: 100%;
    padding-left: ${(props) => props.theme.padding.global.left};
`
export const PageContent = ({ children }: PageContentInterface) => {
    const theme = useTheme()

    return <StyledPageContent theme={theme}>{children}</StyledPageContent>
}
