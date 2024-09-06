import { CONSTANTS } from '../../constants.ts'
import React from 'react'
import { NavBar } from '../../ui'

export const MainNavigation = () => {
    return (
        <React.Fragment>
            <NavBar menu={CONSTANTS.menu.mainmenu} />
        </React.Fragment>
    )
}
