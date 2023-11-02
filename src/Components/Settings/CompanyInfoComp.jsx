import { useState } from "react";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import {
  Avatar,
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Button,
  Stack,
  CardHeader,
  FormLabel,
  InputLabel,
  Tabs,
  Tab,
  Typography,
  Select,
  Checkbox,
  MenuItem,
  Box,
  Menu,
  TableContainer,
  IconButton,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import RadioGroupComponent from "../MiniComponents/RadioGroup";
import { CompanyTypeRadioGroup } from "../../Utilities/Constants/RadioGroupConstants";
import TextInputComponent from "../MiniComponents/TextInput";
import GridItemComponent from "../Grid/GridItemComponent";
import ComboBoxComponet from "../MiniComponents/ComboBox";
import { countryTypeComboBox } from "../../Utilities/Constants/ComboBoxConstants";
const CompanyInformationComponent = () => {

  const [value, setValue] = useState(0);
  const [companyType, setCompanyType] = useState(0);
  const [commercialTitle, setCommercialTitle] = useState("");
  const [address, setAddress] = useState(2);
  const [logo, setLogo] = useState("");
  const [stamp, setStamp] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [taxOffice, setTaxOffice] = useState("");
  const [commercialRegistration, setcommercialRegistration] = useState("");
  const [mersisNo, setmersisNo] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [webSite, setWebsite] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [retailInvoiceNumber, setRetailInvoiceNumber] = useState("");
  const [wholeSaleInvoiceNumber, setWholeSaleInvoiceNumber] = useState("");
  const [invoiceReadMethod, setInvoiceReadMethod] = useState("");
  const [accessPermission, setAccessPermission] = useState("");
  const [description, setDescription] = useState("");
  const descriptionChangeHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  }
  const retailSaleInvoiceNumberHandler = (e) => {
    e.preventDefault();
    setWholeSaleInvoiceNumber(e.target.value);
  }
  const wholeSaleInvoiceNumberHandler = (e) => {
    e.preventDefault();
    setRetailInvoiceNumber(e.target.value);
  }
  const accessPermissionHandler = (e) => {
    e.preventDefault();
    setRetailInvoiceNumber(e.target.value);
  }

  const invoiceReadMethodHandler = (e) => {
    e.preventDefault();
    setInvoiceReadMethod(e.target.value);
  }
  const nameChangeHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }
  const surnameChangeHandler = (e) => {
    e.preventDefault();
    setSurname(e.target.value);
  }
  const webSiteChangeHandler = (e) => {
    e.preventDefault();
    setWebsite(e.target.value);
  }
  const postalCodeChangeHandler = (e) => {
    e.preventDefault();
    setPostalCode(e.target.value);
  }

  const countryChangeHandler = (e) => {
    e.preventDefault();
    setCountry()
  }

  const cityChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }
  const taxOfficeChangeHandler = (e) => {
    e.preventDefault();
    setTaxOffice(e.target.value);
  }
  const addressChangeHandler = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }
  const commercialChangeHandler = (e) => {
    e.preventDefault();
    setCommercialTitle(e.target.value);
  };
  const radioChangeHandler = (e) => {
    e.preventDefault();
    setCompanyType(Number(e.target.value));
    console.log(companyType);
  };
  const provinceChangeHandler = (e) => {
    e.preventDefault();
    setProvince(e.target.value);
  }
  const taxNumberChangeHandler = (e) => {
    e.preventDefault();
    setTaxNumber(e.target.value);
  }

  const commercialRegistrationChangeHandler = (e) => {
    e.preventDefault();
    setcommercialRegistration(e.target.value);
  }
  const mersisNoChange = (e) => {
    e.preventDefault();
    setmersisNo(e.target.value);
  }
  const phoneChangeHandler = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  }
  const identityChangeHandler = (e) => {
    e.preventDefault();
    setIdentityNumber(e.target.value);
  }
  return (
    <>

      <Box sx={{
        flexGrow: 1, mt: 3,
        mr: "auto",
        ml: "auto"
      }}>
        <Grid container spacing={2} sx={{
          display: "flex",
          mr: 10,
        }}>
          <Grid item xs={15} md={6} sx={{
            display: "inline",

          }}>
            <GridItemComponent sx={{ display: "flex", justifyContent: "start" }} >
              <FormControl>
                <RadioGroup
                  onChange={radioChangeHandler}
                  value={companyType}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormLabel id="demo-row-radio-buttons-group-label" sx={{ display: "flex", mt: 1, mr: 2 }}>Firma Tipi</FormLabel>
                  <FormControlLabel value="0" control={<Radio />} label="Kurumsal" />
                  <FormControlLabel value="1" control={<Radio />} label="Bireysel" />
                </RadioGroup>
              </FormControl>

            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={15}>
            <GridItemComponent>
              <TextInputComponent
                label={"Ticari Ünvan*"}
                noValidate={true}
                onChangeHandler={commercialChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={5} sx={{}}>
            <GridItemComponent>
              <Box sx={{
                display: "flex",
                justifyContent: "start",
                flex: "row",
                height: "15vh"
              }}>
                <Typography>Firma Logosu</Typography>
                <IconButton sx={{
                  height: "100%",
                  ml: 4
                }}
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <WallpaperIcon sx={{ height: "100%", width: "100%" }} />
                </IconButton>
              </Box>
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={5}>
            <GridItemComponent>
              <Box sx={{
                display: "flex",
                justifyContent: "start",
                flex: "row",
                height: "15vh"
              }}>
                <Typography>Kaşe</Typography>
                <IconButton sx={{
                  height: "100%",
                  ml: 4
                }}
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <WallpaperIcon sx={{ height: "100%", width: "100%" }} />
                </IconButton>
              </Box>
            </GridItemComponent>
          </Grid>
          {companyType === 1 ? (
            <>
              <Grid item xs={15} md={6}>
                <GridItemComponent>
                  <TextInputComponent
                    label={"Ad"}
                    noValidate={true}
                    onChangeHandler={nameChangeHandler}
                    autoComplete="off"
                    fullWidth={true}
                    sx={{
                      ml: "auto",
                      mr: "auto"
                    }}
                  />
                </GridItemComponent>
              </Grid>
              <Grid item xs={15} md={6}>
                <GridItemComponent>
                  <TextInputComponent
                    label={"Soyad"}
                    noValidate={true}
                    onChangeHandler={surnameChangeHandler}
                    autoComplete="off"
                    fullWidth={true}
                    sx={{
                      ml: "auto",
                      mr: "auto"
                    }}
                  />
                </GridItemComponent>
              </Grid>
            </>
          ) : (null)}
          <Grid item xs={15} md={15}>
            <GridItemComponent>
              <TextInputComponent
                label={"Adres*"}
                noValidate={true}
                onChangeHandler={addressChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <ComboBoxComponet
                label={"Ülke"}
                menuList={countryTypeComboBox}
                fullWidth={true}
                changeHandler={countryChangeHandler}
                value={address}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <ComboBoxComponet
                label={"İl"}
                menuList={countryTypeComboBox}
                fullWidth={true}
                changeHandler={cityChangeHandler}
                value={city}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"İlçe"}
                noValidate={true}
                onChangeHandler={provinceChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Posta Kodu"}
                noValidate={true}
                onChangeHandler={postalCodeChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          {
            companyType === 1 ? (
              <>
                <Grid item xs={15} md={6}>
                  <GridItemComponent>
                    <TextInputComponent
                      label={"T.C Kimlik Numarası*"}
                      noValidate={true}
                      onChangeHandler={identityChangeHandler}
                      autoComplete="off"
                      fullWidth={true}
                      sx={{
                        ml: "auto",
                        mr: "auto"
                      }}
                    />
                  </GridItemComponent>
                </Grid>
              </>
            ) : (<>
              <Grid item xs={15} md={6}>
                <GridItemComponent>
                  <TextInputComponent
                    label={"Vergi Numarası*"}
                    noValidate={true}
                    onChangeHandler={taxNumberChangeHandler}
                    autoComplete="off"
                    fullWidth={true}
                    sx={{
                      ml: "auto",
                      mr: "auto"
                    }}
                  />
                </GridItemComponent>
              </Grid>
            </>)
          }

          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <ComboBoxComponet
                label={"Vergi Dairesi"}
                menuList={countryTypeComboBox}
                fullWidth={true}
                changeHandler={taxOfficeChangeHandler}
                value={taxOffice}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Ticari Sicil No*"}
                noValidate={true}
                onChangeHandler={commercialRegistrationChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Mersis No*"}
                noValidate={true}
                onChangeHandler={mersisNoChange}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Telefon*"}
                noValidate={true}
                onChangeHandler={phoneChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Fax"}
                noValidate={true}
                onChangeHandler={commercialChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Şirket Email*"}
                noValidate={true}
                onChangeHandler={commercialChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Web Sitesi*"}
                noValidate={true}
                onChangeHandler={webSiteChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Perakende Satış Fatura Numarası *"}
                noValidate={true}
                onChangeHandler={webSiteChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <TextInputComponent
                label={"Toptan Satış Fatura Numarası*"}
                noValidate={true}
                onChangeHandler={webSiteChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={15}>
            <GridItemComponent>
              <TextInputComponent
                label={"Ön Tanımlı Açıklama*"}
                noValidate={true}
                onChangeHandler={descriptionChangeHandler}
                autoComplete="off"
                fullWidth={true}
                sx={{
                  ml: "auto",
                  mr: "auto"
                }}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <ComboBoxComponet
                label={"Fatura Okuma Yöntemi*"}
                menuList={countryTypeComboBox}
                fullWidth={true}
                changeHandler={invoiceReadMethodHandler}
                value={taxOffice}
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={15} md={6}>
            <GridItemComponent>
              <ComboBoxComponet
                label={"Erişim İzni*"}
                menuList={countryTypeComboBox}
                fullWidth={true}
                changeHandler={accessPermissionHandler}
                value={taxOffice}
              />
            </GridItemComponent>
          </Grid>
          <Grid
            item
            xs={15}
            md={15}
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Stack spacing={15} direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",

              }}>
              <Button variant="contained">Değişiklikleri Kaydet</Button>
              <Button variant="contained" sx={{
                backgroundColor: "#5867dd"
              }}>Yeni Firma Oluştur</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box >
    </>
  );
};
export default CompanyInformationComponent;
