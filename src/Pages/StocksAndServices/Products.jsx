import ContentHeaderComponent from "../../Components/ContentHeader";
import Dropdown from "react-bootstrap/Dropdown";
import { Box, Card } from "@mui/material";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  IconButton,
  MenuItem, 
  Select, 
  TextField, 
  Button,
} from "@mui/material";
import GridItemComponent from "../../Components/Grid/GridItemComponent";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductsPage = () => {
  const rows = [
    {
      id: 1,
      actionType: "Toptan Satış Faturası",
      date: new Date(2023, 10, 19),
      name: "Snow",
      receiptNumber: "0000000001",
      expiryDate: new Date(),
      totalAmount: 181283,
      remainingAmount: 1919,
      cancelInformation: "Evet",
      accountingNote: 69,
    },
  ];
  const [rowData, setRowData] = useState(rows);

  const columns = [
    {
      field: "actionType",
      headerName: "İşlem Tipi",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "date",
      headerName: "Tarih",
      type: "date",
      width: 200,
      editable: false,
    },
    {
      field: "name",
      headerName: "Ad Soyad / Ünvan",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "receiptNumber",
      headerName: "Fatura Numarası",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "expiryDate",
      headerName: "Vade Tarihi",
      align: "left",
      type: "date",
      width: 200,
      editable: false,
    },

    {
      field: "totalAmount",
      headerName: "Tutar",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "remainingAmount",
      headerName: "Kalan Tutar",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "cancelInformation",
      headerName: "İptal Durumu",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "accountingNote",
      headerName: "Muhasebe Notu",
      align: "left",
      width: 200,
      editable: false,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <ContentHeaderComponent description={"Alış Sipariş"} />
      <Card
        sx={{
          bgcolor: "background.paper",
          borderRadius: 5,
          mr: 3,
          ml: 3,
        }}
      >
        <Box sx={{ mt: 3, mr: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="success" href="/products/add">
              Ekle
            </Button>
          </Box>
        </Box>

        <Box sx={{ height: 400, width: "100%", mt: 4 }}>
          <DataGrid
            rows={rowData}
            columns={columns}
            rowHeight={36}
            onRowClick={(params, event) => {
              // ROUTING BURADA YAPILACAK
              console.log(params);
              // if (!event.ignore) {
              //   navigate("/invoices/sales/" + params.row.id);
              // }
            }}
          />
        </Box>
      </Card>
    </>
  );
};

export default ProductsPage;
