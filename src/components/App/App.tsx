import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider } from 'styled-components'
import { THEME } from '../../constants.ts'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={THEME}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    )
}
