import React from "react";
import Helmet from "react-helmet";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

const Register = (props) => {
	const [name, Setname] = useState("");
	const [family, Setfamily] = useState("");
	const [age, Setage] = useState("");
	const [selectedDay, setSelectedDay] = useState(null);

	const params = useParams();

	const isEditPage = !!params.id;

	console.log("is edit page? ", isEditPage);

	const PostData = async () => {
		alert("postdata is:" + name + family + age);
		await axios({
			method: "Post",
			url: "http://ehsanshirzadi.com:8200/v1/student",
			data: {
				name: name,
				family: family,
				age: age,
			},
		})
			.then((res) => {
				// console.log('res',res);
			})
			.catch((err) => {
				// console.log('err',err);
			})
			.finally(() => {
				// console.log('finally')
			});
	};
	return (
		<>
			<form>
				<div class="flex flex-col md:flex-row">
					<div class="basis-1 md:basis-1/3 m-4">
						<div class="mb-3">
							<label
								for="passport-number"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Passport number:
							</label>
							<input
								type="number"
								id="passport-number"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="mb-3 relative">
							<div class="flex absolute top-9 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<label
								for="date-passport"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Date of passport issuance:
							</label>
							{/* <input
								datepicker=""
								type="text"
								id="date-passport"
								placeholder="Select date"
							/> */}
							<DatePicker
								value={selectedDay}
								onChange={setSelectedDay}
								inputPlaceholder="Select a day"
								wrapperClassName="main-date-picker-input"
								inputClassName=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
								shouldHighlightWeekends
							/>
						</div>
						<div class="mb-3 relative">
							<div class="flex absolute top-9 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<label
								for="passport-expiration"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Passport expiration date:
							</label>
							<input
								datepicker=""
								type="text"
								id="passport-expiration"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
								placeholder="Select date"
							/>
						</div>
						<div class="mb-3">
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your email:
							</label>
							<input
								type="email"
								id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="yourmail@gmail.com"
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="previous-degree-info"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Previous degree information:
							</label>
							<input
								type="text"
								id="previous-degree-info"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="graduated"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Graduated form school / university:
							</label>
							<input
								type="text"
								id="graduated"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="education-place"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Education place:
							</label>
							<input
								type="text"
								id="education-place"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="previous-degree"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Previous degree:
							</label>
							<input
								type="text"
								id="previous-degree"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="previous-study:"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Previous field of study:
							</label>
							<input
								type="text"
								id="previous-study:"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="admission-number"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Admission number:
							</label>
							<input
								type="number"
								id="admission-number"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="mb-3 relative">
							<div class="flex absolute top-9 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<label
								for="admission-date"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Admission delivery date:
							</label>
							<input
								datepicker=""
								type="text"
								id="admission-date"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
								placeholder="Select date"
							/>
						</div>
						<div class="mb-3 relative">
							<div class="flex absolute top-9 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<label
								for="date-destination"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Date of student's destination:
							</label>
							<input
								datepicker=""
								type="text"
								id="date-destination"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
								placeholder="Select date"
							/>
						</div>
						<div class="mb-3">
							<label
								for="countries"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Country:
							</label>
							<select
								id="countries"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option>United States</option>
								<option>Canada</option>
								<option>France</option>
								<option>Germany</option>
							</select>
						</div>
					</div>
					<div class="basis-1 md:basis-1/3 m-4">
						<div class="mb-3">
							<label
								for="national-number"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								National number:
							</label>
							<input
								type="number"
								id="national-number"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="residence-address"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Residence address:
							</label>
							<input
								type="text"
								id="residence-address"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="whatsapp-number"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								WhatsApp number:
							</label>
							<input
								type="number"
								id="whatsapp-number"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="guarantor-address"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Guarantor residence address:
							</label>
							<input
								type="number"
								id="guarantor-address"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="guarantor-contact"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Guarantor contact number:
							</label>
							<input
								type="number"
								id="guarantor-contact"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="place-diplomas"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Place OF uploading student diplomas:
							</label>
							<input
								type="text"
								id="place-diplomas"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3 relative">
							<div class="flex absolute top-9 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<label
								for="registration-date"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Registration date:
							</label>
							<input
								datepicker=""
								type="text"
								id="registration-date"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
								placeholder="Select date"
							/>
						</div>
						<div class="mb-3">
							<label
								for="requested-country"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Requested country:
							</label>
							<select
								id="requested-country"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option>United States</option>
								<option>Canada</option>
								<option>France</option>
								<option>Germany</option>
							</select>
						</div>
						<div class="mb-3">
							<label
								for="requested-university"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Requested university:
							</label>
							<input
								type="text"
								id="requested-university"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="required degree"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Required degree:
							</label>
							<input
								type="text"
								id="required degree"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="initial-university"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Initial amount paid to the university:
							</label>
							<input
								type="text"
								id="initial-university"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="student-status:"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Student status:
							</label>
							<input
								type="text"
								id="student-status:"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
					</div>
					<div class="basis-1 md:basis-1/3 m-4">
						<div class="mb-3">
							<label
								for="name"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								First name:
							</label>
							<input
								type="text"
								id="name"
								onChange={(e) => Setname(e.target.value)}
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="last-name"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Last name:
							</label>
							<input
								type="text"
								id="last-name"
								onChange={(e) => Setfamily(e.target.value)}
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="father-name"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Father name:
							</label>
							<input
								type="text"
								id="father-name"
								onChange={(e) => Setage(e.target.value)}
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required=""
							/>
						</div>
						<div class="mb-3 relative">
							<div class="flex absolute top-9 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
							<label
								for="birthday"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Date of birth:
							</label>
							<input
								datepicker=""
								type="text"
								id="birthday"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
								placeholder="Select date"
							/>
						</div>
						<div class="mb-3">
							<label
								for="place-birth"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Place of birth:
							</label>
							<input
								type="text"
								id="place-birth"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="surname"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Name and surname of the guarantor:
							</label>
							<input
								type="text"
								id="surname"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<label
								for="passport-guarantor"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Passport number guarantor:
							</label>
							<input
								type="number"
								id="passport-guarantor"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder=""
								required=""
							/>
						</div>
						<div class="mb-3">
							<fieldset>
								<legend class="mb-3">Identifier name:</legend>
								<div class="border p-4">
									<div class="flex items-center mb-4">
										<label
											for="checkbox-1"
											class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											Represention
										</label>
										<input
											id="checkbox-1"
											aria-describedby="checkbox-1"
											type="checkbox"
											class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
									</div>
									<div class="flex items-center mb-4">
										<label
											for="checkbox-2"
											class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											Direct link
										</label>
										<input
											id="checkbox-2"
											aria-describedby="checkbox-2"
											type="checkbox"
											class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
									</div>
								</div>
							</fieldset>
						</div>
						<div>
							<fieldset>
								<legend class="mb-3">
									How to get acquainted with nekan group:
								</legend>
								<div class="border p-4">
									<div class="flex items-center mb-4">
										<label
											for="checkbox-3"
											class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											Social media
										</label>
										<input
											id="checkbox-3"
											aria-describedby="checkbox-3"
											type="checkbox"
											class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
									</div>
									<div class="flex items-center mb-4">
										<label
											for="checkbox-4"
											class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											Introducing friends
										</label>
										<input
											id="checkbox-4"
											aria-describedby="checkbox-4"
											type="checkbox"
											class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
									</div>
									<div class="flex items-center mb-4">
										<label
											for="checkbox-5"
											class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											Tv ads
										</label>
										<input
											id="checkbox-5"
											aria-describedby="checkbox-5"
											type="checkbox"
											class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</div>
				<div className="gender-details mx-5">
					<input type="radio" name="gender" id="dot-1" />
					<input type="radio" name="gender" id="dot-2" />
					<input type="radio" name="gender" id="dot-3" />
					<span className="gender-title">Gender</span>
					<div className="category">
						<label htmlFor="dot-1">
							<span className="dot one"></span>
							<span className="gender">Male</span>
						</label>
						<label htmlFor="dot-2">
							<span className="dot two"></span>
							<span className="gender">Female</span>
						</label>
					</div>
				</div>
				<button
					type="submit"
					onClick={PostData}
					class="text-white m-4 w-64 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</form>
			<Helmet>
				<script src="https://unpkg.com/flowbite@1.4.1/dist/datepicker.js"></script>
			</Helmet>
		</>
	);
};

export default Register;
