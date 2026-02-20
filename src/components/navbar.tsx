import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/logo";

const Navbar = () => {
	const location = useLocation();
	const isEditor = location.pathname === "/create";

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-6 md:px-8">
			<Logo />
			<div className="flex items-center gap-4">
				{!isEditor && (
					<Link
						to="/create"
						className="font-mono text-xs uppercase tracking-[2px] text-neutral-600 hover:text-neutral-900 transition-colors"
					>
						Open Lab →
					</Link>
				)}
				{isEditor && (
					<span className="font-mono text-xs uppercase tracking-[2px] text-neutral-500">
						Lab. v0.42
					</span>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
