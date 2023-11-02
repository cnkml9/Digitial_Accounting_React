import ContentHeaderComponent from "../../Components/ContentHeader";
import Dropdown from "react-bootstrap/Dropdown";
import { Box, Card } from "@mui/material";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconButton, MenuItem, Select, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SalesBillsPage = () => {
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
  const handleRowSelection = (params) => {
    //NAVIGATE SECTION
    const row = params.row;
    console.log("Clicked", params.row.id);
  };
  return (
    <>
      <ContentHeaderComponent description={"Satış Faturaları"} />
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
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Ekle
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/invoices/sales/wholesale/add/">
                  Toptan Satış Faturası (KDV Hariç)
                </Dropdown.Item>
                <Dropdown.Item href="/invoices/sales/retail/add">
                  Perakende Satış Faturası (KDV Dahil)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
            onRowClick={handleRowSelection}
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

export default SalesBillsPage;
