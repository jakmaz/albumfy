import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/create";
import Index from "./pages/index";
import NotFound from "./pages/not-found";

export const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/create" element={<Create />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);
