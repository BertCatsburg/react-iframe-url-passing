import { createBrowserRouter } from 'react-router-dom'
import { HomePage, RootLayout, ErrorPage, FrameTestPage, WebsiteBPage, WebsiteAPage, WebsiteLayout } from '../../pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/home',
                element: <HomePage />,
            },
            {
                path: '/frametest',
                element: <FrameTestPage />,
            },
        ],
    },
    {
        path: '/website',
        element: <WebsiteLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/website/a',
                element: <WebsiteAPage />,
            },
            {
                path: '/website/b',
                element: <WebsiteBPage />,
            },
        ],
    },
])
