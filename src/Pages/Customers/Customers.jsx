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
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PaidIcon from "@mui/icons-material/Paid";
const CustomersPage = () => {
  const navigate = useNavigate();
  const handleDeleteRow = (id) => {
    if (confirm("Veritabanından bu Müşteri Silinecek !! Eminmisin ?")) {
      const updatedData = rowData.filter((item) => item.id !== id);
      setRowData(updatedData);
    } else {
      console.log("Thing was not saved to the database.");
    }
  };
  const handleEditRow = (id) => {
    navigate()
  };
  const handleTransactionRow = (id) => {
    console.log("Transaction Page");
  };
  const renderActionsCell = (params) => {
    const handleDelete = () => {
      handleDeleteRow(params.row.id);
    };
    const handleEdit = () => {
      handleEditRow(params.row.id);
    };
    const handleTransaction = () => {
      handleTransactionRow(params.row.id);
    };

    return (
      <>
        <IconButton onClick={handleDelete} style={{ cursor: "pointer" }}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleEdit} style={{ cursor: "pointer" }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleTransaction} style={{ cursor: "pointer" }}>
          <PaidIcon />
        </IconButton>
      </>
    );
  };
  const renderBalanceCell = (params) => {
    console.log(params.row.balance);
    return (
      <>
        <Typography>{params.row.balance}</Typography>
      </>
    );
  };
  const rows = [
    {
      id: 1,
      name: "Mehmet",
      province: "Kırıkkale",
      phone: "055258123567",
      balance: "231315",
      active: "Pasif",
      customerCode: 23512323151,
    },
  ];
  const [rowData, setRowData] = useState(rows);

  const columns = [
    {
      field: "actions",
      headerName: "",
      width: 200,
      sortable: false,
      renderCell: renderActionsCell,
    },
    {
      field: "name",
      headerName: "Ad Soyad / Ünvan",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "province",
      headerName: "İl",
      width: 200,
      editable: false,
    },
    {
      field: "phone",
      headerName: "Telefon",
      type: "text",
      align: "left",
      width: 200,
      editable: false,
    },
    {
      field: "balance",
      headerName: "Bakiye",
      align: "left",
      width: 200,
      editable: false,
      renderCell: renderBalanceCell,
    },
    {
      field: "active",
      headerName: "Aktif mi ?",
      align: "left",
      width: 200,
      editable: false,
    },

    {
      field: "customerCode",
      headerName: "Müşteri / Tedarikçi Kodu",
      align: "left",
      width: 200,
      editable: false,
    },
  ];

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
  const handleFilterModelChange = (model) => {
    setFilterModel(model); // Filtre modelini güncelliyoruz
  };

  const handleApplyFilters = () => {
    console.log(filterModel);
  };
  return (
    <>
      <ContentHeaderComponent description={"Müşteri ve Tedarikçi"} />
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
            <Button variant="contained" color="success" href="/customers/add">
              Ekle
            </Button>
          </Box>
        </Box>

        <Box sx={{ height: 400, width: "100%", mt: 4 }}>
          <DataGrid
            rows={rowData}
            columns={columns}
            slots={{
              toolbar: GridToolbarFilterButton,
            }}
            filterModel={filterModel}
            onFilterModelChange={handleFilterModelChange}
            initialState={{
              pagination: {
                pageSize: 5,
              },
            }}
            pageSizeOptions={[5, 100]}
            defaultPageSize={5}
          />
        </Box>
        <Button onClick={handleApplyFilters}>Filtreleri Uygula</Button>
      </Card>
    </>
  );
};

export default CustomersPage;
