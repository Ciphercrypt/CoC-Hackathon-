import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "./EarningCard";
import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "store/constant";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import InstagramPost from "./chart-data/PostComponent";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid
      container
      spacing={gridSpacing}
      justifyContent="center"
      alignItems={"center"}
    >
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalOrderLineChartCard isLoading={isLoading} />
      </Grid>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalOrderLineChartCard isLoading={isLoading} />
      </Grid>
      <Grid item lg={4} md={6} sm={6} xs={12}>
        <TotalOrderLineChartCard isLoading={isLoading} />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
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
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>

          <Grid item xs={12} md={8}>
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
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={8}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
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
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
