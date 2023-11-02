/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ContentHeaderComponent from "../../Components/ContentHeader";
import dayjs from "dayjs";
import ItemListModal from "../../Components/DataGrid/ItemListModal";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  FormControlLabel,
  Card,
  CardContent,
  Button,
  Stack,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CardHeader,
  Checkbox,
} from "@mui/material";
import DataGridComponent from "../../Components/DataGrid/OrderDataGridComponent";
import ComboBoxComponet from "../../Components/MiniComponents/ComboBox";
import {
  countryTypeComboBox,
  customerTypeComboBox,
  discountTypeComboBox,
  money_units,
} from "../../Utilities/Constants/ComboBoxConstants";
import RadioGroupComponent from "../../Components/MiniComponents/RadioGroup";
import { CompanyTypeRadioGroup } from "../../Utilities/Constants/RadioGroupConstants";
import TextInputComponent from "../../Components/MiniComponents/TextInput";
const NewPurchaseOrder = () => {
  {
    /*Tarihlendirme Stateleri*/
  }
  const [deliveryDate, setDeliveryDate] = useState(dayjs(new Date()));
  const [receiptDate, setReceiptDate] = useState(dayjs(new Date()));
  const [expiryDate, setExpiryDate] = useState(dayjs(new Date()));
  const [customers, setCustomers] = useState("");
  const [currency, setCurrency] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [taxAdministration, setTaxAdministration] = useState("");
  const [taxNumber, setTaxNumber] = useState();
  const [category, setCategory] = useState("");
  const [discountAmount, setDiscountAmount] = useState();
  const [discountType, setDiscountType] = useState("");
  const [receiptNumber, setReceiptNumber] = useState();

  const [useDifferentAddress, setUseDifferentAddress] = useState(false);
  const [deliveryCountry, setDeliveryCountry] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryProvince, setDeliveryProvince] = useState("");
  const [deliveryDistrict, setDeliveryDistrict] = useState("");

  const useDifferentAddressChangeHandler = (e) => {
    setUseDifferentAddress(!useDifferentAddress);
  };
  const deliveryCountryChangeHandler = (e) => {};
  const deliveryAddressChangeHandler = (e) => {};
  const deliveryProvinceChangeHandler = (e) => {};
  const deliveryDistrictChangeHandler = (e) => {};
  const setLaterDate = (e, numofDays) => {
    e.preventDefault();
    if (e.target.id === "add") {
      setExpiryDate((date) => date.add(numofDays, "day"));
    }
    //console.log(expiryDate);
  };
  const radioChangeHandler = (e) => {
    e.preventDefault();
    setCustomers(e.targer.value);
  };
  const addressChangeHandler = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    console.log(address);
  };
  const countryChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const currencyChangeHandler = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
  };
  const customerChangeHandler = (e) => {
    e.preventDefault();
    setCustomers(e.target.value);
  };

  const provinceChangeHandler = (e) => {
    e.preventDefault();
    setProvince(e.target.value);
  };
  const districtChangeHandler = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
  };
  const taxAdministrationChangeHandler = (e) => {
    e.preventDefault();
    setTaxAdministration(e.target.value);
  };
  const taxNumberChangeHandler = (e) => {
    e.preventDefault();
    setTaxNumber(e.target.value);
  };
  const addItem = () => {
    //add item modal function
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
      <ContentHeaderComponent description={"Yeni Alış Siparişi"} />
      <CardContent>
        <ComboBoxComponet
          fullWidth={true}
          label={"Müşteriler"}
          value={customers}
          menuList={customerTypeComboBox}
          changeHandler={customerChangeHandler}
        />
        <RadioGroupComponent
          radioList={CompanyTypeRadioGroup}
          radioChangeHandler={radioChangeHandler}
        />

        <Card
          sx={{
            mt: 3,
            mb: 3,
            bgcolor: "background.paper",
            borderRadius: 5,
          }}
        >
          <CardHeader title="Fatura & Kargo Adresi" />

          <CardContent>
            <TextInputComponent
              type="text"
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
              label={"Adres"}
              fullWidth={true}
              onChangeHandler={addressChangeHandler}
              noValidate={true}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <ComboBoxComponet
                fullWidth={true}
                label={"Müşteriler"}
                value={customers}
                menuList={countryTypeComboBox}
                changeHandler={countryChangeHandler}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextInputComponent
                type="text"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                label={"İl"}
                onChangeHandler={provinceChangeHandler}
                noValidate={true}
                fullWidth={true}
              />
              <TextInputComponent
                type="text"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                label={"İlçe"}
                onChangeHandler={districtChangeHandler}
                noValidate={true}
                fullWidth={true}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextInputComponent
                type="text"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                label={"Vergi Dairesi"}
                onChangeHandler={taxAdministrationChangeHandler}
                noValidate={true}
                fullWidth={true}
              />
              <TextInputComponent
                type="text"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                label={"Vergi No / Kimlik No"}
                onChangeHandler={taxNumberChangeHandler}
                noValidate={true}
                fullWidth={true}
              />
            </Box>
            <Box>
              <FormControlLabel
                onChange={useDifferentAddressChangeHandler}
                sx={{
                  ml: 1,
                  mt: 2,
                }}
                required
                control={<Checkbox />}
                label={"Teslimat Adresi Farklı"}
              />
            </Box>
            {useDifferentAddress ? (
              <>
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  label={"Adres"}
                  fullWidth={true}
                  onClick={deliveryAddressChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  label={"Ülke"}
                  fullWidth={true}
                  onChangeHandler={deliveryCountryChangeHandler}
                  noValidate={true}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInputComponent
                    type="text"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    label={"İl"}
                    onChangeHandler={deliveryProvinceChangeHandler}
                    noValidate={true}
                    fullWidth={true}
                  />
                  <TextInputComponent
                    type="text"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    label={"İlçe"}
                    onChangeHandler={deliveryDistrictChangeHandler}
                    noValidate={true}
                    fullWidth={true}
                  />
                </Box>
              </>
            ) : null}
          </CardContent>
        </Card>
        <Card
          sx={{ mt: 3, mb: 3, bgcolor: "background.paper", borderRadius: 5 }}
        >
          <DataGridComponent rowData={rowData} setRowData={setRowData} />
          <ItemListModal onRowClick={onRowClick} />
        </Card>
        <Card
          sx={{
            bgcolor: "background.paper",
            borderRadius: 5,
            mb: 2,
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardHeader title="Tarih" />
          <CardContent>
            <Stack
              sx={{
                mb: 2,
              }}
            >
              <DatePicker
                fullWidth
                openTo="day"
                views={["month", "day"]}
                value={receiptDate}
                onChange={(newReceiptDate) => {
                  setDeliveryDate(newReceiptDate);
                }}
                label="Fatura Tarihi"
                format="DD-MM-YYYY"
              />
            </Stack>
            <Stack
              sx={{
                mb: 2,
              }}
            >
              <DatePicker
                fullwidth
                openTo="day"
                views={["month", "day"]}
                value={deliveryDate}
                onChange={(newDeliveryDate) => {
                  setDeliveryDate(newDeliveryDate);
                }}
                format="DD-MM-YYYY"
                label="Sevk Tarihi"
              />
            </Stack>
            <Stack
              sx={{
                mb: 2,
              }}
            >
              <DatePicker
                openTo="day"
                views={["month", "day"]}
                value={expiryDate}
                onChange={(newExpiryDate) => {
                  setExpiryDate(newExpiryDate);
                }}
                format="DD-MM-YYYY"
                label="Vade Tarihi"
              />
              <Stack
                sx={{
                  mt: 2,
                }}
                direction="row"
                spacing={1}
              >
                <Button
                  id="add"
                  size="small"
                  variant="contained"
                  onClick={(e) => {
                    setLaterDate(e, 30);
                  }}
                >
                  30 Gün
                </Button>
                <Button
                  id="add"
                  variant="contained"
                  size="small"
                  onClick={(e) => {
                    setLaterDate(e, 45);
                  }}
                >
                  45 Gün
                </Button>
                <Button
                  id="add"
                  variant="contained"
                  size="small"
                  onClick={(e) => {
                    setLaterDate(e, 60);
                  }}
                >
                  60 Gün
                </Button>
                <Button
                  id="add"
                  variant="contained"
                  size="small"
                  onClick={(e) => {
                    setLaterDate(e, 90);
                  }}
                >
                  90 Gün
                </Button>
              </Stack>
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
            <ComboBoxComponet
              fullWidth={true}
              label={"Döviz"}
              value={currency}
              changeHandler={currencyChangeHandler}
              menuList={money_units}
            />
          </CardContent>
        </Card>
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
                    Toplam
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

        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: 10,
            mr: 10,
          }}
        >
          <Button
            color="error"
            variant="contained"
            onClick={(e) => {
              console.log("EXIT");
            }}
          >
            İptal
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              console.log("SAVE");
            }}
          >
            Kaydet
          </Button>
        </Card>
      </CardContent>
    </>
  );
};
export default NewPurchaseOrder;
