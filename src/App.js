import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Report from "./components/Report";
import Register from "./components/Register";
import Login from "./pages/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "./helpers/props";

const App = () => {
	const { token } = useSelector((state) => state);
	const dispatch = useDispatch();

	React.useEffect(() => {
		const oldToken = getCookie("access-token");

		if (oldToken) {
			dispatch({
				type: "login",
				payload: oldToken,
			});
		}
	}, []);

	return (
		<>
			{!token ? (
				<Login />
			) : (
				<React.Fragment>
					<div>
						<div>menu</div>
						<div className="right-content">
							<Routes>
								{/* <Route path="/login" element={<Login />} /> */}
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/dashboard/report" element={<Report />} />
								<Route path="/dashboard/register" element={<Register />} />
								<Route path="/dashboard/register/:id" element={<Register />} />
								<Route path="/" element={<Navigate to={"/dashboard"} />} />
								<Route path="*" element={<div>404</div>} />
							</Routes>
						</div>
					</div>
				</React.Fragment>
			)}
		</>
	);
};
export default App;
