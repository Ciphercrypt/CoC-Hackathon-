import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button>

        <Box sx={{ ml: 2 }}>
          <ButtonBase sx={{ borderRadius: "12px" }} onClick={handleClick}>
            <HeaderAvatarStyle variant="rounded" >
              <IconSearch stroke={1.5} size="1.2rem" />
            </HeaderAvatarStyle>
          </ButtonBase>
        </Box>

        
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
