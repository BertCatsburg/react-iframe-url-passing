import { MainMenuInterface } from '../../constants'
// import {NavBarLogo} from './NavBarLogo.tsx'
// import {NavBarAppName} from "./NavBarAppName.tsx";
import { NavBarItem } from './NavBarItem.tsx'

import { styled, useTheme } from 'styled-components'

const StyledNavBar = styled.div<{ theme: unknown }>`
    background-color: ${(props) =>
        props.theme.colors.menu.background || '#000000'};
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    height: 3rem;
    opacity: 0.7;
    padding-left: ${(props) => props.theme.padding.global.left};
`

const StyledMenu = styled.ul<{ theme: unknown }>`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
`

interface NavBarInterface {
    menu: MainMenuInterface
}

export const NavBar = ({ menu }: NavBarInterface) => {
    // console.log(menu)
    const theme = useTheme()

    return (
        <StyledNavBar theme={theme}>
            <StyledMenu>
                {menu.items.map((m) => {
                    return (
                        <NavBarItem
                            key={m.id}
                            link={m.link}
                        >
                            {m.label}
                        </NavBarItem>
                    )
                })}
            </StyledMenu>
        </StyledNavBar>
    )
}
