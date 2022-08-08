// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Search } from "./Search";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/search" element={<Search />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
