import React from 'react'
import { styled, useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface NavBarItemInterface {
    children: React.ReactNode
    link: string
}

const StyledNavBarItem = styled.li<{ theme: unknown }>`
    padding-left: ${(props) => props.theme.padding.global.left};
`

const StyledButton = styled.button<{ theme: unknown }>``

export const NavBarItem = ({ children, link }: NavBarItemInterface) => {
    const theme = useTheme()
    const navigate = useNavigate()

    const ClickHandler = (link: string) => {
        navigate(link)
    }
    return (
        <StyledNavBarItem theme={theme}>
            <StyledButton onClick={() => ClickHandler(link)}>
                {children}
            </StyledButton>
        </StyledNavBarItem>
    )
}
