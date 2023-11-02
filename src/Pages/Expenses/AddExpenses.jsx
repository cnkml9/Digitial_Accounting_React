/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ContentHeaderComponent from "../../Components/ContentHeader";
import dayjs from "dayjs";
import ItemListModal from "../../Components/DataGrid/ItemListModal";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  CardContent,
  Button,
  Stack,
  Grid,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CardHeader,
} from "@mui/material";
import DataGridComponent from "../../Components/DataGrid/InvoiceDataGridComponent";
import SearchComboBox from "../../Components/MiniComponents/SearchComboBox";
import {
  countryTypeComboBox,
  customerTypeComboBox,
  discountTypeComboBox,
  money_units,
} from "../../Utilities/Constants/ComboBoxConstants";
import RadioGroupComponent from "../../Components/MiniComponents/RadioGroup";
import ComboBoxComponet from "../../Components/MiniComponents/ComboBox";
import { PaymentStatusRadioGroup } from "../../Utilities/Constants/RadioGroupConstants";
import TextInputComponent from "../../Components/MiniComponents/TextInput";
import GridItemComponent from "../../Components/Grid/GridItemComponent";
const AddExpensesPage = () => {
  {
    /*Tarihlendirme Stateleri*/
  }
  const [deliveryDate, setDeliveryDate] = useState(dayjs(new Date()));
  const [currency, setCurrency] = useState("");

  const [discountAmount, setDiscountAmount] = useState();
  const [discountType, setDiscountType] = useState("");
  const [receiptNumber, setReceiptNumber] = useState();
  const [description, setDescription] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedBank, setSelectedBank] = useState();
  const [bankList, setBankList] = useState([
    { name: "Merkez", id: 1351 },
    { name: "Kasa", id: 2671 },
  ]);
  const [customer, setCustomer] = useState();
  const [customerList, setCustomerList] = useState([
    { name: "Mehmet", id: 6123 },
    { name: "Muhammed", id: 679685 },
    { name: "Ahmet", id: 412808 },
  ]);
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([
    { name: "Kategori 1", id: 71712 },
    { name: "Kategori 2", id: 236721 },
    { name: "Kategori 3", id: 264676 },
  ]);
  const descriptionChangeHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const radioChangeHandler = (e) => {
    e.preventDefault();
    setPaymentStatus(e.target.value);
  };
  const currencyChangeHandler = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
  };
  const exportSelectedCustomerItem = (e) => {
    setCustomer(e);
  };
  const exportSelectedBankItem = (e) => {
    setSelectedBank(e);
  };
  const exportSelectedCategoryItem = (e) => {
    setCategory(e);
  };

  const categoryChangeHandler = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const discountAmountChangeHandler = (e) => {
    e.preventDefault();
    setDiscountAmount(e.target.value);
  };
  const discountTypeChangeHandler = (e) => {
    e.preventDefault();
    setDiscountType(e.target.value);
  };
  const receiptNumberChangeHandler = (e) => {
    e.preventDefault();
    setReceiptNumber(e.target.value);
  };
  //Grid Scheme
  const [rowData, setRowData] = useState([]);
  const onRowClick = (row) => {
    const id = row.id;
    const searchResult = rowData.filter((obj) => obj.id === parseInt(id));
    if (searchResult.length === 0) {
      setRowData([...rowData, row]);
    } else {
      const updatedList = rowData.map((obj) => {
        if (obj.id === id) {
          alert("Zaten Eklendi");
        }
        return obj;
      });
      setRowData(updatedList);
    }
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContentHeaderComponent
            dontUse={true}
            description={"Hizmet & Masraf"}
          />
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            mr: "auto",
            ml: "auto",
            height: "100%",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={10}
            md={5}
            sx={{
              width: "100%",
              alignItems: "stretch",
            }}
          >
            <GridItemComponent
              sx={{
                height: "100%",
                borderRadius: 2,
                ml: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  mr: 1,
                  ml: 2,
                  mt: 1,
                }}
              >
                <SearchComboBox
                  fullWidth
                  label={"Firma Ünvanı / Adı Soyadı"}
                  exportSelectedItem={exportSelectedCustomerItem}
                  optionList={customerList}
                  sx={{
                    mr: 1,
                  }}
                />
              </Box>
              <CardContent sx={{}}>
                <Stack
                  sx={{
                    mb: 2,
                  }}
                >
                  <DatePicker
                    fullWidth
                    openTo="day"
                    views={["month", "day"]}
                    value={deliveryDate}
                    onChange={(deliveryDate) => {
                      setDeliveryDate(deliveryDate);
                    }}
                    label="Fatura Tarihi"
                    format="DD-MM-YYYY"
                  />
                </Stack>

                <TextInputComponent
                  sx={{
                    mb: 2,
                  }}
                  label={"Fatura Numarası"}
                  fullWidth={true}
                  onChangeHandler={receiptNumberChangeHandler}
                  noValidate={true}
                />
              </CardContent>
            </GridItemComponent>
          </Grid>
          <Grid item xs={10} md={5} sx={{}}>
            <GridItemComponent
              sx={{
                height: "100%",
                borderRadius: 2,
                ml: 2,
              }}
            >
              <CardHeader title="Fatura & Adres Bilgileri" />
              <Box
                sx={{
                  display: "flex",
                  mr: 2,
                  mt: 1,
                  ml: 2,
                }}
              >
                <RadioGroupComponent
                  radioList={PaymentStatusRadioGroup}
                  radioChangeHandler={radioChangeHandler}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mr: 2,
                  mt: 1,
                  ml: 2,
                }}
              >
                <ComboBoxComponet
                  fullWidth={true}
                  label={"Döviz"}
                  value={currency}
                  changeHandler={currencyChangeHandler}
                  menuList={money_units}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mr: 1,
                  ml: 2,
                  mt: 1,
                }}
              >
                <SearchComboBox
                  fullWidth
                  label={"Ödeme Kasa / Bankası"}
                  optionList={bankList}
                  exportSelectedItem={exportSelectedBankItem}
                  sx={{
                    mr: 1,
                  }}
                />
              </Box>
            </GridItemComponent>
          </Grid>
          <Grid item xs={10} md={10}>
            <GridItemComponent
              sx={{
                borderRadius: 2,
                ml: 2,
              }}
            >
              <DataGridComponent rowData={rowData} setRowData={setRowData} />
              <ItemListModal onRowClick={onRowClick} />
            </GridItemComponent>
          </Grid>

          <Grid item xs={10} md={10}>
            <GridItemComponent
              sx={{
                display: "flex",
                borderRadius: 2,
                height: "100%",
                ml: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  width: "100%",
                }}
              >
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    mr: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  label={"Açıklama"}
                  onChangeHandler={descriptionChangeHandler}
                  noValidate={true}
                  fullWidth={true}
                />
                <SearchComboBox
                  fullWidth
                  label={"Kategori"}
                  exportSelectedItem={exportSelectedCategoryItem}
                  optionList={categoryList}
                  sx={{
                    mr: 1,
                  }}
                />
              </Box>
            </GridItemComponent>
          </Grid>
          <Grid item xs={10} md={10}>
            <GridItemComponent
              sx={{
                borderRadius: 2,
                ml: 2,
              }}
            >
              <Box>
                <TableContainer
                  component={Paper}
                  sx={{
                    bgcolor: "background.paper",
                    mb: 2,
                    borderRadius: 5,
                  }}
                >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Tutar (TL)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Ara Toplam
                        </TableCell>
                        <TableCell align="right">{}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          İndirim
                        </TableCell>
                        <TableCell align="right">
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              bgcolor: "background.paper",
                              borderRadius: 1,
                            }}
                          >
                            <TextInputComponent
                              type="text"
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                                mr: 1,
                                bgcolor: "background.paper",
                                borderRadius: 1,
                              }}
                              label={"Miktar"}
                              onChangeHandler={discountAmountChangeHandler}
                              noValidate={true}
                              fullWidth={true}
                            />
                            <ComboBoxComponet
                              fullWidth={true}
                              label={"İndirim Tipi*"}
                              value={discountType}
                              changeHandler={discountTypeChangeHandler}
                              menuList={discountTypeComboBox}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Toplam İndirim
                        </TableCell>
                        <TableCell align="right">0,00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Toplam KDV Tutarı
                        </TableCell>
                        <TableCell align="right">0,00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Genel Toplam
                        </TableCell>
                        <TableCell align="right">0,00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </GridItemComponent>
          </Grid>
        </Grid>
        <Grid item xs={10} md={10}>
          <GridItemComponent sx={{ backgroundColor: "transparent" }}>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  width: "8%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    mr: 2,
                  }}
                  color="error"
                  variant="contained"
                  onClick={(e) => {
                    console.log("EXIT");
                  }}
                >
                  İptal
                </Button>
                <Button
                  sx={{
                    ml: 2,
                  }}
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    console.log("SAVE");
                  }}
                >
                  Kaydet
                </Button>
              </Stack>
            </Box>
          </GridItemComponent>
        </Grid>
      </Box>
      <CardContent></CardContent>
    </>
  );
};
export default AddExpensesPage;
