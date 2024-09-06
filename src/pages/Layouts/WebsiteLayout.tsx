import React from 'react'
import { Outlet } from 'react-router-dom'
import { WebsiteContent } from '../../ui'

export const WebsiteLayout = () => {

    return (
        <React.Fragment>
            <WebsiteContent>
                <Outlet />
            </WebsiteContent>
        </React.Fragment>
    )
}
