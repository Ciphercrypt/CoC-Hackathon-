import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import InstagramPost from "./Default/chart-data/PostComponent";
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

const Photogalary = ({ isLoading }) => {
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
            <InstagramPost
              username={"Avi Mohite"}
              profile_picture={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              caption={
                "This error message is indicating that the path argument passed to the cloudinary uploader is either null or not a valid string or Uint8Array. Make sure that you are passing a valid file path or buffer to the uploader. Also check that the file exists at the provided path and that it is accessible."
              }
              branch="Computer"
              year={2023}
              batch={2001}
              branch_of_post={"civil"}
              event_desc={"random pic"}
              media_url={
                "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"
              }
            />{" "}
            <InstagramPost
              username={"Avi Mohite"}
              profile_picture={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              caption={
                "This error message is indicating that the path argument passed to the cloudinary uploader is either null or not a valid string or Uint8Array. Make sure that you are passing a valid file path or buffer to the uploader. Also check that the file exists at the provided path and that it is accessible."
              }
              branch="Computer"
              year={2023}
              batch={2001}
              branch_of_post={"civil"}
              event_desc={"random pic"}
              media_url={
                "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"
              }
            />{" "}
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

Photogalary.propTypes = {
  isLoading: PropTypes.bool,
};

export default Photogalary;
