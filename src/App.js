import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/layout/navbar'

export default function App() {
	return (
		<Router>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar />

				<main>Content</main>
			</div>
		</Router>
	)
}
