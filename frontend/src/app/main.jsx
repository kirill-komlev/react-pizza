import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router'
import Router from './router/Router'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

import { blue, orange } from '@mui/material/colors'

const root = document.getElementById('root')

const theme = createTheme({
	palette: {
		primary: {
			main: orange[500],
		},
		secondary: {
			main: blue[500],
		},
		// ...other tokens
	},
})

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<Router />
		</ThemeProvider>
	</BrowserRouter>
)
