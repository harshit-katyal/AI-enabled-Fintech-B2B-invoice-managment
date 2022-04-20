import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";


const handleOnClick = async (togglePopup) => {
  const business_code = document.getElementById("business_code").value;
  const customer_number = document.getElementById("customer_number").value;
  const clear_date = document.getElementById("clear_date").value;
  const business_year = document.getElementById("business_year").value;
  const document_id = document.getElementById("document_id").value;
  const posting_date = document.getElementById("posting_date").value;
  const Document_date = document.getElementById("Document_date").value;
  const due_date = document.getElementById("due_date").value;
  const invoice = document.getElementById("invoice").value;
  const type_doc = document.getElementById("type_doc").value;
  const post_id = document.getElementById("post_id").value;
  const open_amount = document.getElementById("open_amount").value;
  const baseline_date = document.getElementById("baseline_date").value;
  const payment_terms = document.getElementById("payment_terms").value;
  const invoice_id = document.getElementById("invoice_id").value;
  console.log(business_code);
  console.log(customer_number);
  console.log(clear_date);
  console.log(business_year);
  console.log(document_id);
  console.log(posting_date);
  console.log(Document_date);
  console.log(due_date);
  console.log(invoice);
  console.log(type_doc);
  console.log(post_id);
  console.log(open_amount);
  console.log(baseline_date);
  console.log(payment_terms);
  console.log(invoice_id);
  const data = {
    business_code: business_code,
    cust_number: customer_number,
    clear_date: clear_date,
    buisness_year: business_year,
    doc_id: document_id,
    posting_date: posting_date,
    document_create_date: Document_date,
    due_in_date: due_date,
    invoice_currency: invoice,
    document_type: type_doc,
    posting_id: post_id,
    area_business: "",
    total_open_amount: open_amount,
    baseline_create_date: baseline_date,
    cust_payment_terms: payment_terms,
    invoice_id: invoice_id,
  };
  const response = await fetch("http://localhost:8080/backend/Add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  togglePopup();
};

const AddPopup = ({ togglePopup }) => {
  return (
    <div className="popup-box">                                         
      <div style={{ height: "65vh", width: "60%" }} className="box">      
        <h1>ADD</h1>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ width: "1000px" }}
        >
          <Grid item xs={3}>
            <div>
              <TextField
                id="business_code"
                label="Business Code"
                variant="outlined"
                className="customer"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="customer_number"
                label="Customer Number"
                variant="outlined"
                className="customer"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="clear_date"
                label="Clear Date"
                variant="filled"
                fullWidth
                className="customer"
                type="date"
                InputLabelProps={{shrink:true}}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="business_year"
                label="Business Year"
                variant="filled"
                className="customer"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="document_id"
                label="Document ID"
                variant="outlined"
                className="customer"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="posting_date"
                label=" Posting Date "
                fullWidth
                variant="filled"
                className="customer"
                type="date"
                InputLabelProps={{shrink:true}}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="Document_date"
                label="Document_Create_Date"
                fullWidth
                variant="filled"
                className="customer"
                type="date"
                InputLabelProps={{shrink:true}}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="due_date"
                label="Due Date"
                fullWidth
                className="customer"
                variant="filled"
                type="date"
                InputLabelProps={{shrink:true}}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="invoice"
                label="Invoice_Currency"
                fullWidth
                className="customer"
                variant="filled"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="type_doc"
                label="DocumentType"
                fullWidth
                className="customer"
                variant="filled"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="post_id"
                label="Posting Id"
                fullWidth
                className="customer"
                variant="filled"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="open_amount"
                label="Total Open Amount"
                fullWidth
                className="customer"
                variant="filled"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="baseline_date"
                label="Baseline Create Date"
                fullWidth
                className="customer"
                variant="filled"
                type="date"
                InputLabelProps={{shrink:true}}
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="payment_terms"
                label="Customer Payment Terms"
                fullWidth
                className="customer"
                variant="filled"
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <TextField
                id="invoice_id"
                label="Invoice Id"
                fullWidth
                className="customer"
                variant="filled"
              />
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <Button
                onClick={() => handleOnClick(togglePopup)}
                variant="outlined"
                type="submit"
                fullWidth
              >
                ADD
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

export default AddPopup;
