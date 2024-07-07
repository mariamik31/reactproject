import { Typography } from "@mui/material";
import React from "react";

export const Text = ({ variant = "body1", children, style}) => {
    return (
        <Typography variant={variant} sx={{...style}}>
        {children}
    </Typography>
    );
};

