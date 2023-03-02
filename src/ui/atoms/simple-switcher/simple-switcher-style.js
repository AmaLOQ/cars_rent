import { styled } from "@mui/system";
import { Switch } from "@mui/material";

export const StyledControlledSwitcher = styled(Switch) `
	position: relative;
	top: -5px;
	span > span {
		width: 18px;
		height: 18px;
	}
`;