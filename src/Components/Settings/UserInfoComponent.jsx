
import { useState } from "react";
import {
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
    InputLabel,
    Select,
    Checkbox,
    MenuItem,
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Grid,
    TableBody,
    Paper,
    Avatar,
} from "@mui/material";
import GridItemComponent from "../Grid/GridItemComponent";
import ContentHeaderComponent from "../ContentHeader";
import TextInputComponent from "../MiniComponents/TextInput";
const UserInfoComponent = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const nameChangeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const surnameChangeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const emailChangeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const phoneChangeHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        height: "100%",
                        justifyContent: "start"
                    }}
                >
                    <Grid item xs={15} md={15} sx={{
                        ml: 10,
                        mr: 20
                    }}>
                        <GridItemComponent>
                            <TextInputComponent
                                label={"Ad*"}
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
                    <Grid item xs={15} md={15} sx={{
                        ml: 10,
                        mr: 20
                    }}>
                        <GridItemComponent>
                            <TextInputComponent
                                label={"Soyad*"}
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
                    <Grid item xs={15} md={15} sx={{
                        ml: 10,
                        mr: 20
                    }}>
                        <GridItemComponent>
                            <TextInputComponent
                                isDisabled={true}
                                label={"Email*"}
                                noValidate={true}
                                onChangeHandler={emailChangeHandler}
                                autoComplete="off"
                                fullWidth={true}
                                sx={{
                                    ml: "auto",
                                    mr: "auto"
                                }}
                            />
                        </GridItemComponent>
                    </Grid>
                    <Grid item xs={15} md={15} sx={{
                        ml: 10,
                        mr: 20
                    }}>
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
                </Grid>
                <Grid
                    item
                    xs={15}
                    md={15}
                    sx={{
                        mt: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        ml: 10,
                        p: 2,
                    }}
                >
                    <Stack spacing={15} direction="row"
                    >
                        <Button variant="contained">Değişiklikleri Kaydet</Button>
                    </Stack>
                </Grid>
            </Box>
        </>);
}
export default UserInfoComponent;