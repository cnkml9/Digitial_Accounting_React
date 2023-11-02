import { useState } from "react";
import ContentHeaderComponent from "../../Components/ContentHeader";
import {
  units_products,
  money_units,
  vat_ratio,
} from "../../Utilities/Constants/ComboBoxConstants";
import {
  Card,
  CardContent,
  Stack,
  CardHeader,
  Button,
  Grid,
  Box
} from "@mui/material";
import GridItemComponent from "../../Components/Grid/GridItemComponent";
import ComboBoxComponet from "../../Components/MiniComponents/ComboBox";
import TextInputComponent from "../../Components/MiniComponents/TextInput";
import RadioGroupComponent from "../../Components/MiniComponents/RadioGroup";
import { TrackableRadioGroup } from "../../Utilities/Constants/RadioGroupConstants";

const AddServiceItemPage = () => {
  const [serviceCode, setserviceCode] = useState("");
  const [serviceName, setserviceName] = useState("");
  const [serviceUnit, setserviceUnit] = useState("");
  const [unitPriceIncVatForSale, setUnitPriceIncVatForSale] = useState(0);
  const [unitPriceExclVatForSale, setUnitPriceExclVatForSale] = useState(0);
  const [vatRatio, setVatRatio] = useState(0);
  const [moneyRatio, setMoneyRatio] = useState("");
  const [unitPriceIncVatForPurchase, setUnitPriceIncVatForPurchase] =
    useState(0);
  const [unitPriceExclVatForPurchase, setUnitPriceExclVatForPurchase] =
    useState(0);

  const [barcodeNumber, setBarcodeNumber] = useState("");
  const [trackAble, setUnTrackAble] = useState("");
  const [trackAbleItem, setTrackAbleItem] = useState({});
  const [trackAbleItemValue, setTrackAbleItemValue] = useState("");
  const [currentBrand, setCurrentBrand] = useState("");
  const [secondaryserviceName, setSecondaryserviceName] = useState("");
  const [category, setCategory] = useState("");
  const secondaryserviceNameChangeHandler = (e) => {
    e.preventDefault();
    setSecondaryserviceName(e.target.value);
  };
  const currentBrandChangeHandler = (e) => {
    e.preventDefault();
  };
  const barcodeNumberChangeHandler = (e) => {
    e.preventDefault();
    setBarcodeNumber(e.target.value);
  };

  const trackableChangeHandler = (e) => {
    e.preventDefault();
    let value = e.target.value;
    console.log(value);
    let item = TrackableRadioGroup.list.filter((item) => item.value === value);
    if (item) setTrackAbleItem(item[0]);
    console.log(trackAbleItem);
  };

  const trackAbleItemValueChangedHandler = (e) => {
    e.preventDefault();
    setTrackAbleItemValue(e.target.value);
  };

  const unitPriceIncVatForPurchaseChangeHandler = (e) => {
    e.preventDefault();
    setUnitPriceIncVatForPurchase(e.target.value);
  };
  const unitPriceExclVatForPurchaseChangeHandler = (e) => {
    e.preventDefault();
    setUnitPriceExclVatForPurchase(e.target.value);
  };
  const unitPriceIncVatForSaleChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setUnitPriceIncVatForSale(Number(e.target.value));
  };
  const unitPriceExclForSaleVatChangeHandler = (e) => {
    e.preventDefault();
    setUnitPriceExclVatForSale(Number(e.target.value));
  };
  const moneyRatioChangeHandler = (e) => {
    e.preventDefault();
    setMoneyRatio(e.target.value);
  };
  const vatRatioChangeHandler = (e) => {
    e.preventDefault();
    setVatRatio(e.target.value);
  };
  const serviceUnitChangeHandler = (e) => {
    e.preventDefault();
    setserviceUnit(e.target.value);
  };
  const serviceNameChangeHandler = (e) => {
    e.preventDefault();
    setserviceName(e.target.value);
  };
  const serviceCodeChangeHandler = (e) => {
    e.preventDefault();
    setserviceCode(e.target.value);
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
            description={"Hizmet Ekle"}
          />
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
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
            <GridItemComponent sx={{
              height: "100%",
              borderRadius: 2,
              ml: 2,
            }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardHeader title="Genel Bilgiler" />
              </Box>
              <TextInputComponent
                fullWidth={true}
                label={"Hizmet Kodu"}
                noValidate={true}
                onChangeHandler={serviceCodeChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
              <TextInputComponent
                fullWidth={true}
                label={"Hizmet Adı"}
                noValidate={true}
                onChangeHandler={serviceNameChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
              <ComboBoxComponet
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                fullWidth={false}
                label="Birim"
                value={serviceUnit}
                changeHandler={serviceUnitChangeHandler}
                menuList={units_products}
              />
              <ComboBoxComponet
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                fullWidth={false}
                label="KDV Oranı"
                value={vatRatio}
                changeHandler={vatRatioChangeHandler}
                menuList={vat_ratio}
              />
              <ComboBoxComponet
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                fullWidth={false}
                label="Para Birimi"
                value={moneyRatio}
                changeHandler={moneyRatioChangeHandler}
                menuList={money_units}
              />
            </GridItemComponent>
          </Grid>

          <Grid
            item
            xs={10}
            md={5}
            sx={{
              width: "100%",
              alignItems: "stretch",
            }}
          >
            <GridItemComponent sx={{
              height: "100%",
              borderRadius: 2,
              ml: 2,
            }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardHeader title="Hizmet Alış Fiyatı" />
              </Box>
              <TextInputComponent
                fullWidth={true}
                type="number"
                value={unitPriceIncVatForSale}
                label={"Birim Fiyat (KDV Dahil)"}
                noValidate={true}
                onChangeHandler={unitPriceIncVatForPurchaseChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
              <TextInputComponent
                fullWidth={true}
                type="number"
                label={"Birim Fiyat (KDV Hariç)"}
                noValidate={true}
                onChangeHandler={unitPriceExclVatForPurchaseChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
              <TextInputComponent
                fullWidth={true}
                type="text"
                label={"Barkod Numarası"}
                noValidate={true}
                onChangeHandler={barcodeNumberChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
              <RadioGroupComponent
                radioList={TrackableRadioGroup}
                radioChangeHandler={trackableChangeHandler}
              />
              {trackAbleItem && trackAbleItem.canDisplayInput ? (
                <TextInputComponent
                  fullWidth={true}
                  type="text"
                  value={trackAbleItemValue}
                  label={trackAbleItem.inputLabel}
                  noValidate={true}
                  onChangeHandler={trackAbleItemValueChangedHandler}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                  autoComplete="off"
                />
              ) : null}
              <TextInputComponent
                fullWidth={true}
                type="text"
                value={currentBrand}
                label={"Hizmet Adı(2)"}
                noValidate={true}
                onChangeHandler={secondaryserviceNameChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
              <ComboBoxComponet
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                fullWidth={false}
                label="Marka"
                value={currentBrand}
                changeHandler={currentBrandChangeHandler}
                menuList={units_products}
              />
              <ComboBoxComponet
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                fullWidth={false}
                label="Kategori"
                value={currentBrand}
                changeHandler={currentBrandChangeHandler}
                menuList={units_products}
              />
            </GridItemComponent>
          </Grid>
          <Grid
            item
            xs={10}
            md={10}
            sx={{
              width: "100%",
              alignItems: "stretch",
            }}
          >
            <GridItemComponent sx={{
              height: "100%",
              borderRadius: 2,
              ml: 2,
            }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardHeader title="Hizmet Satış Fiyatı" />
              </Box>
              <TextInputComponent
                fullWidth={true}
                type="number"
                value={unitPriceIncVatForSale}
                label={"Birim Fiyat (KDV Dahil)"}
                noValidate={true}
                onChangeHandler={unitPriceIncVatForSaleChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
              <TextInputComponent
                fullWidth={true}
                type="number"
                label={"Birim Fiyat (KDV Hariç)"}
                noValidate={true}
                onChangeHandler={unitPriceExclForSaleVatChangeHandler}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
                autoComplete="off"
              />
            </GridItemComponent>
          </Grid>
          <Grid item xs={10} md={10}>
            <GridItemComponent sx={{
              display: "flex", justifyContent: "center",
              backgroundColor: "transparent"
            }}>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",

                }}
              >
                <Stack
                  direction={"row"}
                  sx={{
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
        </Grid>
      </Box>
    </>
  );
};
export default AddServiceItemPage;
