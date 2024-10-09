import { FC } from "react";
import MENU_DATA from "../data/menuData";
import styles from "./AppNavigation.module.css";
import { Typography } from "@mui/material";
import List from "@mui/material/List";

import PrimaryNavTab from "./nav-components/PrimaryNavTab";
import OfficeSelections from "./selection/OfficeSelections";
import { useLocation } from "react-router-dom";

const findThirdOccurrence = (inputString: string) => {
	console.log(inputString); // sample string : /swat/admin/administration-role-admin
	// find the third occurence of "/"
	let count = 0;

	for (let i = 0; i < inputString.length; i++) {
		if (inputString[i] === "/") {
			count++;
			if (count === 3) {
				return i;
			}
		}
	}

	return -1;
};

const AppNav: FC = () => {
	let { pathname } = useLocation();

	const thirdInstance = findThirdOccurrence(pathname);
	if (thirdInstance !== -1) {
		pathname = pathname.slice(0, thirdInstance);
	}
	pathname = pathname.slice(0, 0) + pathname.slice(0 + 1);

	console.log("Third slash is found at ", pathname); // Third slash is found at  swat/admin

	/* // pathname is needed to track changes in navigation for
  primary tabs that do not have a path (undefined path) i.e. upon clicking,
   they do not route to a new page
  */
	return (
		<nav aria-labelledby="mainmenulabel" className={styles.mainNav}>
			<Typography
				// for aria
				variant="h2"
				id="mainmenulabel"
				sx={{
					display: "none",
				}}
			>
				Main Menu
			</Typography>
			{/* list of navigation links i.e. <a> */}
			<List
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-end",
					columnGap: "0px",
					padding: 0,
				}}
			>
				{MENU_DATA.map((menuItem) => (
					<PrimaryNavTab
						key={menuItem.label}
						menuItem={menuItem}
						primaryUrlPath={pathname}
					/>
				))}
			</List>
			<OfficeSelections />
		</nav>
	);
};

export default AppNav;
