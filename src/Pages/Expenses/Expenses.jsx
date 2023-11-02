import ContentHeaderComponent from "../../Components/ContentHeader";
import Dropdown from "react-bootstrap/Dropdown";
import { Box, Card } from "@mui/material";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconButton, MenuItem, Select, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpensesPage = () => {
  const rows = [
    {
      id: 1,
      creationDate: new Date(2023, 10, 2),

      işlemler: "Snow",
      işlemtipi: "Jon",
      adsoyadünvan: "kadir kiriş",
      faturanumarası: 31,
      vadetarihi: new Date(),
      tutar: 69,
      kalantutar: 31,
      iptaldurumu: "var",
      muhasebenotu: new Date(),
    },
  ];
  const [rowData, setRowData] = useState(rows);

  const columns = [
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      sortable: false,
    },
    {
      field: "creationDate",
      headerName: "Tarih",
      type: "date",
      align: "center",
      width: 200,
      editable: false,
    },
    {
      field: "name",
      headerName: "Ad Soyad / Ünvan",
      align: "center",
      width: 200,
      editable: false,
    },
    {
      field: "documentType",
      headerName: "Belge Türü",
      align: "center",
      width: 200,
      editable: false,
    },
    {
      field: "receiptNumber",
      headerName: "Fiş / Fatura No",
      width: 200,
      editable: false,
    },
    {
      field: "paymentStatus",
      headerName: "Ödeme Durumu",
      type: "number",
      width: 200,
      editable: false,
    },
    {
      field: "expiryDate",
      headerName: "Vade Tarihi",
      width: 200,
      editable: false,
    },
    {
      field: "totalAmount",
      headerName: "Tutar",
      width: 200,
      editable: false,
    },
    {
      field: "description",
      headerName: "Açıklama",
      align: "center",
      width: 200,
      editable: false,
    },
    {
      field: "accountingNote",
      headerName: "Muhasebe Notu",
      width: 200,
      editable: false,
    },
  ];

  return (
    <>
      <ContentHeaderComponent description={"Giderler"} />
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
            <Button variant="contained" color="success" href="/expenses/add">
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

export default ExpensesPage;
