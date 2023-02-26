import { BadgeContainer } from "./style";

interface IBadgeProps {
  label: string;
}

export function Badge(props: IBadgeProps) {
	return (
		<BadgeContainer>
			{props.label}
		</BadgeContainer>
	);
}