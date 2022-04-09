import { BrowserRouter,Route, Routes, Link } from 'react-router-dom';
import './App.css';




const App = () => {
  return (
    <div className="flex">
        <div className="flex flex-col w-64 px-4 py-8  border-r">
            <h2 className="text-3xl font-semibold text-center text-blue-800">Dashboard</h2>
            <div className="flex flex-col justify-between mt-6">
                <aside>
                    <ul className="nav nav-tabs flex flex-col flex-wrap list-none" id="tabs-tabVertical"
                    role="tablist">
                        <li class="nav-item flex-grow text-center" role="presentation">
                            <a className=" reg_btn flex items-center my-4 px-4 py-2 text-gray-700 bg-gray-100 rounded-md nav-link block leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent focus:border-transparent active" href="#tabs-homeVertical" id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
                            aria-controls="tabs-homeVertical" aria-selected="true">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="mx-4 font-medium">Register</span>
                            </a>
                        </li>
                        <li class="nav-item flex-grow text-center" role="presentation">
                            <a className=" reg_btn flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md nav-link block leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent focus:border-transparent active" href="#tabs-profileVertical" id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-profileVertical" role="tab"
                            aria-controls="tabs-profileVertical" aria-selected="false">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="mx-4 font-medium">Report</span>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
        <div className="w-full h-full m-8">
            <div className="content-right flex items-center justify-center p-5 border-4 tab-content" id="tabs-tabContentVertical">
                <div class="mt-0 tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
                aria-labelledby="tabs-home-tabVertical">
                    <div className="container ">
                        <div className="title items-center">Student Information Form</div>
                        <div className="content">
                            <form action="#">
                                <div className="user-details">
                                <div className="col">
                                <div className="input-box">
                                    <span className="details">Passport number:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Date of passport issuance:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Passport expiration date:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Email:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Previous degree information:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Graduated form school / university:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Education place:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Previous degree:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Previous field of study:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Admission number:</span>
                                    <input type="text" placeholder="" required/>
                                </div>              
                                <div className="input-box">
                                    <span className="details">Admission delivery date:</span>
                                    <input type="text" placeholder="" required/>
                                </div>              
                                <div className="input-box">
                                    <span className="details">Date of student's trip to the destination:</span>
                                    <input type="text" placeholder="" required/>
                                </div>              
                                <div className="input-box">
                                    <span className="details">Country:</span>
                                    <input type="text" placeholder="" required/>
                                </div>

                                </div>
                                <div className="col">
                                <div className="input-box">
                                    <span className="details">National number:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Residence address:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">WhatsApp number:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Guarantor residence address:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Guarantor contact number:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Place of uploading student diplomas:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Registration date:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Requested country:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Requested university:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Required degree:</span>
                                    <input type="text" placeholder="" required/>
                                </div>              
                                <div className="input-box">
                                    <span className="details">Initial amount paid to the university:</span>
                                    <input type="text" placeholder="" required/>
                                </div>              
                                <div className="input-box">
                                    <span className="details">Student status:</span>
                                    <input type="text" placeholder="" required/>
                                </div>              
                                </div>
                                <div className="col">
                                <div className="input-box">
                                    <span className="details">First name:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Last name:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Father name:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Date of birth:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Gender:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Place of birth:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Name and surname of the guarantor:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Passport number guarantor degree:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Identifier name:</span>
                                    <input type="text" placeholder="" required/>
                                </div>
                                <div className="input-box">
                                    <span className="details">Representation:</span>
                                    <input type="checkbox" placeholder="" required/>
                                </div>              
                                <div className="input-box">
                                    <lable className="details">Direct link:</lable>
                                    <input type="checkbox" placeholder="" required/>
                                </div>              
                                <div className="input-box">
                                    <span className="details">How to get acquainted with nekan group:</span>
                                </div>              
                                <div className="input-box">
                                    <span className="details">Social media:</span>
                                    <input type="checkbox" placeholder="" required/>
                                </div>  
                                <div className="input-box">
                                    <span className="details">Introducing friends / acquaintances:</span>
                                    <input type="checkbox" placeholder="" required/>
                                </div> 
                                <div className="input-box">
                                    <span className="details">Tv ads:</span>
                                    <input type="checkbox" placeholder="" required/>
                                </div>               

                                </div>
                                </div>
                                <div className="gender-details">
                                <input type="radio" name="gender" id="dot-1"/>
                                <input type="radio" name="gender" id="dot-2"/>
                                <input type="radio" name="gender" id="dot-3"/>
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                </div>
                                </div>
                                <div className="button">
                                <input type="submit" value="Register"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="mt-0 tab-pane fade" id="tabs-profileVertical" role="tabpanel"
                aria-labelledby="tabs-profile-tabVertical">
                    <div class="report relative  shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                            <th scope="col" class="px-6 py-3">
                            Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Family
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Possport number
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Gender
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Farzan
                            </th>
                            <td class="px-6 py-4">
                            Erfani
                            </td>
                            <td class="px-6 py-4">
                            151321
                            </td>
                            <td class="px-6 py-4">
                            Female
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Ehsan
                            </th>
                            <td class="px-6 py-4">
                            Shirzadi
                            </td>
                            <td class="px-6 py-4">
                            1353154
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Amin
                            </th>
                            <td class="px-6 py-4">
                            Asadi
                            </td>
                            <td class="px-6 py-4">
                            789784
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Nima
                            </th>
                            <td class="px-6 py-4">
                            Sadeghi
                            </td>
                            <td class="px-6 py-4">
                            45632
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Ati
                            </th>
                            <td class="px-6 py-4">
                            shamloo
                            </td>
                            <td class="px-6 py-4">
                            789784
                            </td>
                            <td class="px-6 py-4">
                            Female
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Farzan
                            </th>
                            <td class="px-6 py-4">
                            Erfani
                            </td>
                            <td class="px-6 py-4">
                            151321
                            </td>
                            <td class="px-6 py-4">
                            Female
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Ehsan
                            </th>
                            <td class="px-6 py-4">
                            Shirzadi
                            </td>
                            <td class="px-6 py-4">
                            1353154
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Amin
                            </th>
                            <td class="px-6 py-4">
                            Asadi
                            </td>
                            <td class="px-6 py-4">
                            789784
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Nima
                            </th>
                            <td class="px-6 py-4">
                            Sadeghi
                            </td>
                            <td class="px-6 py-4">
                            45632
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Ati
                            </th>
                            <td class="px-6 py-4">
                            shamloo
                            </td>
                            <td class="px-6 py-4">
                            789784
                            </td>
                            <td class="px-6 py-4">
                            Female
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Farzan
                            </th>
                            <td class="px-6 py-4">
                            Erfani
                            </td>
                            <td class="px-6 py-4">
                            151321
                            </td>
                            <td class="px-6 py-4">
                            Female
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Ehsan
                            </th>
                            <td class="px-6 py-4">
                            Shirzadi
                            </td>
                            <td class="px-6 py-4">
                            1353154
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Amin
                            </th>
                            <td class="px-6 py-4">
                            Asadi
                            </td>
                            <td class="px-6 py-4">
                            789784
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Nima
                            </th>
                            <td class="px-6 py-4">
                            Sadeghi
                            </td>
                            <td class="px-6 py-4">
                            45632
                            </td>
                            <td class="px-6 py-4">
                            Male
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Ati
                            </th>
                            <td class="px-6 py-4">
                            shamloo
                            </td>
                            <td class="px-6 py-4">
                            789784
                            </td>
                            <td class="px-6 py-4">
                            Female
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show</button>
                            </td>
                            <td class="px-6 py-4 text-right">
                            <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Contract</button>
                            </td>
                            </tr>

                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default App;
