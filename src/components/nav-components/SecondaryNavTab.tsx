import { useState, FC, MouseEvent } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Typography } from "@mui/material";
import { ISubMenuItem } from "../models";
import TertiaryNav from "./TertiaryNav";

interface ISecondaryNavTabProps {
	subItem: ISubMenuItem;
	updateShowSubMenu: (newValue: boolean) => void;
	subItemPath?: string;
}
const SecondaryNavTab: FC<ISecondaryNavTabProps> = ({
	subItem,

	updateShowSubMenu,
	subItemPath,
}) => {
	const [showLevelTwoMenu, setShowLevelTwoMenu] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleHover = (event: MouseEvent<HTMLElement>) => {
		setShowLevelTwoMenu(true);
		if (event.currentTarget !== anchorEl) {
			setAnchorEl(event.currentTarget);
		}
	};
	const handleLeave = () => {
		setShowLevelTwoMenu(false);
		setAnchorEl(null);
	};
	const handleClick = () => {
		if (!subItemPath) return;
		updateShowSubMenu(false);
	};

	return (
		<Box
			role="menuitem"
			tabIndex={0}
			aria-haspopup="true"
			aria-expanded={showLevelTwoMenu}
			aria-label={`${subItem.label}`}
			onMouseOver={handleHover}
			onMouseLeave={handleLeave}
			onClick={handleClick}
			sx={{
				position: "relative",
				background: "#f4f6f9",
				color: "#000000",
				maxHeight: "72px",
				width: "218px",
			}}
		>
			<Typography
				sx={{
					fontWeight: "500",
					fontSize: "14px",
					padding: "8px 10px 8px 20px",
					borderBottom: "1px solid #b5b5b5",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "middle",
					"&:hover": {
						textDecoration: "underline",
					},
				}}
			>
				<span>{subItem.label}</span>
				{(subItem.label === "Administration" ||
					subItem.label === "Effect") && (
					<span>
						{anchorEl ? (
							<ArrowDropDownIcon
								sx={{
									color: "white",
									fontSize: "16px",
									backgroundColor: showLevelTwoMenu
										? "#09436d"
										: "black",
									borderRadius: "50%",
								}}
							/>
						) : (
							<ArrowRightIcon
								sx={{
									color: "white",
									padding: 0,
									fontSize: "16px",
									backgroundColor: showLevelTwoMenu
										? "#09436d"
										: "black",
									borderRadius: "50%",
								}}
							/>
						)}
					</span>
				)}
			</Typography>
			{showLevelTwoMenu && subItem.submenu && (
				<TertiaryNav
					submenu={subItem.submenu}
					setShowLevelTwoMenu={setShowLevelTwoMenu}
				/>
			)}
		</Box>
	);
};
export default SecondaryNavTab;
