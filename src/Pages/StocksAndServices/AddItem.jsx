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
  CardHeader, Button,
  Grid,
  Box,
  Stack
} from "@mui/material";
import GridItemComponent from "../../Components/Grid/GridItemComponent";
import ComboBoxComponet from "../../Components/MiniComponents/ComboBox";
import TextInputComponent from "../../Components/MiniComponents/TextInput";
import RadioGroupComponent from "../../Components/MiniComponents/RadioGroup";
import { TrackableRadioGroup } from "../../Utilities/Constants/RadioGroupConstants";

const AddItemPage = () => {
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [productUnit, setProductUnit] = useState("");
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
  const [secondaryProductName, setSecondaryProductName] = useState("");
  const [category, setCategory] = useState("");
  const secondaryProductNameChangeHandler = (e) => {
    e.preventDefault();
    setSecondaryProductName(e.target.value);
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
  const productUnitChangeHandler = (e) => {
    e.preventDefault();
    setProductUnit(e.target.value);
  };
  const productNameChangeHandler = (e) => {
    e.preventDefault();
    setProductName(e.target.value);
  };
  const productCodeChangeHandler = (e) => {
    e.preventDefault();
    setProductCode(e.target.value);
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
            description={"Ürün Ekle"}
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
                label={"Ürün Kodu"}
                noValidate={true}
                onChangeHandler={productCodeChangeHandler}
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
                label={"Ürün Adı"}
                noValidate={true}
                onChangeHandler={productNameChangeHandler}
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
                value={productUnit}
                changeHandler={productUnitChangeHandler}
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
                <CardHeader title="Ürün Alış Fiyatı" />
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
                row={true}
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
                label={"Ürün Adı(2)"}
                noValidate={true}
                onChangeHandler={secondaryProductNameChangeHandler}
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
            <GridItemComponent
              sx={{
                height: "100%",
                borderRadius: 2,
                ml: 2,
              }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardHeader title="Ürün Satış Fiyatı" />
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
        </Grid>
      </Box >
    </>
  );
};
export default AddItemPage;
