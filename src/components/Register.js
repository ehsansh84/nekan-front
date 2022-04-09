import React from "react";

const Register = () => {
	return (
		<>
			<div
				className="main-container mt-0 tab-pane fade show active"
				id="tabs-homeVertical"
				role="tabpanel"
				aria-labelledby="tabs-home-tabVertical"
			>
				<div className="register container ">
					<div className="title items-center">Student Information Form</div>
					<div className="content">
						<form action="#">
							<div className="user-details">
								<div className="col">
									<div className="input-box">
										<span className="details">Passport number:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Date of passport issuance:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Passport expiration date:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Email:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Previous degree information:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Graduated form school / university:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Education place:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Previous degree:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Previous field of study:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Admission number:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Admission delivery date:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Date of student's trip to the destination:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Country:</span>
										<input type="text" placeholder="" required />
									</div>
								</div>
								<div className="col">
									<div className="input-box">
										<span className="details">National number:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Residence address:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">WhatsApp number:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Guarantor residence address:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Guarantor contact number:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Place of uploading student diplomas:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Registration date:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Requested country:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Requested university:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Required degree:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Initial amount paid to the university:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Student status:</span>
										<input type="text" placeholder="" required />
									</div>
								</div>
								<div className="col">
									<div className="input-box">
										<span className="details">First name:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Last name:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Father name:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Date of birth:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Place of birth:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Name and surname of the guarantor:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Passport number guarantor degree:
										</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Identifier name:</span>
										<input type="text" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Representation:</span>
										<input type="checkbox" placeholder="" required />
									</div>
									<div className="input-box">
										<lable className="details">Direct link:</lable>
										<input type="checkbox" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											How to get acquainted with nekan group:
										</span>
									</div>
									<div className="input-box">
										<span className="details">Social media:</span>
										<input type="checkbox" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">
											Introducing friends / acquaintances:
										</span>
										<input type="checkbox" placeholder="" required />
									</div>
									<div className="input-box">
										<span className="details">Tv ads:</span>
										<input type="checkbox" placeholder="" required />
									</div>
								</div>
							</div>
							<div className="gender-details">
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
							<div className="button">
								<input type="submit" value="Register" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
