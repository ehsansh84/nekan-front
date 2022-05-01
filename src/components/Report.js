import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Report = () => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		setLoading(true);

		await axios({
			method: "GET",
			url: "http://ehsanshirzadi.com:8200/v1/student",
		})
			.then((res) => {
				setList(res.data.data.list);
			})
			.catch((err) => {
				// console.log("err", err);
			})
			.finally(() => {
				// console.log("finally");
				setLoading(false);
			});
	};

	
	const deleteData=async(id)=>{
		console.log(id)
		await axios({
		  method:'DELETE',
		  url:"http://ehsanshirzadi.com:8200/v1/student" + id 
		}).then(res=>{
		  console.log('res',res)
		}).catch(err=>{
		  console.log('err',err)
		})
	  }

	useEffect(() => {
		getData();
	}, []);

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
								{/* <th scope="col" className="px-6 py-3">
									Gender
								</th> */}
								<th scope="col" className="px-6 py-3">
									<span className="sr-only">Edit</span>
								</th>
								<th scope="col" className="px-6 py-3">
									<span className="sr-only">Delete</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{loading ? (
								<div>loading</div>
							) : (
								list.map((item, index) => {
									return (
										<tr
											key={`row-item-${index}-${item?.id}`}
											className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
										>
											<th
												scope="row"
												className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
											>
												{item.name}
											</th>
											<td className="px-6 py-4">{item.family}</td>
											<td className="px-6 py-4">{item.age}</td>
											{/* <td className="px-6 py-4">Female</td> */}
											<td className="px-6 py-4 text-right">
												<NavLink to="/dashboard/profile">
												<button
													type="button"
													className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
												>
													Show
												</button>
												</NavLink>
											</td>
											<td className="px-6 py-4 text-right">

											<button  class="block text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
											Delete
											</button>
											<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center" aria-hidden="true">
												<div class="relative w-full h-full max-w-md p-4 md:h-auto">
													<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
														<button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
														<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
														</button>
														<div class="p-6 text-center">
															<svg class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
															<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
															<button onClick={deleteData()} data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
															Yes, I'm sure
															</button>
															<button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
														</div>
													</div>
												</div>
											</div>
											</td>
										</tr>
									);
								})
							)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Report;
