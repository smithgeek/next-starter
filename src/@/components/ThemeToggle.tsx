import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, ButtonProps } from "./ui/button";

export function ThemeToggle(props: ButtonProps) {
	const { resolvedTheme, setTheme } = useTheme();
	return (
		<Button
			variant="outline"
			onClick={() =>
				setTheme(resolvedTheme === "light" ? "dark" : "light")
			}
			{...props}
		>
			{resolvedTheme === "light" ? <Moon /> : <Sun />}
		</Button>
	);
}
