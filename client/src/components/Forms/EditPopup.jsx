import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

const EditPopup = ({ togglePopup, selectedRowIds,selectedRows }) => 
{
  const editPreload=(selectedRows)=> 
  {
    console.log(JSON.stringify(selectedRows, null, 4));
  }


  return (
    <div className="popup-box">
      <div style={{ height: "25vh", width: "60%" }} className="box">
        <h1>EDIT</h1>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ width: "1000px" }}
        >
          <Grid item xs={6}>
            <div>
              <TextField
                id="invoice_currency"
                label="Invoice Currency"
                variant="outlined"
                className="customer"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <TextField
                id="cust_payment_terms"
                label="Customer Payment Terms"
                variant="outlined"
                className="customer"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Button
                variant="outlined"
                onClick={() => handleOnClick(togglePopup, selectedRowIds)}
                fullWidth
              >
                EDIT
              </Button>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <Button variant="outlined" onClick={togglePopup} fullWidth>
                CANCEL
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditPopup;

const handleOnClick = async (togglePopup, selectedRowIds) => {
  const invoice_currency = document.getElementById("invoice_currency").value;
  let selected=[...selectedRowIds];
  const cust_payment_terms =
    document.getElementById("cust_payment_terms").value;

  const data = {
    invoice_currency: invoice_currency,
    cust_payment_terms: cust_payment_terms,
    sl_no: selected[0],
  };
  
   await fetch("http://localhost:8080/backend/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  togglePopup();
  window.location.reload(false)
};
