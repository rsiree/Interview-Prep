import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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
  Select,
} from "@material-ui/core";
import "./Customer.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import { multiStepContext } from "../../context/StepContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Customer() {
  const {id } = useParams();
  const [id2, setId2] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState("");
  const [user, setUser] = useState([]);
  // const { transferData ,setTransferData, sendMoney } = useContext(multiStepContext);
  const navigate= useNavigate();
  useEffect(() => {
    getData(id)
  
  },[id]);

 useEffect(()=>{
  axios.get("https://bankbackendmasai.herokuapp.com/employees").then((res) => {
    setUser(res.data);
  });
 },[])

console.log(user)
  const getData = async (id) => {
    console.log(id);
    const response =  await axios.get(`https://bankbackendmasai.herokuapp.com/employees/${id}`);
    console.log(response)
    if (response) {
      setData(response.data);
    }
  };

console.log(data)
function sendMoney() {
    console.log(transferData);
   
    axios.put("https://bankbackendmasai.herokuapp.com/employees/money", transferData);
  axios.post("https://bankbackendmasai.herokuapp.com/transactions", transferData);
  alert("money transferred success fully")
    navigate("/employees");
  }

  const count = Number(amount);

const date1 = new Date()

const date =date1.toString()

  const transferData = {
    count,
    id,
    id2,
    date

  };

  return (
    <div style={{marginLeft:"100px"}}>
      <Navbar/>
      <div className="app">
        <div className="details">
          <div className="big-img">
            <img
              src="https://media.istockphoto.com/vectors/cashback-vector-id1324874406?k=20&m=1324874406&s=612x612&w=0&h=j2T9qrg2r0cnTg43Afzon1-ryDrtDKP74YaUgqz_d7E="
             
              
            />
          </div>
          {data &&
          <div className="box">
            <div className="row">
              <h4>
             {data.firstName}
                <h6>
                  {/* <i class="fas fa-star" style={{ color: "yellow" }}></i> */}
                  ₹{data.amount}
                </h6>
              </h4>

              <span>
                {data.accountType}
                <i></i> {data.gender}
              </span>
            </div>
            <div className="row">
              <FormControl>
                <InputLabel id="countrySelectLabel">Transfer to</InputLabel>
                <Select
                  labelId="countrySelectLabel"
                  id="countrySelect"
                  onChange={(e) => setId2(e.target.value)}
                  value={id2}
                >
                  {user.map((code, index) =>
                    data.firstName !== code.firstName ? (
                      <MenuItem key={index} value={code._id}>
                        {code.firstName}
                      </MenuItem>
                    ) : null
                  )}
                </Select>
              </FormControl>
              <TextField
                label="Transfer Amount"
                id="standard-start-adornment"
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                error={amount > data.amount}
                helperText={
                  (console.log(amount),
                  console.log(data.amount),
                  amount > data.amount
                    ? "The amount is greater than your balance"
                    : " ")
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">₹</InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              {amount > data.amount ? (
                <Button variant="contained" disabled>
                  Send
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={sendMoney}>
                  Send
                </Button>
              )}
            </div>
          
          </div>
}
        </div>
          
      </div>
     
    </div>
  );
}
