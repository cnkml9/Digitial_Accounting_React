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
  Checkbox,
} from "@mui/material";
import DataGridComponent from "../../Components/DataGrid/InvoiceDataGridComponent";
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
import GridItemComponent from "../../Components/Grid/GridItemComponent";
const PurchaseOrder = () => {
  {
    /*Tarihlendirme Stateleri*/
  }
  const [withPayment, setWithPayment] = useState(false);
  const [SupplierNumber, setSupplierNumber] = useState("");
  const [deliveryCompany, setDeliveryCompany] = useState("");
  const [orderDate, setOrderDate] = useState(dayjs(new Date()));
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
  const [orderNumber, setorderNumber] = useState();

  const [useDifferentAddress, setUseDifferentAddress] = useState(false);
  const [deliveryCountry, setDeliveryCountry] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryProvince, setDeliveryProvince] = useState("");
  const [deliveryDistrict, setDeliveryDistrict] = useState("");
  const [description, setDescription] = useState("");

  const withPaymentChangeHandler = (e) => {
    e.preventDefault();
    setWithPayment(e.target.value);
  }
  const descriptionChangeHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const useDifferentAddressChangeHandler = (e) => {
    setUseDifferentAddress(!useDifferentAddress);
  };
  const deliveryCountryChangeHandler = (e) => { };
  const deliveryAddressChangeHandler = (e) => { };
  const deliveryProvinceChangeHandler = (e) => { };
  const deliveryDistrictChangeHandler = (e) => { };
  const [expirtDateTemp, setExpiryDateTemp] = useState(dayjs(new Date()));
  const setLaterDate = (e, numofDays) => {
    e.preventDefault();
    if (e.target.id === "add") {
      setExpiryDate(expirtDateTemp);
      setExpiryDate((date) => date.add(numofDays, "day"));
    }
    //console.log(expiryDate);
  };
  const deliveryCompanyChangeHandler = (e) => {
    e.preventDefault();
    setDeliveryCompany(e.target.value);
  }
  const supplierONumberChangeHandler = (e) => {
    e.preventDefault();
    setSupplierNumber(e.target.value);
  }
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
  const orderNumberChangeHandler = (e) => {
    e.preventDefault();
    setorderNumber(e.target.value);
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
        <Box sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <ContentHeaderComponent
            dontUse={true}
            description={"Yeni Alış Siparişi"}
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

              <Box sx={{ display: "flex", justifyContent: "start" }}>
                <CardHeader title="Fatura Tarih Bilgileri" />
              </Box>
              <CardContent sx={{}}>
                <Stack
                  sx={{
                    mb: 2,
                    mt: 1
                  }}
                >
                  <DatePicker
                    fullWidth
                    openTo="day"
                    views={["month", "day"]}
                    value={orderDate}
                    onChange={(newOrderDate) => {
                      setOrderDate(newOrderDate);
                    }}
                    label="Sipariş Tarihi"
                    format="DD-MM-YYYY"
                  />
                </Stack>

                <TextInputComponent
                  sx={{
                    mb: 2,
                  }}
                  label={"Sipariş Numarası"}
                  fullWidth={true}
                  onChangeHandler={orderNumberChangeHandler}
                  noValidate={true}
                />
                <ComboBoxComponet
                  sx={{ mb: 2 }}
                  fullWidth={true}
                  label={"Döviz"}
                  value={currency}
                  changeHandler={currencyChangeHandler}
                  menuList={money_units}
                />
                <TextInputComponent
                  sx={{
                    mb: 2,
                  }}
                  label={"Tedarikçi Sipariş Numarası"}
                  fullWidth={true}
                  onChangeHandler={supplierONumberChangeHandler}
                  noValidate={true}
                />
                <ComboBoxComponet
                  fullWidth={true}
                  label={"Taşıyıcı Firma*"}
                  value={currency}
                  changeHandler={deliveryCompanyChangeHandler}
                  menuList={money_units}
                />
                <Box sx={{
                  display: "block",
                  flex: "column"
                }}>
                  <FormControlLabel
                    onChange={withPaymentChangeHandler}
                    sx={{
                      ml: 1,
                      mt: 2,
                    }}
                    required
                    control={<Checkbox />}
                    label={"Ödemeli"}
                  />
                </Box>
              </CardContent>
            </GridItemComponent>
          </Grid>
          <Grid item xs={10} md={5} sx={{}}>
            <GridItemComponent
              sx={{
                height: "100%",
                borderRadius: 2,
                ml: 2
              }}
            >
              <CardHeader title="Fatura & Adres Bilgileri" />
              <CardContent sx={{ ml: 1, mr: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    mr: 1,
                    ml: 2,
                    mt: 1,
                  }}
                >
                  <ComboBoxComponet
                    sx={{
                      mr: 1,
                    }}
                    fullWidth={true}
                    label={"Müşteriler"}
                    value={customers}
                    menuList={customerTypeComboBox}
                    changeHandler={customerChangeHandler}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mr: 2,
                    mt: 2,
                    ml: 2,
                  }}
                >
                  <RadioGroupComponent row={true}
                    radioList={CompanyTypeRadioGroup}
                    radioChangeHandler={radioChangeHandler}
                  />
                </Box>
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
                    label={"Ülke"}
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
                <Box
                  sx={{
                    display: "flex",
                    ml: 1,
                  }}
                >
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
                <ComboBoxComponet
                  fullWidth={true}
                  label={"Kategori*"}
                  value={discountType}
                  changeHandler={categoryChangeHandler}
                  menuList={discountTypeComboBox}
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
                        <TableCell align="right">{ }</TableCell>
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
                    mr: 2
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
                    ml: 2
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
export default PurchaseOrder;
