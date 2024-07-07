import { Button as MUIButton } from "@mui/material";
// import { Children } from "react";

export const Button = ({onclick, Children, disabled}) => {
    return ( <MUIButton onClick={onclick} disabled={disabled}
    >{Children}
    </MUIButton>
    );
};