import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{
					publicRoutes.map((route, index) => {
						const Page = route.page
						return (
							<Route
								key={index}
								path={route.path}
								element={<Page />} />
						)
					})}

				{
					privateRoutes.map((route, index) => {
						const Page = route.page
						return (
							<Route key={index} element={<SecureRoute />}>
								<Route
									key={index}
									path={route.path}
									element={<Page />} />
							</Route>
						)
					})
				}

			</Routes>
		</BrowserRouter>
	);
}

export default App;
