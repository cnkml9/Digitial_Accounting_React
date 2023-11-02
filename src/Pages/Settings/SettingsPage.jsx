import { useState } from "react";
import ContentHeaderComponent from "../../Components/ContentHeader";
import CompanyInformationComponent from "../../Components/Settings/CompanyInfoComp";
import ProfileCardComponent from "../../Components/Settings/ProfileCardComponent";
import { Grid } from "@mui/material";
import { Card, Box, Tab, Tabs } from "@mui/material";
import UserInfoComponent from "../../Components/Settings/UserInfoComponent";
import ChangePasswordComponent from "../../Components/Settings/ChangePasswordInfoComponent";
import RegisteredUsersComponent from "../../Components/Settings/RegisteredUsersComponent";
import CustomTabPanel from "../../Components/Settings/CustomTabPanelComponent";
import GridItemComponent from "../../Components/Grid/GridItemComponent";

const SettingsCompanyInfoPage = () => {
  const [value, setValue] = useState(0);
  function allyProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const tabChangeHandler = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
  };
  return (
    <>
      {/*content header pozisyonu ayarlanacak*/}
      <ContentHeaderComponent description={"Firma Bilgilerim"} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction={"row"} spacing={2} sx={{
          display: "flex",
          p: 2
        }}>
          <Grid item xs={15} md={4} >
            <GridItemComponent sx={{
              display: "flex",
              alignItems: "stretch",
              width: "100%",
              height: "100%",
            }}>
              <ProfileCardComponent />
            </GridItemComponent>
          </Grid>

          <Grid item xs={15} md={8} >
            <GridItemComponent>
              <Box
                sx={{
                  display: "flex",
                  mr: 1,
                  ml: 1,
                  borderBottom: 1,
                  borderColor: "divider",
                  height: "100%",
                }}
              >
                <Tabs
                  value={value}
                  onChange={tabChangeHandler}
                  aria-label="basic tabs example"
                  sx={{
                    mt: 2,
                  }}
                >
                  <Tab label="Firma Bilgilerim" {...allyProps(0)} />
                  <Tab label="Kullanıcı Bilgilerim" {...allyProps(1)} />
                  <Tab label="Şifre Değiştir" {...allyProps(2)} />
                  <Tab label="Kayıtlı Kullanıcılar" {...allyProps(3)} />
                </Tabs>
              </Box>
              <Box>
                <CustomTabPanel value={value} index={0}>
                  <CompanyInformationComponent />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <UserInfoComponent />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <ChangePasswordComponent />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <RegisteredUsersComponent />
                </CustomTabPanel>
              </Box>
            </GridItemComponent>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          padding: "10px",
          height: "100%",
        }}
      >


      </Grid>
    </>
  );
};
export default SettingsCompanyInfoPage;
