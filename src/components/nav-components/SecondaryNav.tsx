import { FC } from "react";

import { Box } from "@mui/material";

import { ISubMenuItem } from "../models";
import SecondaryNavTab from "./SecondaryNavTab";
import { NavLink } from "react-router-dom";
interface ISecondaryNavProps {
	submenu: ISubMenuItem[];

	updateShowSubMenu: (newValue: boolean) => void;
}
const SecondaryNav: FC<ISecondaryNavProps> = ({
	submenu,

	updateShowSubMenu,
}) => {
	return (
		<Box
			role="menu"
			aria-label={`Submenu`}
			sx={{
				position: "absolute",
				top: "35px",
				left: "0px",
				width: "218px",

				transition: "max-height 0.4s ease-out",
				textAlign: "left",
				boxShadow: "3px 2px 3px 0 #666",
			}}
		>
			{submenu.map((subItem) => {
				return (
					<NavLink
						to={subItem.path !== undefined ? subItem.path : "#"}
						key={subItem.label}
						style={{
							display: "block",
							width: "218px",
						}}
					>
						<SecondaryNavTab
							subItem={subItem}
							updateShowSubMenu={updateShowSubMenu}
							subItemPath={
								subItem.path !== undefined
									? subItem.path
									: undefined
							}
						/>
					</NavLink>
				);
			})}
		</Box>
	);
};

export default SecondaryNav;
