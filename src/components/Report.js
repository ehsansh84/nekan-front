import React from "react";
import { Route, Routes } from "react-router-dom";
import DeleteReport from "./DeleteReport";
import ReportList from "./ReportList";

const Report = () => {
	return (
		<>
			<Routes>
				<Route path=":id/delete" element={<DeleteReport />} />
			</Routes>
			<ReportList />
		</>
	);
};

export default Report;
