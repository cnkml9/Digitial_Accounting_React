import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const OrderDataGridComponent = ({ rowData, setRowData }) => {
  const handleCellEditCommit = (params) => {
    const { id, field, value } = params;
    const updatedData = rowData.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });

    const updatedDataWithTotalAmount = updatedData.map((item) => {
      const totalAmount = calculateTotalAmount(
        item.amount,
        item.unitPrice,
        item.discountType,
        item.discountAmount,
        item.vatAmount
      );
      return { ...item, totalAmount };
    });

    setRowData(updatedDataWithTotalAmount);
  };

  const handleDeleteRow = (id) => {
    const updatedData = rowData.filter((item) => item.id !== id);
    setRowData(updatedData);
  };

  const handleStatusChange = (e, id) => {
    const { value } = e.target;

    const updatedData = rowData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          discountType: value,
          totalAmount: calculateTotalAmount(
            item.amount,
            item.unitPrice,
            value,
            item.discountAmount,
            item.vatAmount
          ),
        };
      }
      return item;
    });

    setRowData(updatedData);
  };

  const handleAmountChange = (e, id) => {
    const { value } = e.target;

    const updatedData = rowData.map((item) => {
      if (item.id === id) {
        if (item.amount < item.stock) {
          return {
            ...item,
            amount: value,
          };
        } else {
          alert("Stok Sınırına Ulaşıldı !!");
        }
      }
      return item;
    });

    const updatedDataWithTotalAmount = updatedData.map((item) => {
      const totalAmount = calculateTotalAmount(
        item.amount,
        item.unitPrice,
        item.discountType,
        item.discountAmount,
        item.vatAmount
      );
      return { ...item, totalAmount };
    });

    setRowData(updatedDataWithTotalAmount);
  };

  const calculateTotalAmount = (
    amount,
    unitPrice,
    discountType,
    discountAmount,
    vatAmount
  ) => {
    if (discountType === "Oran") {
      const discountedPrice = amount * unitPrice * (1 - discountAmount / 100);
      const vat = (discountedPrice * vatAmount) / 100;
      return discountedPrice + vat;
    } else {
      const discountedPrice = amount * unitPrice - discountAmount;
      const vat = (discountedPrice * vatAmount) / 100;
      return discountedPrice + vat;
    }
  };

  const renderStatusCell = (params) => {
    return (
      <Select
        value={params.row.discountType}
        onChange={(e) => handleStatusChange(e, params.row.id)}
        style={{ width: "100%" }}
      >
        <MenuItem value="Oran">Oran</MenuItem>
        <MenuItem value="Tutar">Tutar</MenuItem>
      </Select>
    );
  };

  const renderVatCell = (params) => {
    const handleVatChange = (e) => {
      const { value } = e.target;

      const updatedData = rowData.map((item) => {
        if (item.id === params.row.id) {
          return {
            ...item,
            vatAmount: value,
            totalAmount: calculateTotalAmount(
              item.amount,
              item.unitPrice,
              item.discountType,
              item.discountAmount,
              value
            ),
          };
        }
        return item;
      });

      setRowData(updatedData);
    };

    return (
      <Select
        value={params.row.vatAmount}
        onChange={handleVatChange}
        style={{ width: "100%" }}
      >
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    );
  };

  const renderActionsCell = (params) => {
    const handleDelete = () => {
      handleDeleteRow(params.row.id);
    };

    return (
      <IconButton onClick={handleDelete} style={{ cursor: "pointer" }}>
        <DeleteIcon />
      </IconButton>
    );
  };

  const [selectedDates, setSelectedDates] = useState({});

  const handleDateChange = (id, date) => {
    setSelectedDates((prevSelectedDates) => ({
      ...prevSelectedDates,
      [id]: date,
    }));

    handleCellEditCommit({
      id,
      field: "supplyDate",
      value: date,
    });
  };

  const renderDatePickerCell = (params) => {
    const { id } = params.row;

    const selectedDate = selectedDates[id] || params.value;

    return (
      <DatePicker
        fullWidth
        openTo="day"
        views={["month", "day"]}
        value={selectedDate}
        label="Fatura Tarihi"
        onChange={(date) => handleDateChange(id, date)}
        format="YYYY-MM-DD"
      />
    );
  };
  const columns = [
    {
      field: "productName",
      headerName: "Ürün Adı",
      align: "left",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          value={params.row.productName}
          onChange={(e) =>
            handleCellEditCommit({
              id: params.row.id,
              field: "productName",
              value: e.target.value,
            })
          }
          fullWidth
        />
      ),
    },
    {
      field: "amount",
      headerName: "Miktarı",
      align: "center",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          type="number"
          value={params.row.amount}
          onChange={(e) => handleAmountChange(e, params.row.id)}
          fullWidth
        />
      ),
    },
    {
      field: "unitType",
      headerName: "Birimi",
      align: "center",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          value={params.row.unitType}
          onChange={(e) =>
            handleCellEditCommit({
              id: params.row.id,
              field: "unitType",
              value: e.target.value,
            })
          }
          fullWidth
        />
      ),
    },
    {
      field: "unitPrice",
      headerName: "Birim Fiyatı",
      align: "center",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          type="number"
          value={params.row.unitPrice}
          onChange={(e) =>
            handleCellEditCommit({
              id: params.row.id,
              field: "unitPrice",
              value: e.target.value,
            })
          }
          fullWidth
        />
      ),
    },
    {
      field: "vatAmount",
      headerName: "Vergi",
      width: 200,
      editable: false,
      renderCell: renderVatCell,
    },
    {
      field: "discountAmount",
      headerName: "İndirimi",
      type: "number",
      width: 200,
      align: "right",
      editable: false,
      renderCell: (params) => (
        <TextField
          type="number"
          value={params.row.discountAmount}
          onChange={(e) =>
            handleCellEditCommit({
              id: params.row.id,
              field: "discountAmount",
              value: e.target.value,
            })
          }
          fullWidth
        />
      ),
    },
    {
      field: "discountType",
      headerName: "İndirim Tipi",
      width: 200,
      editable: false,
      align: "right",
      renderCell: renderStatusCell,
    },
    {
      field: "totalAmount",
      headerName: "Toplam",
      type: "number",
      align: "right",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          type="number"
          value={params.row.totalAmount}
          disabled
          fullWidth
        />
      ),
    },
    {
      field: "supplyDate",
      headerName: "Temin Tarihi",
      type: "date",
      align: "right",
      width: 200,
      editable: true,
      renderCell: renderDatePickerCell,
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: "shippedCount",
      headerName: "Sevk Edilen Miktar",
      type: "number",
      align: "right",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          type="number"
          value={params.row.shippedCount}
          disabled
          fullWidth
        />
      ),
    },
    {
      field: "awaitingCount",
      headerName: "Bekleyen Miktar",
      type: "number",
      align: "right",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          type="number"
          value={params.row.awaitingCount}
          disabled
          fullWidth
        />
      ),
    },
    {
      field: "tracingNumber",
      headerName: "Lot Numarası/Seri Numarası",
      align: "right",
      width: 200,
      editable: false,
      renderCell: (params) => (
        <TextField
          value={params.row.tracingNumber}
          onChange={(e) =>
            handleCellEditCommit({
              id: params.row.id,
              field: "tracingNumber",
              value: e.target.value,
            })
          }
          fullWidth
        />
      ),
    },
    {
      field: "actions",
      headerName: "",
      align: "right",
      width: 200,
      sortable: false,
      renderCell: renderActionsCell,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        onEditCellChangeCommitted={handleCellEditCommit}
        rowHeight={36}
        hideFooter
      />
    </div>
  );
};

export default OrderDataGridComponent;
