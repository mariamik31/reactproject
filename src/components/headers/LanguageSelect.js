import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { object } from "yup";

const languageCodes = {
    en: "English",
    ka: "Georgian",
}

const LanguageSelect = () => {
    return (
        <FormControl>
            <Select sx={{color: "#FF9900", boerder: "2px solid blue"}}>
                {object.entriess(languageCodes).map((item) => {
                    const [languageKey, languageValue] = items;
                    return (
                        <MenuItem key={languageKey} value={languageKey}>
                            {languageValue}
                        </MenuItem> 
                    )
                })}

            </Select>
        </FormControl>
    )
}

export default LanguageSelect