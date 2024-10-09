import styles from "./OfficeSelections.module.css";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

interface User {
	id: number;
	name: string;
}

const OfficeSelections: React.FC = () => {
	const [officeIndex, setOfficeIndex] = useState<number | string>(
		"--Select Office--"
	);
	const [users, setUsers] = useState<User[]>([]);

	const updateOfficeIndex = (newValue: number) => {
		setOfficeIndex(newValue);
	};

	const getUsers = async () => {
		try {
			const response = await axios.get<User[]>(
				`https://jsonplaceholder.typicode.com/users`
			);
			setUsers(response.data);
		} catch (error) {
			console.log("error in data fetch", error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	const theme = createTheme({
		components: {
			MuiSelect: {
				styleOverrides: {
					root: {
						fontSize: "14px",
						fontFamily: "Arial, Helvetica, sans-serif",
						color: "#333",
						padding: 0,
						width: "210px",
						height: "25px",
						backgroundColor: "white",
						marginRight: "5px",
						border: "none",
						borderRadius: "0px",
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					input: {
						padding: "5px 5px",
					},
				},
			},
			MuiMenuItem: {
				styleOverrides: {
					root: {
						color: "#333",

						fontSize: "14px",
						fontFamily: "Arial, Helvetica, sans-serif",
						paddingLeft: "5px",
						paddingTop: 2,
						paddingBottom: 2,
						"&:hover": {
							backgroundColor: "#7c7c7c",
							color: "white",
						},
					},
				},
			},
			MuiMenu: {
				styleOverrides: {
					paper: {
						minWidth: "210px",
						maxHeight: "500px",
					},
				},
			},
		},
	});
	const menuProps = {
		PaperProps: {
			style: {
				marginTop: 5,
				marginLeft: "10px",
				width: "250px",
				padding: 0,
				borderRadius: "0",
			},
		},
		anchorOrigin: {
			vertical: "bottom" as const,
			horizontal: "right" as const,
		},
		transformOrigin: {
			vertical: "top" as const,
			horizontal: "right" as const,
			/* 
      LEARNING : vertical and horizontal properties: These expect specific values, 
      such as 'top', 'bottom', 'center' (for transformOrigin) or 'left', 'right', 'top', 'bottom' (for anchorOrigin). 
      We must explicitly cast them using as const to satisfy TypeScript's type checking.
      */
		},
	};
	return (
		<ThemeProvider theme={theme}>
			<Box className={styles.selection}>
				<span>Select Office</span>
				<Select
					value={officeIndex}
					onChange={(event) =>
						updateOfficeIndex(Number(event.target.value))
					}
					displayEmpty
					inputProps={{ "aria-label": "Without label" }}
					MenuProps={menuProps}
				>
					<MenuItem value={"--Select Office--"} disabled>
						--Select Office--
					</MenuItem>
					{users.map((singleUserData) => (
						<MenuItem
							value={singleUserData.id}
							key={singleUserData.id}
						>
							{singleUserData.name}
						</MenuItem>
					))}
					{users.map((singleUserData) => (
						<MenuItem
							value={singleUserData.id + 10}
							key={singleUserData.id + "A"}
						>
							{singleUserData.name} AA
						</MenuItem>
					))}
				</Select>
			</Box>
		</ThemeProvider>
	);
};

export default OfficeSelections;
