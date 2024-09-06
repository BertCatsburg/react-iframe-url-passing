import { ReactNode } from 'react'
import { styled, useTheme } from 'styled-components'

interface WebsiteContentInterface {
    children: ReactNode
}

const StyledPageContent = styled.main<{ theme: unknown }>`
    background-color: ${(props) =>
        props.theme.colors.websiteLight.background || '#000000'};
    margin-top: 0;
    padding-top: 1rem;
    width: 100%;
    height: 100%;
    padding-left: ${(props) => props.theme.padding.global.left};
`
export const WebsiteContent = ({ children }: WebsiteContentInterface) => {
    const theme = useTheme()

    return <StyledPageContent theme={theme}>{children}</StyledPageContent>
}
