import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ Children, to, style = {} }) => {
    return (
        <RouterLink 
        to={to}
        style={{textDecoration: "none", color: "black", ...style
        }}>
            {Children}
        </RouterLink>
    );
};