import axios from "axios";

let Getapi = ({ setData }) => {
  const url = "http://localhost:8080/backend/Fetch";
  axios.get(url).then((res) => {
    let data = res.data.map((row) => {
      row.buisness_year = row.buisness_year.toString().slice(0, 4);
      return row;
    });
    setData(data);
    
  });
};

export default Getapi;
