import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router'
import SecureRoute from './components/SecureRoute'

function App() {

	return (
		<BrowserRouter>
			<Routes>
				{
					publicRoutes.map((route, index) => {
						const Page = route.page
						const Layout = route.layout
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								} />
						)
					})}

				{
					privateRoutes.map((route, index) => {
						const Page = route.page
						const Layout = route.layout
						return (
							<Route key={index} element={<SecureRoute />}>
								<Route
									key={index}
									path={route.path}
									element={
										<Layout>
											<Page />
										</Layout>} />
							</Route>
						)
					})
				}

			</Routes>
		</BrowserRouter>
	)
}

export default App
