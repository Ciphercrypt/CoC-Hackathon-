import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "hooks/useScriptRef";
import Google from "assets/images/icons/social-google.svg";
import AnimateButton from "ui-component/extended/AnimateButton";
import { strengthColor, strengthIndicator } from "utils/password-strength";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// ===========================|| FIREBASE - REGISTER ||=========================== //

const AddEvent = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());


  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const googleHandler = async () => {
    console.error("Register");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("123456");
  }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        
        <Grid item xs={12}>
          
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          title: "",
          message: "",
          priority: "Low",
          action: "",
          data: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            console.log(values)
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          setFieldValue
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Event Title"
                  margin="normal"
                  name="title"
                  type="text"
                  defaultValue=""
                  value={ values.title }
                  onChange={(e) => 
                  handleChange(e)
                }
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Message"
                  margin="normal"
                  name="message"
                  value={ values.message }
                  onChange={(e) => 
                  handleChange(e)
                }
                  type="text"
                  defaultValue=""
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={matchDownSM ? 0 : 2}>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Action"
                  margin="normal"
                  name="action"
                  type="text"
                  value={ values.action }
                  onChange={(e) => 
                  handleChange(e)
                }
                  defaultValue=""
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Data"
                  margin="normal"
                  name="data"
                  value={values.data}
                  type="text"
                  onChange={(e) => 
                  handleChange(e)
                }
                  defaultValue=""
                  sx={{ ...theme.typography.customInput }}
                />
              </Grid>
            </Grid>


            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-label">
                  Priority
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="priority"
                  onChange={(e) => setFieldValue('priority',e.target.value)}
                  value={values.priority}
                >
                  <MenuItem value={"Low"}>Low</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"High"}>High</MenuItem>
                  <MenuItem value={"Very High"}>Very High</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <TextField
  id="datetime-local"
  label="Select Date and Time"
  type="datetime-local"
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
  InputLabelProps={{
    shrink: true,
  }}
/>

              </Grid>
            </Grid>

            
      


            

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddEvent;



