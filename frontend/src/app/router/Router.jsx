import { Routes, Route } from 'react-router'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'

export default function Router() {
	return (
		<Routes>
			<Route
				path='/'
				element={<>Home</>}
			/>
		</Routes>
	)
}
