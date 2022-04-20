import React from "react";
import EditPopup from "./Forms/EditPopup";
import AddPopup from "./Forms/AddPopup";
import DeletePopup from "./Forms/DeletePopup";
import AdvanceSearchPopup from "./Forms/AdvanceSearchPopup";

const Popup = (props) => {
  return <>{props.content}</>;
};

const popup = (
  isOpen,
  togglePopup,
  popuptype,
  selectedRowIds,
  selectedRows,
  data,
  setData
) => {
  if (isOpen) {
    if (popuptype === "EDIT") {
      return (
        <Popup
          content={
            <EditPopup
              selectedRowIds={selectedRowIds}
              togglePopup={togglePopup}
              selectedRows={selectedRows}
            />
          }
        />
      );
    }
    if (popuptype === "ADD") {
      return <Popup content={<AddPopup togglePopup={togglePopup} />} />;
    }
    if (popuptype === "DELETE") {
      return (
        <Popup
          content={
            <DeletePopup
              togglePopup={togglePopup}
              selectedRowIds={selectedRowIds}
            />
          }
        />
      );
    }

    if (popuptype === "ADVANCESEARCH") {
      return (
        <Popup
          content={
            <AdvanceSearchPopup
              togglePopup={togglePopup}
              data={data}
              setData={setData}
            />
          }
        />
      );
    }
  }
};

export { popup };
