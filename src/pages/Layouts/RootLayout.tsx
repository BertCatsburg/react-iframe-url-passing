import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { MainNavigation } from '../../components'
import { PageContent } from '../../ui'

export const RootLayout = () => {
    const navigation = useNavigation()

    return (
        <React.Fragment>
            <MainNavigation />
            <PageContent>
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </PageContent>
        </React.Fragment>
    )
}
