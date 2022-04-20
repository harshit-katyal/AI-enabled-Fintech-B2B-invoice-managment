import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";

const handleSearch = (
  setData,
  data,
  togglePopup
) => {
  const doc_id = document.getElementById("doc_id").value.toString();
  const cust_no = document.getElementById("customer_no").value.toString();
  const invoice_id = document.getElementById("Invoice_no").value.toString();
  const buisness_yr = document.getElementById("business_year").value;

  console.log(doc_id,cust_no,invoice_id,buisness_yr);

  setData(
    data.filter(
      (row) =>
        row.doc_id.toString().includes(doc_id) &&
        row.cust_number.toString().includes(cust_no) &&
        row.invoice_id.includes(invoice_id) &&
        row.buisness_year.includes(buisness_yr)
    )
  );
  togglePopup();
};
const AdvanceSearchPopup = ({ togglePopup, setData, data }) => {
  return (
    <div className="popup-box">
      <div style={{ height: "40vh", width: "58%" }} className="box">
        <h1>ADVANCED SEARCH</h1>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ width: "1000px" }}
        >
          <Grid item xs={6}>
            <div>
              <TextField
                id="doc_id"
                label="Document-Id"
                variant="outlined"
                fullWidth
                className="customer"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <TextField
                id="customer_no"
                label="Customer Number"
                variant="outlined"
                fullWidth
                className="customer"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <TextField
                id="Invoice_no"
                label="Invoice Number"
                variant="outlined"
                fullWidth
                className="customer"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <TextField
                id="business_year"
                label="Business Year"
                variant="outlined"
                fullWidth
                className="customer"
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <Button
                variant="outlined"
                aria-label="outlined button group"
                type="submit"
                fullWidth
                onClick={() => handleSearch(setData, data,togglePopup)}
              >
                SEARCH
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Button
                variant="outlined"
                aria-label="outlined button group"
                onClick={togglePopup}
                fullWidth
              >
                CANCEL
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AdvanceSearchPopup;
