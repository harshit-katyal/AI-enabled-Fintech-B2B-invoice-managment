import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./vars";
import { CheckBox } from "@material-ui/icons";
import { style } from "@mui/system";

const Header = ({
  data,
  selectedRowIds,
  setSelectedRowIds,
  selectedRows,
  setSelectedRows,
}) => {
  const [pageSize, setPageSize] = useState(10);
  // useEffect(() => {
  //   enableButtons(selectedRowIds);
  // }, [selectedRowIds]);

  return (
    <div
      style={{
        height: 480,
        width: "100%",
        color: "white",
      }}
      
    >
      <DataGrid
      // components={{
      //   Checkbox: CheckBox,
      // }}
        sx={{ color: "white" }}
        density="compact"
        getRowId={(row) => row.sl_no}
        rows={data}
        columns={columns}
        checkboxSelection 
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 50]}
        onSelectionModelChange={(itm) => {
          const selectedRowIds = new Set(itm);
          const selectedRows = data.filter((row) =>
            selectedRowIds.has(row.id),
          );
          setSelectedRows(selectedRows);
          setSelectedRowIds(selectedRowIds);
        }}
      />
    </div>
  );
};

export default Header;
