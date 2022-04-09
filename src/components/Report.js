import React from "react";

const Report = () => {
	return (
		<>
			<div
				className="main-container mt-0 tab-pane fade"
				id="tabs-profileVertical"
				role="tabpanel"
				aria-labelledby="tabs-profile-tabVertical"
			>
				<div className="report relative  shadow-md sm:rounded-lg">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Name
								</th>
								<th scope="col" className="px-6 py-3">
									Family
								</th>
								<th scope="col" className="px-6 py-3">
									Possport number
								</th>
								<th scope="col" className="px-6 py-3">
									Gender
								</th>
								<th scope="col" className="px-6 py-3">
									<span className="sr-only">Edit</span>
								</th>
								<th scope="col" className="px-6 py-3">
									<span className="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Farzan
								</th>
								<td className="px-6 py-4">Erfani</td>
								<td className="px-6 py-4">151321</td>
								<td className="px-6 py-4">Female</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Ehsan
								</th>
								<td className="px-6 py-4">Shirzadi</td>
								<td className="px-6 py-4">1353154</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Amin
								</th>
								<td className="px-6 py-4">Asadi</td>
								<td className="px-6 py-4">789784</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Nima
								</th>
								<td className="px-6 py-4">Sadeghi</td>
								<td className="px-6 py-4">45632</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Ati
								</th>
								<td className="px-6 py-4">shamloo</td>
								<td className="px-6 py-4">789784</td>
								<td className="px-6 py-4">Female</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Farzan
								</th>
								<td className="px-6 py-4">Erfani</td>
								<td className="px-6 py-4">151321</td>
								<td className="px-6 py-4">Female</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Ehsan
								</th>
								<td className="px-6 py-4">Shirzadi</td>
								<td className="px-6 py-4">1353154</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Amin
								</th>
								<td className="px-6 py-4">Asadi</td>
								<td className="px-6 py-4">789784</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Nima
								</th>
								<td className="px-6 py-4">Sadeghi</td>
								<td className="px-6 py-4">45632</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Ati
								</th>
								<td className="px-6 py-4">shamloo</td>
								<td className="px-6 py-4">789784</td>
								<td className="px-6 py-4">Female</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Farzan
								</th>
								<td className="px-6 py-4">Erfani</td>
								<td className="px-6 py-4">151321</td>
								<td className="px-6 py-4">Female</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Ehsan
								</th>
								<td className="px-6 py-4">Shirzadi</td>
								<td className="px-6 py-4">1353154</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Amin
								</th>
								<td className="px-6 py-4">Asadi</td>
								<td className="px-6 py-4">789784</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Nima
								</th>
								<td className="px-6 py-4">Sadeghi</td>
								<td className="px-6 py-4">45632</td>
								<td className="px-6 py-4">Male</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
								>
									Ati
								</th>
								<td
									onClick={() => {
										// Go to Register page
										// history.push("/register")
										// history.replace("/register")
										// history.pop();
										// history.back();
									}}
									className="px-6 py-4"
								>
									shamloo
								</td>
								<td className="px-6 py-4">789784</td>
								<td className="px-6 py-4">Female</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
									>
										Show
									</button>
								</td>
								<td className="px-6 py-4 text-right">
									<button
										type="button"
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
									>
										Contract
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Report;
