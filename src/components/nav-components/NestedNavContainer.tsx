import { useState, FC, MouseEvent, useEffect } from "react";
import MenuBox from "../common/MenuBoxItem";
import { MenuItem } from "@mui/material";
import { IMenuItem } from "../models";

interface INestedNavContainerProps {
	subItem: IMenuItem;
}

const NestedNavContainer: FC<INestedNavContainerProps> = ({ subItem }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const updateAnchorEl = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleLeave = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		console.log(anchorEl);
	}, [anchorEl]);
	console.log(subItem);
	return (
		<MenuBox anchorEl={anchorEl} clearAnchorEl={handleLeave}>
			{subItem.submenu?.map((nestedItem, index) => (
				<MenuItem
					onMouseOver={updateAnchorEl}
					onMouseLeave={handleLeave}
					key={index}
					sx={{
						padding: 0,
						borderBottom: "1px solid #b5b5b5",
						margin: 0,
					}}
				>
					{nestedItem.label}
				</MenuItem>
			))}
		</MenuBox>
	);
};

export default NestedNavContainer;
