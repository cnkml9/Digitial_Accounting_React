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
import SearchComboBox from "../../Components/MiniComponents/SearchComboBox";
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
const RetailOrderPage = () => {
  {
    /*Tarihlendirme Stateleri*/
  }
  const [productReserved, setProductReserved] = useState(false);
  const [withPayment, setWithPayment] = useState(false);
  const [customerOrderNumber, setCustomerOrderNumber] = useState("");
  const [deliveryCompany, setDeliveryCompany] = useState("");
  const [orderDate, setOrderDate] = useState(dayjs(new Date()));
  const [currency, setCurrency] = useState("");
  const [address, setAddress] = useState("");
  const [taxAdministration, setTaxAdministration] = useState("");
  const [taxNumber, setTaxNumber] = useState();
  const [discountAmount, setDiscountAmount] = useState();
  const [discountType, setDiscountType] = useState("");
  const [orderNumber, setorderNumber] = useState();
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);
  const [description, setDescription] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const productReservedChangeHandler = (e) => {
    e.preventDefault();
    setProductReserved(e.target.value);
  };

  const withPaymentChangeHandler = (e) => {
    e.preventDefault();
    setWithPayment(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const useDifferentAddressChangeHandler = (e) => {
    setUseDifferentAddress(!useDifferentAddress);
  };
  const deliveryAddressChangeHandler = (e) => {
    e.preventDefault();
    setDeliveryAddress(e.target.value);
  };

  //SearchComboBox Components
  const [customers, setCustomers] = useState("");
  const [customerList, setCustomerList] = useState([
    { name: "Mehmet", id: 2361 },
    { name: "Muhammet", id: 261187 },
  ]);
  const exportSelectedCustomer = (e) => {
    setCustomers(e);
  };

  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([
    { name: "Kategori 1", id: 71712 },
    { name: "Kategori 2", id: 236721 },
    { name: "Kategori 3", id: 264676 },
  ]);
  const exportSelectedCategory = (e) => {
    setCategory(e);
  };

  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([
    { name: "Türkiye", id: 1 },
    { name: "Amerika", id: 2 },
    { name: "Venezuella", id: 3 },
  ]);
  const exportSelectedCountry = (e) => {
    setCountry(e);
  };

  const [province, setProvince] = useState("");
  const [provinceList, setProvinceList] = useState([
    { name: "Ankara", id: 1 },
    { name: "İstanbul", id: 2 },
    { name: "Trabzon", id: 3 },
  ]);
  const exportSelectedProvince = (e) => {
    setProvince(e);
  };

  const [district, setDistrict] = useState("");
  const [districtList, setDistrictList] = useState([
    { name: "Merkez", id: 1 },
    { name: "Köy 1", id: 2 },
    { name: "Köy 2", id: 3 },
  ]);
  const exportSelectedDistrict = (e) => {
    setDistrict(e);
  };

  const [deliveryCountry, setDeliveryCountry] = useState("");
  const exportSelectedDeliveryCountry = (e) => {
    setDeliveryCountry(e);
  };

  const [deliveryProvince, setDeliveryProvince] = useState("");
  const exportSelectedDeliveryProvince = (e) => {
    setDeliveryProvince(e);
  };

  const [deliveryDistrict, setDeliveryDistrict] = useState("");
  const exportSelectedDeliveryDistrict = (e) => {
    setDeliveryDistrict(e);
  };

  //SearchComboBox Components END
  const deliveryCompanyChangeHandler = (e) => {
    e.preventDefault();
    setDeliveryCompany(e.target.value);
  };
  const customerOrderNumberChangeHandler = (e) => {
    e.preventDefault();
    setCustomerOrderNumber(e.target.value);
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

  const currencyChangeHandler = (e) => {
    e.preventDefault();
    setCurrency(e.target.value);
  };

  const taxAdministrationChangeHandler = (e) => {
    e.preventDefault();
    setTaxAdministration(e.target.value);
  };
  const taxNumberChangeHandler = (e) => {
    e.preventDefault();
    setTaxNumber(e.target.value);
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
            description={"Perakende Sipariş (KDV Dahil)"}
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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardHeader title="Fatura Tarih Bilgileri" />
              </Box>
              <CardContent sx={{}}>
                <Stack
                  sx={{
                    mb: 2,
                    mt: 1,
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
                  label={"Müşteri Sipariş Numarası"}
                  fullWidth={true}
                  onChangeHandler={customerOrderNumberChangeHandler}
                  noValidate={true}
                />
                <ComboBoxComponet
                  fullWidth={true}
                  label={"Taşıyıcı Firma*"}
                  value={currency}
                  changeHandler={deliveryCompanyChangeHandler}
                  menuList={money_units}
                />
                <Box
                  sx={{
                    display: "block",
                    flex: "column",
                  }}
                >
                  <FormControlLabel
                    onChange={withPaymentChangeHandler}
                    sx={{
                      ml: 1,
                      mt: 2,
                    }}
                    required
                    control={<Checkbox />}
                    label={"Ödemeli (Müşteri Sipariş Tutarı Kadar Borçlanır.)"}
                  />
                  <FormControlLabel
                    onChange={productReservedChangeHandler}
                    sx={{
                      ml: 1,
                      mt: 2,
                    }}
                    required
                    control={<Checkbox />}
                    label={"Ürünler Rezerv Edilir."}
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
                ml: 2,
              }}
            >
              <CardHeader title="Fatura & Adres Bilgileri" />
              <CardContent sx={{ ml: 1, mr: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    mr: 2,
                    ml: 2,
                    mt: 1,
                  }}
                >
                  <SearchComboBox
                    fullWidth
                    label={"Müşteriler"}
                    exportSelectedItem={exportSelectedCustomer}
                    optionList={customerList}
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
                  <RadioGroupComponent
                    row={true}
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
                    mr: 2,
                    ml: 2,
                    mt: 1,
                  }}
                >
                  <SearchComboBox
                    fullWidth
                    label={"Müşteriler"}
                    exportSelectedItem={exportSelectedCustomer}
                    optionList={customerList}
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
                  <RadioGroupComponent
                    row={true}
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
                  <SearchComboBox
                    fullWidth
                    label={"Ülke"}
                    exportSelectedItem={exportSelectedCountry}
                    optionList={countryList}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <SearchComboBox
                      fullWidth
                      label={"İl"}
                      exportSelectedItem={exportSelectedProvince}
                      optionList={provinceList}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                  >
                    <SearchComboBox
                      fullWidth
                      label={"İlçe"}
                      exportSelectedItem={exportSelectedDistrict}
                      optionList={districtList}
                    />
                  </Box>
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
                      <SearchComboBox
                        fullWidth
                        label={"Ülke"}
                        exportSelectedItem={exportSelectedDeliveryCountry}
                        optionList={countryList}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          p: 1,
                          m: 1,
                          bgcolor: "background.paper",
                          borderRadius: 1,
                        }}
                      >
                        <SearchComboBox
                          fullWidth
                          label={"İl"}
                          exportSelectedItem={exportSelectedDeliveryProvince}
                          optionList={provinceList}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          p: 1,
                          m: 1,
                          bgcolor: "background.paper",
                          borderRadius: 1,
                        }}
                      >
                        <SearchComboBox
                          fullWidth
                          label={"İlçe"}
                          exportSelectedItem={exportSelectedDeliveryDistrict}
                          optionList={districtList}
                        />
                      </Box>
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
                <SearchComboBox
                  fullWidth
                  label={"Kategoriler"}
                  exportSelectedItem={exportSelectedCategory}
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
export default RetailOrderPage;
