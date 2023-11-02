import ContentHeaderComponent from "../../Components/ContentHeader";
import {
  TextField,
  Card,
  CardContent,
  Stack,
  CardHeader,
  Grid,
  Box,
} from "@mui/material";
import GridItemComponent from "../../Components/Grid/GridItemComponent";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RadioGroupComponent from "../../Components/MiniComponents/RadioGroup";
import { CompanyTypeRadioGroup } from "../../Utilities/Constants/RadioGroupConstants";
import ComboBoxComponet from "../../Components/MiniComponents/ComboBox";
import { customerTypeComboBox } from "../../Utilities/Constants/ComboBoxConstants";
import TextInputComponent from "../../Components/MiniComponents/TextInput";

const AddCustomerPage = () => {
  let { id } = useParams();

  const [category, setCategory] = useState("");
  const [componyType, setComponyType] = useState("");
  const [customerCode, setCustomerCode] = useState("");
  const [customerTitle, setCustomerTitle] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [taxOffice, setTaxOffice] = useState("");
  const [taxNumber, setTaxNumbers] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [openingBalanceDate, setOpeningBalanceDate] = useState();
  const [description, setDescription] = useState("");


  const [address, setAddress] = useState("");
  const [county, SetCountry] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [webSiteAddress, setWebSiteAddress] = useState("");


  const [responsiblePerson, setResponsiblePerson] = useState("");
  const [responsiblePersonMail, setResponsiblePersonMail] = useState("");
  const [responsiblePersonPhone, setResponsiblePersonPhone] = useState("")

  const responsiblePersonMailChangeHandler = (e) => {
    e.preventDefault();
    setResponsiblePersonMail(e.target.value);
  }
  const responsiblePersonPhoneChangeHandler = (e) => {
    e.preventDefault();
    setResponsiblePersonPhone(e.target.value);
  }
  const responsiblePersonChangeHandler = (e) => {
    e.preventDefault();

  }
  const faxNumberChangeHandler = (e) => {
    e.preventDefault();
    setFaxNumber(e.target.value);
  };
  const webSiteAddressChangeHandler = (e) => {
    e.preventDefault();
    setWebSiteAddress(e.target.value);
  };
  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };
  const postalCodeChangeHandler = (e) => {
    e.preventDefault();
    setPostalCode(e);
  };

  const addressChangeHandler = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const countryChangeHandler = (e) => {
    e.preventDefault();
    SetCountry(e.target.value);
  };
  const cityChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const provinceChangeHandler = (e) => {
    e.preventDefault();
    setProvince(e.target.value);
  };
  const openingBalanceChangeHandler = (e) => {
    e.preventDefault();
    setOpeningBalance(e.target.value);
  };
  const taxNumberChangeHandler = (e) => {
    e.preventDefault();
    setTaxNumbers(e.target.value);
  };
  const taxOfficeChangeHandler = (e) => {
    e.preventDefault();
    setTaxOffice(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const customerTypeChangeHandler = (e) => {
    e.preventDefault();
    setCustomerType(e.target.value);
  };
  const customerTitleChangeHandler = (e) => {
    e.preventDefault();
    setCustomerTitle(e.target.value);
  };
  const customterCodeTextFieldChangeHandler = (e) => {
    e.preventDefault();
    setCustomerCode(e.target.value);
  };
  const radioChangeHandler = (e) => {
    e.preventDefault();
    setComponyType(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
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
            description={"Müşteri Ekle"}
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
          }}>
          <Grid item
            xs={10}
            md={5}
            sx={{
              width: "100%",
              alignItems: "stretch",
            }}>
            <GridItemComponent sx={{
              height: "100%",
              borderRadius: 2,
              ml: 2,
            }}>

              <CardHeader title="Müşteri Genel Bilgileri" />
              <Box
                sx={{
                  display: "flex",
                  ml: 2,
                }}>
                <RadioGroupComponent

                  row={true}
                  radioList={CompanyTypeRadioGroup}
                  radioChangeHandler={radioChangeHandler}
                />
              </Box>
              <Box sx={{
                display: "flex",
                m: 1
              }}>
                <ComboBoxComponet
                  sx={{
                    p: 1,
                    bgcolor: "background.paper",
                    borderRadius: 5,
                  }}
                  fullWidth={true}
                  label={"Müşteri Tipi"}
                  value={customerType}
                  changeHandler={customerTypeChangeHandler}
                  menuList={customerTypeComboBox}
                />
                <ComboBoxComponet
                  sx={{
                    p: 1,
                    bgcolor: "background.paper",
                    borderRadius: 5,
                  }}
                  fullWidth={true}
                  label={"Kategori"}
                  value={category}
                  changeHandler={categoryChangeHandler}
                  menuList={customerTypeComboBox}
                />
              </Box>

              <TextInputComponent
                type="text"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                label={"Vergi Dairesi"}
                fullWidth={true}
                onChangeHandler={taxOfficeChangeHandler}
                noValidate={true}
                autoComplete="off"
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
                  label={"Vergi Numarası"}
                  onChangeHandler={taxNumberChangeHandler}
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
                  label={"Müşteri Kodu"}
                  onChangeHandler={customterCodeTextFieldChangeHandler}
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
                  label={"Ünvan"}
                  onChangeHandler={customerTitleChangeHandler}
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
                  label={"Kısa Ünvan"}
                  onChangeHandler={customerTitleChangeHandler}
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
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  type="text"
                  label={"Açılış Bakiyesi"}
                  fullWidth={true}
                  onChangeHandler={openingBalanceChangeHandler}
                  noValidate={true}
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <Stack style={{ width: "100%" }}>
                    <DatePicker
                      fullWidth
                      openTo="day"
                      views={["month", "day"]}
                      value={openingBalanceDate}
                      onChange={(newReceiptDate) => {
                        setOpeningBalanceDate(newReceiptDate);
                      }}
                      format="DD-MM-YYYY"
                    />
                  </Stack>
                </Box>
              </Box>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <TextField
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": { height: 300 },
                  }}
                  label="Açıklama"
                  id="outlined"
                  onChange={descriptionChangeHandler}
                />
              </Box>
            </GridItemComponent>
          </Grid>
          <Grid item xs={10} md={5} sx={{}}>
            <GridItemComponent
              sx={{
                height: "100%",
                borderRadius: 2,
                ml: 2,
              }}>
              <CardHeader title={"Müşteri İletişim Bilgileri"} />
              <Box>
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    mt: 7,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Adres"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"Ülke"}
                    fullWidth={true}
                    onChangeHandler={countryChangeHandler}
                    noValidate={true}
                  />
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"Şehir"}
                    fullWidth={true}
                    onChangeHandler={cityChangeHandler}
                    noValidate={true}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"İlçe"}
                    fullWidth={true}
                    onChangeHandler={provinceChangeHandler}
                    noValidate={true}
                  />
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"Posta Kodu"}
                    fullWidth={true}
                    onChangeHandler={postalCodeChangeHandler}
                    noValidate={true}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"Email"}
                    fullWidth={true}
                    onChangeHandler={emailChangeHandler}
                    noValidate={true}
                  />
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"Telefon"}
                    fullWidth={true}
                    onChangeHandler={phoneChangeHandler}
                    noValidate={true}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"Web Sitesi"}
                    fullWidth={true}
                    onChangeHandler={webSiteAddressChangeHandler}
                    noValidate={true}
                  />
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"Fax Numarası"}
                    fullWidth={true}
                    onChangeHandler={faxNumberChangeHandler}
                    noValidate={true}
                  />
                </Box>
                <CardHeader sx={{ mt: 4 }} title={"İgili Kişiler"} />
                <Box sx={{
                  display: "flex"
                }}>
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"İlgili Kişi Adı Soyadı*"}
                    fullWidth={true}
                    onChangeHandler={responsiblePersonChangeHandler}
                    noValidate={true}
                  />
                  <TextInputComponent
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 1,
                      m: 1,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"İlgili Kişi Telefon Numarası*"}
                    fullWidth={true}
                    onChangeHandler={responsiblePersonPhoneChangeHandler}
                    noValidate={true}
                  />
                </Box>
                <Box sx={{
                  display: "flex"

                }}>
                  <TextInputComponent
                    sx={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 1,
                    }}
                    type="text"
                    label={"İlgili Kişi email*"}
                    fullWidth={true}
                    onChangeHandler={responsiblePersonMailChangeHandler}
                    noValidate={true}
                  />
                </Box>
              </Box>
            </GridItemComponent>
          </Grid>
          <Grid item
            xs={10}
            md={10}
            sx={{
              width: "100%",
              alignItems: "stretch",
            }}>
            <GridItemComponent sx={{
              height: "100%",
              borderRadius: 2,
              ml: 2,
              mb: 3,
            }}>
              <CardHeader title="Diğer Adresler" />
              <Box sx={{ display: "flex", mt: 7 }}>
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "33%",
                    p: 1,
                    m: 1,

                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Adres Başlığı"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    width: "33%",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Ad Soyad"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    width: "33%",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Telefon"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    p: 1,
                    m: 1,
                    mt: 2,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Adres Başlığı"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    width: "33%",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    mt: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Ülke"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  sx={{
                    width: "33%",

                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  type="text"
                  label={"İl"}
                  fullWidth={true}
                  onChangeHandler={countryChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  sx={{
                    width: "33%",
                    display: "flex",
                    justifyContent: "space-between",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  type="text"
                  label={"İlçe"}
                  fullWidth={true}
                  onChangeHandler={cityChangeHandler}
                  noValidate={true}
                />
              </Box>
            </GridItemComponent>
          </Grid>
          <Grid item
            xs={10}
            md={10}
            sx={{
              width: "100%",
              alignItems: "stretch",
            }}>
            <GridItemComponent sx={{
              height: "100%",
              borderRadius: 2,
              ml: 2,
              mb: 3,
            }}>
              <CardHeader title="Banka Hesapları" />
              <Box sx={{ display: "flex", width: "auto", justifyContent: "stretch"}}>
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "auto",
                    p: 1,
                    m: 1,

                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Banka Adı"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Şube Adı*"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Şube Kodu*"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"Hesap Numarası*"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
                <ComboBoxComponet
                  sx={{
                    mt: 2,
                    bgcolor: "background.paper",
                    borderRadius: 5,
                  }}
                  label={"Döviz*"}
                  value={customerType}
                  changeHandler={customerTypeChangeHandler}
                  menuList={customerTypeComboBox}
                />
                <TextInputComponent
                  type="text"
                  sx={{
                    display: "flex",
                    width: "auto",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  fullWidth={true}
                  label={"IBAN*"}
                  onChangeHandler={addressChangeHandler}
                  noValidate={true}
                />
              </Box>
            </GridItemComponent>
          </Grid>
          <Grid item
            xs={10}
            md={5}
            sx={{
              width: "100%",
              alignItems: "stretch",
            }}>
            <div className="container d-flex justify-content-center mb-4">
              <button className="btn btn-danger mr-2">Vazgeç</button>
              <button className="btn btn-secondary mr-2">Kaydet</button>
              <button className="btn btn-primary">Kaydet ve Yeni Ekle</button>
            </div>
          </Grid>
        </Grid>
      </Box >
    </>
  );
};
export default AddCustomerPage;
