import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

function setColor(colorMode: string) {
	document.getElementsByTagName("html")[0].dataset.colorMode = colorMode;
}

function ThemeOverride({
	theme,
	children,
}: {
	theme: string;
	children: ReactNode;
}) {
	return <div data-color-mode={theme}>{children}</div>;
}

const colors = [
	"blue",
	"green",
	"red",
	"orange",
	"stone",
	"zinc",
	"slate",
	"neutral",
	"gray",
	"rose",
	"yellow",
	"violet",
];

export function ThemeTools() {
	return (
		<div className="flex flex-col gap-2 items-start">
			<Label>Dark/Light Mode</Label>
			<ThemeToggle />
			<Label>Color Theme</Label>
			<div className="flex gap-2 flex-wrap">
				{colors.map(color => (
					<ThemeOverride key={color} theme={color}>
						<Button
							className="w-24"
							onClick={() => setColor(color)}
						>
							{color}
						</Button>
					</ThemeOverride>
				))}
			</div>
		</div>
	);
}
