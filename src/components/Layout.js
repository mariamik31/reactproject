import React from "react";
import { Grid } from "@mui/material";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Grid container direction="column" sx={{ minHeight: "100vh" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          oaddingTop: 20,
          minHeight: "100%",
          width: "100%"
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};
