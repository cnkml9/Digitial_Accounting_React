
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
const ChangePasswordComponent = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const currentPasswordHandler = (e) => {
        e.preventDefault();
        setCurrentPassword(e.target.value);
    }
    const newPasswordChangeHandler = (e) => {
        e.preventDefault();
        setNewPassword(e.target.value);
    }
    const confirmNewPasswordHandler = (e) => {
        e.preventDefault();
        setConfirmNewPassword(e.target.value);
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
                                type="password"
                                label={"Mevcut Şifreniz*"}
                                noValidate={true}
                                onChangeHandler={currentPasswordHandler}
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
                                type="password"
                                label={"Yeni Şifreniz*"}
                                noValidate={true}
                                onChangeHandler={newPasswordChangeHandler}
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
                                type="password"
                                label={"Yeni Şifreniz (Tekrar)*"}
                                noValidate={true}
                                onChangeHandler={confirmNewPasswordHandler}
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
export default ChangePasswordComponent;