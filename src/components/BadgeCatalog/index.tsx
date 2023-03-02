import { BadgeContainer } from "./style";

interface IBadgeProps {
  label: string;
}

export function BadgeCatalog(props: IBadgeProps) {
	return (
		<BadgeContainer>
			{props.label}
		</BadgeContainer>
	);
}