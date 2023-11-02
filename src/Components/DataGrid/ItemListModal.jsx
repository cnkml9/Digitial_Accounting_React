import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1500,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const columns = [
  { field: "productName", headerName: "Ürün Adı", align: "left", width: 90 },
  { field: "stock", headerName: "Miktarı", align: "center", width: 90 },
  { field: "unitType", headerName: "Birimi", align: "center", width: 90 },
  {
    field: "unitPrice",
    headerName: "Birim Fiyatı",
    align: "center",
    width: 90,
  },
  {
    field: "discountAmount",
    headerName: "İndirimi",
    type: "number",
    width: 90,
    align: "right",
  },
  { field: "discountType", headerName: "Status", width: 120, editable: true },
  { field: "totalAmount", headerName: "Toplam", type: "number", width: 110 },
];
const ItemListModal = (props) => {
  function createData(
    id,
    productName,
    amount,
    unitType,
    unitPrice,
    vatAmount,
    discountAmount,
    discountType,
    totalAmount,
    tracingNumber,
    stock
  ) {
    return {
      id,
      productName,
      amount,
      unitType,
      unitPrice,
      vatAmount,
      discountAmount,
      discountType,
      totalAmount,
      tracingNumber,
      stock,
    };
  }
  const sampleRow = [
    createData(5717, "Ürün 4", 1, "Adet", 18, 18, 0, "Oran", 0, undefined, 5),
    createData(6123, "Ürün 3", 1, "Adet", 14, 18, 0, "Oran", 0, undefined, 10),
    createData(9128, "Ürün 1", 1, "Adet", 1019, 18, 0, "Oran", 0, undefined, 7),
    createData(5612, "Ürün 2", 1, "Adet", 1991, 18, 0, "Oran", 0, undefined, 2),
  ];
  const [rowData, setRowData] = useState(sampleRow);
  const [open, setOpen] = useState(false);
  const [filterModel, setFilterModel] = useState({
    items: [
      {
        columnField: "productName",
        field: "productName",
        operatorValue: "contains",
        value: null,
        operator: "contains",
        filterType: "text",
      },
    ],
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChildRowSelection = (row) => {
    props.onRowClick(row);
  };

  const handleFilterModelChange = (model) => {
    setFilterModel(model); // Filtre modelini güncelliyoruz
  };

  const handleApplyFilters = () => {
    console.log(filterModel);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ width: "12%", height: "50px" }}
      >
        Ürün Ekle
      </Button>
      <ChildComponent
        open={open}
        handleClose={handleClose}
        rows={rowData}
        handleChildRowSelection={handleChildRowSelection}
        filterModel={filterModel}
        onFilterModelChange={handleFilterModelChange}
        onApplyFilters={handleApplyFilters}
      />
    </Box>
  );
};

const ChildComponent = ({
  open,
  handleClose,
  rows,
  handleChildRowSelection,
  filterModel,
  onFilterModelChange,
  onApplyFilters,
}) => {
  const handleRowSelection = (params) => {
    const row = params.row;
    handleChildRowSelection(row);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: GridToolbarFilterButton,
          }}
          filterModel={filterModel}
          onFilterModelChange={onFilterModelChange}
          disablePagination
          disableColumnMenu
          onRowClick={handleRowSelection}
          disableRowSelectionOnClick
          disableDensitySelector
          hideFooter
        />
        <Button onClick={onApplyFilters}>Filtreleri Uygula</Button>
      </Box>
    </Modal>
  );
};

export default ItemListModal;
