import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Report from "./components/Report";

const App = () => {
	return (
		<div className="flex">
			<div className="sidebar flex flex-col w-64 px-4 py-8 bg-primary-800 h-full border-r"></div>
			<div
				className="sidebar flex flex-col w-64 px-4 py-8 bg-primary-800 h-full border-r"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
				}}
			>
				<h2 className="text-3xl font-semibold text-center text-white">
					Dashboard
				</h2>
				<div className="flex flex-col justify-between mt-6">
					<aside>
						<ul
							className="nav nav-tabs flex flex-col flex-wrap list-none"
							id="tabs-tabVertical"
							role="tablist"
						>
							<li
								className="nav-item flex-grow text-center"
								role="presentation"
							>
								<NavLink
									className={(navData) => {
										const { isActive } = navData;

										return `${
											isActive ? "bg-active" : ""
										}  reg_btn flex items-center m-2 px-4 py-2 text-white bg-primary-900 rounded-md nav-link block leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent focus:border-transparent`;
									}}
									to="/register"
									id="tabs-home-tabVertical"
									data-bs-toggle="pill"
									data-bs-target="#tabs-homeVertical"
									role="tab"
									aria-controls="tabs-homeVertical"
									aria-selected="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									<span className="mx-4 font-medium">Register</span>
								</NavLink>
							</li>
							<li
								className="nav-item flex-grow text-center"
								role="presentation"
							>
								<NavLink
									className={(navData) => {
										const { isActive } = navData;

										return `${
											isActive ? "bg-active" : ""
										} reg_btn flex items-center m-2 px-4 py-2 text-white bg-primary-900 rounded-md nav-link block leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent focus:border-transparent`;
									}}
									to="/report"
									id="tabs-profile-tabVertical"
									data-bs-toggle="pill"
									data-bs-target="#tabs-profileVertical"
									role="tab"
									aria-controls="tabs-profileVertical"
									aria-selected="false"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<span className="mx-4 font-medium">Report</span>
								</NavLink>
							</li>
						</ul>
					</aside>
				</div>
			</div>
			<div className="w-full h-full m-8" style={{ flex: 1 }}>
				<div
					className="flex items-center justify-center p-5 border-4 tab-content"
					id="tabs-tabContentVertical"
				>
					<Routes>
						{/**
						 * Register Component
						 */}
						<Route path="/register" element={<Register />} />
						<Route path="/register/:id" element={<Register />} />
						{/**
						 * Report Component
						 */}
						<Route path="/report" element={<Report />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
