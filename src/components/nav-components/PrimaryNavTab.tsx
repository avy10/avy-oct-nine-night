import { FC } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";

import { IMenuItem } from "../models";
import PrimaryNavContainer from "./primary-nav-components/PrimaryNavContainer";
interface IPrimaryNavTabProps {
	menuItem: IMenuItem;
	primaryUrlPath: string;
}

const checkNavActive = (
	primaryUrlPath: string,
	pathValue: string | undefined,
	label: string
) => {
	if (pathValue !== undefined) {
		return primaryUrlPath === pathValue;
	} else {
		const labelWords = label.split(" ");
		const labelPath = labelWords
			.map((word) => word.toLowerCase())
			.join("-");
		const labelURL = "swat/" + labelPath;
		return labelURL === primaryUrlPath;
	}
};
const PrimaryNavTab: FC<IPrimaryNavTabProps> = ({
	menuItem,
	primaryUrlPath,
}) => {
	const { path, label, submenu } = menuItem;

	return (
		<ListItem
			sx={{
				padding: 0,
				width: "fit-content",
			}}
		>
			<NavLink to={path !== undefined ? path : "#"}>
				<PrimaryNavContainer
					isActive={checkNavActive(primaryUrlPath, path, label)}
					label={label}
					submenu={submenu}
					path={path}
				/>
			</NavLink>
		</ListItem>
	);
};

export default PrimaryNavTab;
