import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

// third-party
import Chart from "react-apexcharts";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonTotalOrderCard from "ui-component/cards/Skeleton/EarningCard";

import TextField from "@mui/material/TextField";

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Input1 = styled(MainCard)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&>div": {
    position: "relative",
    zIndex: 5,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

const Input = ({ texttoset, nameofinput }) => {
  const theme = useTheme();

  return (
    <>
      <Input1 border={false} content={false}>
        <Box sx={{ p: 2.25 }}>
          <Grid container direction="column">
            <Grid item>
              <Grid container justifyContent="space-between"></Grid>
            </Grid>
            <Grid item sx={{ mb: 0.75 }}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Avatar
                        sx={{
                          ...theme.typography.smallAvatar,
                          cursor: "pointer",
                          backgroundColor: theme.palette.primary[200],
                          color: theme.palette.primary.dark,
                        }}
                      >
                        <ArrowDownwardIcon
                          fontSize="inherit"
                          sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
                        />
                      </Avatar>

                      <div>
                        <TextField
                          required
                          id="outlined-required"
                          label="Required"
                          defaultValue="Hello World"
                        />

                        <TextField
                          required
                          id="outlined-required"
                          label="Required"
                          defaultValue="Hello World"
                        />

                        <TextField
                          required
                          id="outlined-required"
                          label="Required"
                          defaultValue="Hello World"
                        />

                        <TextField
                          required
                          id="outlined-required"
                          label="Required"
                          defaultValue="Hello World"
                        />

                        <TextField
                          required
                          id="outlined-required"
                          label="Required"
                          defaultValue="Hello World"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Input1>
    </>
  );
};

export default Input;
