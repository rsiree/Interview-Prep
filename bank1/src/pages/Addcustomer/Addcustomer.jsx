import React, { useContext } from "react";
// import "./Customers.css";
import First from "../First";
import Second from "../Second";
import Third from "../Third";
import {
  Grid,
  Stepper,
  Step,
  Paper,
  makeStyles,
  StepLabel,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  InputLabel,
  Radio,
  MenuItem,
  Select as MuiSelect,
  Button,
} from "@material-ui/core";
import { multiStepContext } from "../../context/StepContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
      testTransform: 'none',
      
    },
  },
  pageContent: {
    margin: theme.spacing(15),
    padding: theme.spacing(5),
    
  },
  // Stepper:{
  //   alignContent
  // }

}));
export default function AddCustomer() {

  const {currentStep , finalData} = useContext(multiStepContext);
  const classes = useStyles();
    function showStep(step) {
      if (step === 1) {
        return <First />;
      } else if (step === 2) {
        return <Second />;
      } else {
        return <Third />;
      }
    }
  return (
    <div style ={{width:"90%"}}>
      <Navbar />
    <Paper  elevation={6} className={classes.pageContent}>

      <form className={classes.root} style={{alignItems:"center"}}>
      <Grid container justify = "center">
            <Stepper style={{width:'50%',color:'red'}} className={classes.Stepper} activeStep={currentStep -1} orientation="horizontal"  >
                <Step>
                    <StepLabel>Employee Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Bank Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel> Confirmation</StepLabel>
                </Step>
            </Stepper>
            </Grid>
            {showStep(currentStep)}
        
      </form>
    </Paper>
    <Footer />
    </div>
  );
}
