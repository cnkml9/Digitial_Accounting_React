import ContentHeaderComponent from "../Components/ContentHeader";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useMemo } from "react";
import { MantineReactTable } from "mantine-react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PieChart } from "@mui/x-charts/PieChart";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";


const rowss = [createData("TL", "-590,00 TL", "-590,00 TL")];

const pieParams = { height: 200, margin: { right: 5 } };




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Tahsil Edilecek Faturalar",
    "0,00 TL",
    "Ödenecek Faturalar",
    "0,00 TL"
  ),
  createData("Tahsil Edilecek Çekler", "0,00 TL", "Ödenecek Çekler", "0,00 TL"),
  createData("Devir Edilen Bakiye", "0,00 TL", "", ""),
  createData("Toplam Varlık", "0,00 TL", "Toplam Yükümlülük", "0,00 TL"),
];

export const data = [
  {
    firstName: "Gelirlerim ve Varlıklarım",
    ocak: "Murray",
    subat: "261 Erdman Ford",
    mart: "East Daphne",
    nisan: "Kentucky",
    mayis: "Kentucky",
    haziran: "haziran",
    temmuz: "temmuz",
    agustos: "agustos",
    eylul: "eylul",
    ekim: "ekim",
    kasim: "kasım",
    aralik: "aralık",
    subRows: [
      {
        firstName: "Ervin",
        ocak: "Reinger",
        subat: "566 Brakus Inlet",
        mart: "South Linda",
        nisan: "West Virginia",
        mayis: "Kentucky",
        haziran: "haziran",
        temmuz: "temmuz",
        agustos: "agustos",
        eylul: "eylul",
        ekim: "ekim",
        kasim: "kasım",
        aralik: "aralık",
      },
      {
        firstName: "Brittany",
        ocak: "McCullough",
        subat: "722 Emie Stream",
        mart: "Lincoln",
        nisan: "Nebraska",
        mayis: "Kentucky",
        haziran: "haziran",
        temmuz: "temmuz",
        agustos: "agustos",
        eylul: "eylul",
        ekim: "ekim",
        kasim: "kasım",
        aralik: "aralık",
      },
    ],
  },
  {
    firstName: "Ödemelerim",
    ocak: "Murray",
    subat: "261 Erdman Ford",
    mart: "East Daphne",
    nisan: "Kentucky",
    mayis: "Kentucky",
    haziran: "haziran",
    temmuz: "temmuz",
    agustos: "agustos",
    eylul: "eylul",
    ekim: "ekim",
    kasim: "kasım",
    aralik: "aralık",
    subRows: [
      {
        firstName: "Ervin",
        ocak: "Reinger",
        subat: "566 Brakus Inlet",
        mart: "South Linda",
        nisan: "West Virginia",
        mayis: "Kentucky",
        haziran: "haziran",
        temmuz: "temmuz",
        agustos: "agustos",
        eylul: "eylul",
        ekim: "ekim",
        kasim: "kasım",
        aralik: "aralık",
      },
      {
        firstName: "Brittany",
        ocak: "McCullough",
        subat: "722 Emie Stream",
        mart: "Lincoln",
        nisan: "Nebraska",
        mayis: "Kentucky",
        haziran: "haziran",
        temmuz: "temmuz",
        agustos: "agustos",
        eylul: "eylul",
        ekim: "ekim",
        kasim: "kasım",
        aralik: "aralık",
      },
    ],
  },
  {
    firstName: "Nakit Akış	",
    ocak: "Kohler",
    subat: "769 Dominic Grove",
    mart: "Columbus",
    nisan: "Ohio",
    mayis: "Kentucky",
    haziran: "haziran",
    temmuz: "temmuz",
    agustos: "agustos",
    eylul: "eylul",
    ekim: "ekim",
    kasim: "kasım",
    aralik: "aralık",
    subRows: [
      {
        firstName: "Branson",
        ocak: "Frami",
        subat: "32188 Larkin Turnpike",
        mart: "Charleston",
        nisan: "South Carolina",
        mayis: "Kentucky",
        haziran: "haziran",
        temmuz: "temmuz",
        agustos: "agustos",
        eylul: "eylul",
        ekim: "ekim",
        kasim: "kasım",
        aralik: "aralık",
      },
    ],
  },
];

const HomePage = () => {

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "",
      },
      {
        accessorKey: "ocak",
        header: "Ocak",
      },

      {
        accessorKey: "subat",
        header: "Şubat",
      },
      {
        accessorKey: "mart",
        header: "Mart",
      },

      {
        accessorKey: "nisan",
        enableColumnOrdering: false,
        header: "Nisan",
      },
      {
        accessorKey: "mayis",
        header: "Mayıs",
      },

      {
        accessorKey: "haziran",
        header: "Haziran",
      },

      {
        accessorKey: "temmuz",
        header: "Temmuz",
      },
      {
        accessorKey: "agustos",
        header: "Ağustos",
      },
      {
        accessorKey: "eylul",
        header: "Eylül",
      },
      {
        accessorKey: "ekim",
        header: "Ekim",
      },
      {
        accessorKey: "kasim",
        header: "Kasım",
      },
      {
        accessorKey: "aralik",
        header: "Aralık",
      },
    ],
    []
  );
  return (
    <>
      <ContentHeaderComponent description={"Genel Bakış"} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="float-none">
                      <div className="d-flex justify-content-between">
                        <Grid container justifyContent="center">
                          <Grid item xs={12}>
                            <Typography variant="h4" align="center">
                              2023 Özet Nakit Akışı
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography align="left">
                              Önceki Dönemden Devir Edilen Bakiyeniz: 0,00 TL
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Box sx={{ p: 6, width: "100%" }}>
                    <MantineReactTable
                      columns={columns}
                      data={data}
                      enableExpanding
                      enableExpandAll //default
                    />
                  </Box>
                </div>

                <div
                  className="modal fade"
                  id="receipModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fatura
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Kapat
                        </button>
                        <button type="button" className="btn btn-primary">
                          Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="float-none">
                      <div className="d-flex justify-content-between">
                        <Grid container justifyContent="center">
                          <Grid item xs={12}>
                            <Typography variant="h4" align="center">
                              2023 Özet Mini Bilanço
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Box sx={{ p: 6, width: "100%" }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                backgroundColor: "yellow",
                              }}
                              colSpan={2}
                              align="right"
                            >
                              Varlıklar
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                backgroundColor: "yellow",
                              }}
                              colSpan={2}
                              align="right"
                            >
                              Kaynaklar
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">
                                {row.calories}
                              </TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                              <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </div>

                <div
                  className="modal fade"
                  id="receipModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fatura
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Kapat
                        </button>
                        <button type="button" className="btn btn-primary">
                          Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="float-none">
                      <div className="d-flex justify-content-between">
                        <Grid container justifyContent="center">
                          <Grid item xs={12}>
                            <Typography variant="h6" align="left">
                              Borçlarım ve Alacaklarım
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Box sx={{ p: 6, width: "100%" }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                backgroundColor: "yellow",
                              }}
                              colSpan={2}
                              align="right"
                            >
                              Varlıklar
                            </TableCell>
                            <TableCell
                              sx={{
                                textAlign: "center",
                                backgroundColor: "yellow",
                              }}
                              colSpan={2}
                              align="right"
                            >
                              Kaynaklar
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">
                                {row.calories}
                              </TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                              <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box sx={{ marginTop: 2 }}>
                      <Typography variant="h6" align="center">
                        Bakiye : 0,00 TL
                      </Typography>
                    </Box>
                  </Box>
                </div>

                <div
                  className="modal fade"
                  id="receipModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fatura
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Kapat
                        </button>
                        <button type="button" className="btn btn-primary">
                          Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="float-none">
                      <div className="d-flex justify-content-between">
                        <Grid container justifyContent="center">
                          <Grid item xs={12}>
                            <Typography variant="h6" align="left">
                              Vade Tarihine Göre Ödenmemiş & Tahsil Edilmemiş
                              Faturalar
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Grid sx={{ marginTop: 26.8 }} container spacing={2}>
                    <Grid item xs={6} md={6}>
                      <Box sx={{ p: 6, width: "100%" }}>
                        <Typography align="center">
                          Tahsil Edilecek Faturalar
                        </Typography>
                        <PieChart
                          series={[
                            {
                              data: [
                                { value: 10 },
                                { value: 15 },
                                { value: 20 },
                              ],
                            },
                          ]}
                          {...pieParams}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Box sx={{ p: 6, width: "100%" }}>
                        <Typography align="center">
                          Ödenecek Faturalar
                        </Typography>
                        <PieChart
                          series={[
                            {
                              data: [
                                { value: 10 },
                                { value: 15 },
                                { value: 20 },
                              ],
                            },
                          ]}
                          {...pieParams}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </div>

                <div
                  className="modal fade"
                  id="receipModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fatura
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Kapat
                        </button>
                        <button type="button" className="btn btn-primary">
                          Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="float-none">
                      <div className="d-flex justify-content-between">
                        <Grid container justifyContent="center">
                          <Grid item xs={6}>
                            <Typography variant="h6" align="left">
                              Satışlarım ve Tahsilatlarım
                            </Typography>
                          </Grid>
                          <Grid item xs={3}></Grid>
                          <Grid item xs={3}>
                            <Stack spacing={2} direction="row">
                              <Button variant="contained">Son 1 Hafta</Button>
                              <Button variant="contained">Son 1 ay</Button>
                              <Button variant="contained">Son 1 yıl</Button>
                            </Stack>
                          </Grid>
                          <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                              {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                              },
                            ]}
                            width={1500}
                            height={500}
                          />
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>

                <div
                  className="modal fade"
                  id="receipModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fatura
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Kapat
                        </button>
                        <button type="button" className="btn btn-primary">
                          Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="float-none">
                      <div className="d-flex justify-content-between">
                        <Grid container justifyContent="center">
                          <Grid item xs={4}>
                            <Grid
                              container
                              spacing={0}
                              direction="column"
                              alignItems="center"
                              sx={{
                                border: 1,
                                borderRadius: "16px",
                                backgroundColor: "blue",
                              }}
                            >
                              <Typography variant="h8" color="common.white">
                                TOPLAM NAKİT -590,00TL
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={8}></Grid>
                          <Grid sx={{ marginTop: 5 }} item xs={6}>
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell>DÖVİZ CİNSİ</TableCell>
                                    <TableCell align="right">BAKİYE</TableCell>
                                    <TableCell align="right">
                                      BAKİYE TL
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rowss.map((rowss) => (
                                    <TableRow
                                      key={rowss.name}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell component="th" scope="row">
                                        {rowss.name}
                                      </TableCell>
                                      <TableCell align="right">
                                        {rowss.calories}
                                      </TableCell>
                                      <TableCell align="right">
                                        {rowss.fat}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grid>
                          <Grid item xs={6}>
                            <BarChart
                              xAxis={[
                                {
                                  scaleType: "band",
                                  data: ["group A", "group B", "group C"],
                                },
                              ]}
                              series={[{ data: [4, 3, 5] }]}
                              width={800}
                              height={300}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>

                <div
                  className="modal fade"
                  id="receipModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fatura
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Kapat
                        </button>
                        <button type="button" className="btn btn-primary">
                          Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="float-none">
                      <div className="d-flex justify-content-between">
                        <Grid container justifyContent="center">
                          <Grid item xs={12}>
                            <Grid
                              container
                              spacing={0}
                              direction="column"
                              alignItems="center"
                              sx={{
                                border: 1,
                                borderRadius: 1,
                                backgroundColor: "blue",
                                p: 1,
                              }}
                            >
                              <Typography variant="h8" color="common.white">
                                KASALAR ve BANKALAR
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            item
                            sx={{ borderRight: 1, borderRightColor: "#F0F8FF" }}
                            xs={4}
                          >
                            <Grid
                              item
                              xs={6}
                              sx={{
                                border: 1,
                                borderRadius: 1,
                                backgroundColor: "blue",
                                p: 1,
                                m: 1,
                              }}
                            >
                              <Typography variant="h8" color="common.white">
                                KASALAR -590,00TL
                              </Typography>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid sx={{ p: 1 }} item xs={12}>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 650 }}
                                  aria-label="simple table"
                                >
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>DÖVİZ CİNSİ</TableCell>
                                      <TableCell align="right">
                                        BAKİYE
                                      </TableCell>
                                      <TableCell align="right">
                                        BAKİYE TL
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rowss.map((rowss) => (
                                      <TableRow
                                        key={rowss.name}
                                        sx={{
                                          "&:last-child td, &:last-child th": {
                                            border: 0,
                                          },
                                        }}
                                      >
                                        <TableCell component="th" scope="row">
                                          {rowss.name}
                                        </TableCell>
                                        <TableCell align="right">
                                          {rowss.calories}
                                        </TableCell>
                                        <TableCell align="right">
                                          {rowss.fat}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            sx={{ borderRight: 1, borderRightColor: "#F0F8FF" }}
                            xs={4}
                          >
                            <Grid
                              item
                              xs={6}
                              sx={{
                                border: 1,
                                borderRadius: 1,
                                backgroundColor: "blue",
                                p: 1,
                                m: 1,
                              }}
                            >
                              <Typography variant="h8" color="common.white">
                                BANKALAR 0,00TL
                              </Typography>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid sx={{ p: 1 }} item xs={12}>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 650 }}
                                  aria-label="simple table"
                                >
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>DÖVİZ CİNSİ</TableCell>
                                      <TableCell align="right">
                                        BAKİYE
                                      </TableCell>
                                      <TableCell align="right">
                                        BAKİYE TL
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rowss.map((rowss) => (
                                      <TableRow
                                        key={rowss.name}
                                        sx={{
                                          "&:last-child td, &:last-child th": {
                                            border: 0,
                                          },
                                        }}
                                      >
                                        <TableCell component="th" scope="row">
                                          {rowss.name}
                                        </TableCell>
                                        <TableCell align="right">
                                          {rowss.calories}
                                        </TableCell>
                                        <TableCell align="right">
                                          {rowss.fat}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Grid>
                          </Grid>
                          <Grid item xs={4}>
                            <Grid
                              item
                              xs={6}
                              sx={{
                                border: 1,
                                borderRadius: 1,
                                backgroundColor: "blue",
                                p: 1,
                                m: 1,
                              }}
                            >
                              <Typography variant="h8" color="common.white">
                                ÇEK 0,00TL
                              </Typography>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid sx={{ p: 1 }} item xs={12}>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 650 }}
                                  aria-label="simple table"
                                >
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>DÖVİZ CİNSİ</TableCell>
                                      <TableCell align="right">
                                        BAKİYE
                                      </TableCell>
                                      <TableCell align="right">
                                        BAKİYE TL
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rowss.map((rowss) => (
                                      <TableRow
                                        key={rowss.name}
                                        sx={{
                                          "&:last-child td, &:last-child th": {
                                            border: 0,
                                          },
                                        }}
                                      >
                                        <TableCell component="th" scope="row">
                                          {rowss.name}
                                        </TableCell>
                                        <TableCell align="right">
                                          {rowss.calories}
                                        </TableCell>
                                        <TableCell align="right">
                                          {rowss.fat}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>

                <div
                  className="modal fade"
                  id="receipModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Fatura
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Kapat
                        </button>
                        <button type="button" className="btn btn-primary">
                          Kaydet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentHeaderComponent description={"Genel Bakış"} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header border-0 bg-lightblue">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">2023 Özet Nakit Akışı</h3>
                  </div>
                </div>
                <div className="card-header border-0 d-flex justify-content-between">
                  <h3 className="card-title d-flex">
                    Önceki Dönemden Devir Edilen Bakiyeniz:
                    <div>0,00TL</div>
                  </h3>
                </div>
                <div className="card-body">
                  <div id="cashFlow" className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th
                            style={{ backgroundColor: "#fff !important" }}
                          ></th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Ocak
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Şubat
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Mart
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Nisan
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Mayıs
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Haziran
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Temmuz
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Ağustos
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Eylül
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Ekim
                          </th>
                          <th style={{ backgroundColor: "#fff !important" }}>
                            Kasım
                          </th>
                          <th style={{ backgroundColor: "#ffff !important" }}>
                            Aralık
                          </th>
                        </tr>
                        <tr id="trIncomeAssets">
                          <td
                            className="tdHeader"
                            style={{ backgroundColor: "#c9ebc7" }}
                          >
                            Gelirlerim ve Varlıklarım :
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c9ebc7" }}>
                            0,00 TL
                          </td>
                        </tr>
                        <tr id="trPayment">
                          <td
                            className="tdHeader"
                            style={{ backgroundColor: "#f5dabf" }}
                          >
                            Ödemelerim :
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#f5dabf" }}>
                            0,00 TL
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="tdHeader"
                            style={{ backgroundColor: "#c1d9e0" }}
                          >
                            Nakit Akış
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                          <td style={{ backgroundColor: "#c1d9e0" }}>
                            0,00 TL
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header border-0 bg-lightblue">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">2023 Özet Mini Bilanço</h3>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <div id="miniBalance" className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td colSpan="2" className="bg-gradient-yellow">
                            Varlıklar
                          </td>
                          <td colSpan="2" className="bg-gradient-yellow">
                            Kaynaklar
                          </td>
                        </tr>
                        <tr>
                          <td className="cashFlowTd">
                            Tahsil Edilecek Faturalar
                          </td>
                          <td id="invoicesCollected">0,00 TL</td>
                          <td className="cashFlowTd">Ödenecek Faturalar</td>
                          <td id="invoicesPayable">0,00 TL</td>
                        </tr>
                        <tr>
                          <td className="cashFlowTd">Tahsil Edilecek Çekler</td>
                          <td id="checkCollected">0,00 TL</td>
                          <td className="cashFlowTd">Ödenecek Çekler</td>
                          <td id="checksPayable">0,00 TL</td>
                        </tr>
                        <tr>
                          <td className="cashFlowTd">Devir Edilen Bakiye</td>
                          <td id="cashBankBalance">0,00 TL</td>
                          <td className="cashFlowTd"></td>
                          <td className="cashFlowTd"></td>
                        </tr>
                        <tr>
                          <td className="cashFlowTd">Toplam Varlık</td>
                          <td id="totalAsset">0,00 TL</td>
                          <td className="cashFlowTd">Toplam Yükümlülük</td>
                          <td id="totalObligation">0,00 TL</td>
                        </tr>
                        <tr>
                          <td className="cashFlowTd"></td>
                          <td id="negativeAsset"></td>
                          <td
                            id="positiveAssetText"
                            className="cashFlowTd negPosAsst"
                          >
                            Negatif/Pozitif Varlık
                          </td>
                          <td
                            id="positiveAsset"
                            className="negPosAsst"
                            style={{ backgroundColor: "rgb(193, 217, 224)" }}
                          >
                            0,00 TL
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header border-0 bg-lightblue">
                  <div className="d-flex justify-content-between">
                    <div className="card-title d-flex">
                      <i className="nav-icon fas fa-money-bill mr-3 mt-1"></i>
                      Toplam Nakit
                    </div>
                    <div>0,00TL</div>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-center">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th style={{ width: "37%", color: "#707b88" }}>
                            DÖVİZ CİNSİ
                          </th>
                          <th
                            style={{ color: "#707b88" }}
                            className="m--align-right"
                          >
                            BAKİYE
                          </th>
                          <th
                            className="m--align-right"
                            style={{ color: "#707b88" }}
                          >
                            BAKİYE TL
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ fontWeight: "600", fontSize: "15px" }}>
                            <span>TL</span>
                          </td>
                          <td
                            className="m--align-right"
                            style={{ fontSize: "15px" }}
                          >
                            0,00 TL
                          </td>
                          <td
                            className="m--align-right"
                            style={{ fontWeight: "600", fontSize: "15px" }}
                          >
                            0,00 TL
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
