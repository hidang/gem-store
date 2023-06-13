import * as React from "react";
import { AppBar, TitlePortal } from "react-admin";
import { Box, useMediaQuery, Theme } from "@mui/material";

const CustomAppBar = () => {
  return (
    <AppBar color="secondary" elevation={1}>
      <TitlePortal />
    </AppBar>
  );
};

export default CustomAppBar;
