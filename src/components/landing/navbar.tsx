import { Github } from "lucide-react";
import Logo from "@/components/logo";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-start">
			<Logo />
			<a
				href="https://github.com/jakmaz/albumfy"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-neutral-900 text-[#f4f1ea] px-3 py-1.5 flex items-center justify-center"
				style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)" }}
			>
				<Github className="w-6 h-6" />
			</a>
		</nav>
	);
};

export default Navbar;
