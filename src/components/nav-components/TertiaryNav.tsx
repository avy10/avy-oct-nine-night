import { useState, KeyboardEvent, FC, Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { INestedMenuItem } from "../models";
interface ITertiaryNavProps {
	submenu: INestedMenuItem[];
	setShowLevelTwoMenu: Dispatch<SetStateAction<boolean>>;
}
const TertiaryNav: FC<ITertiaryNavProps> = ({
	submenu,
	setShowLevelTwoMenu,
}) => {
	const [activeIndex, setActiveIndex] = useState(-1);

	const handleKeyDown = (e: KeyboardEvent) => {
		const totalItems = submenu.length;
		switch (e.key) {
			case "ArrowDown":
				setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
				break;
			case "ArrowUp":
				setActiveIndex(
					(prevIndex) => (prevIndex - 1 + totalItems) % totalItems
				);
				break;
			case "Escape":
				setActiveIndex(-1);
				setShowLevelTwoMenu(false);
				break;
			default:
				break;
		}
	};

	return (
		<Box
			role="menu"
			sx={{
				background: "#f4f6f9",
				color: "#000000",
				position: "absolute",
				zIndex: 3,
				left: "219px",

				top: "1px",
				width: "max-content",
				textAlign: "left",
				boxShadow: "3px 2px 3px 0 #666",
			}}
		>
			{submenu.map((nestedItem, index) => (
				<NavLink
					to={nestedItem.path !== undefined ? nestedItem.path : "#"}
					key={index}
				>
					<Typography
						key={`${nestedItem.label}-${index}`}
						role="menuitem"
						tabIndex={0}
						onKeyDown={(e) => {
							e.stopPropagation();
							handleKeyDown(e);
						}}
						aria-label={`${nestedItem.label} item`}
						style={{
							backgroundColor:
								activeIndex === index
									? "#f0f0f0"
									: "transparent",
						}}
						sx={{
							fontWeight: "500",
							fontSize: "14px",
							padding: "8px 10px 8px 20px",
							borderBottom: "1px solid #b5b5b5",
							"&:hover": {
								textDecoration: "underline",
							},
						}}
					>
						{nestedItem.label}
					</Typography>
				</NavLink>
			))}
		</Box>
	);
};

export default TertiaryNav;
