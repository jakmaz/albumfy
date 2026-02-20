import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	const isEditor = location.pathname === "/create";

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-6 md:px-8">
			<Link to="/" className="flex items-center gap-3">
				<span className="font-sans text-xl font-extrabold uppercase tracking-tight">
					Albumfy
				</span>
			</Link>
			<div className="flex items-center gap-4">
				{!isEditor && (
					<Link
						to="/create"
						className="font-mono text-xs uppercase tracking-[2px] text-muted-foreground hover:text-foreground transition-colors"
					>
						Open Lab →
					</Link>
				)}
				{isEditor && (
					<span className="font-mono text-xs uppercase tracking-[2px] text-muted-foreground">
						Lab. v0.42
					</span>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
