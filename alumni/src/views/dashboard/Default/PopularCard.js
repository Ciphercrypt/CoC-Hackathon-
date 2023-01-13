import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

// project imports
import BajajAreaChartCard from "./BajajAreaChartCard";
import MainCard from "ui-component/cards/MainCard";
import SkeletonPopularCard from "ui-component/cards/Skeleton/PopularCard";
import { gridSpacing } from "store/constant";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { makeStyles } from "@mui/styles";

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    image: {
      maxWidth: "100%",
      height: "auto",
    },
  });
  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h4">
                      Front End Developer,Google,USA
                    </Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: "pointer",
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem onClick={handleClose}> Today</MenuItem>
                      <MenuItem onClick={handleClose}> This Month</MenuItem>
                      <MenuItem onClick={handleClose}> This Year </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: "16px !important" }}>
                <img
                  src="https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg"
                  className={classes.image}
                  alt="my image"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    {/*  <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Bajaj Finery
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $1839.00
                                                        </Typography>
                                                    </Grid>
                                                   <Grid item>
                                                         <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                backgroundColor: theme.palette.success.light,
                                                                color: theme.palette.success.dark,
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        </Avatar> 
                                                    </Grid> 
                                                </Grid>
                                            </Grid>
                                        </Grid>*/}

                   
                      This error message is indicating that the path argument
                      passed to the cloudinary uploader is either null or not a
                      valid string or Uint8Array. Make sure that you are passing
                      a valid file path or buffer to the uploader. Also check
                      that the file exists at the provided path and that it is
                      accessible.
                    
                  </Grid>
                  <Grid item>
                    Location:
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "success.dark" }}
                    >
                      Florida,USA
                    </Typography>
                  </Grid>
                  <Grid item>
                    Type:
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "success.dark" }}
                    >
                      internship
                    </Typography>
                  </Grid>

                  <Grid item>
                    Salary:
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "success.dark" }}
                    >
                      100,000$
                    </Typography>
                  </Grid>

                  <Grid item>
                    Salary:
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "success.dark" }}
                    >
                      100,000$
                    </Typography>
                  </Grid>

                  <Grid item>
                    Experience:
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "success.dark" }}
                    >
                      5-10 years
                    </Typography>
                  </Grid>

                  <Grid item>
                    Skills:
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "success.dark" }}
                    >
                      Python
                    </Typography>
                  </Grid>

                  <Grid item>
                    Last date to apply:
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "success.dark" }}
                    >
                      12 June 2023
                    </Typography>
                  </Grid>
                </Grid>
                






                
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: "center" }}>
            <Button size="small" disableElevation>
             Apply Now
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PopularCard;
