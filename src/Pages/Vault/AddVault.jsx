import {
    DialogTitle, Dialog,
    DialogContent,
    DialogActions,
    Button,
    DialogContentText,
    TextField,
    Box,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import ComboBoxComponet from "../../Components/MiniComponents/ComboBox";
import { money_units } from "../../Utilities/Constants/ComboBoxConstants";
const AddVaultPage = (props) => {
    const { onClose, open } = props;
    const [vaultName, setVaultName] = useState("");
    const [currency, setCurrency] = useState("");
    const [openingBalance, setOpeningBalance] = useState(0);
    const [openingBalanceDate, setOpeningBalanceDate] = useState(dayjs(new Date()))


    const setAllDataToState = () => {
        console.log(
            {
                vault: vaultName,
                currency: currency,
                openingBalance: openingBalance,
                openingBalanceDate: openingBalanceDate
            }
        )
    }
    return (
        <>
            <Dialog open={open} onClose={onClose} sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "50px",
                m: "auto",
            }}
                PaperProps={{ sx: { borderRadius: "10px" } }}
            >

                <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "lightgray" }}>
                    <DialogTitle>Yeni Kasa</DialogTitle>
                </Box>
                <DialogContent
                    sx={{
                        width: "100vh", height: "50vh",
                        m: "auto",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flex: "row",
                            justifyContent: "space-between",
                            mt: 8,
                            ml: 2,
                            mr: 2
                        }}
                        fullWidth
                    >
                        <TextField
                            onChange={(e) => setVaultName(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="vault_name"
                            label="Kasa Adı"
                            type="text"
                            variant="outlined"
                            sx={{ mr: 1, width: "50%", }}
                        />
                        <ComboBoxComponet
                            changeHandler={(e) => { setCurrency(e.target.value) }}
                            value={currency}
                            label={"Döviz"}
                            fullWidth={true}
                            menuList={money_units}
                            sx={{ ml: 1, mt: 1, width: "50%", }}
                        />

                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flex: "row",
                            justifyContent: "space-between",
                            mt: 3,
                            ml: 2,
                            mr: 2
                        }}
                        fullWidth
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="balance"
                            label="Açılış bakiyesi"
                            type="text"
                            variant="outlined"
                            value={openingBalance}
                            onChange={(e) => setOpeningBalance(e.target.value)}
                            sx={{ mr: 1, width: "50%" }}
                        />
                        <DatePicker
                            openTo="day"
                            views={["month", "day"]}
                            value={openingBalanceDate}
                            onChange={(newDeliveryDate) => {
                                setOpeningBalanceDate(newDeliveryDate);
                            }}
                            format="DD-MM-YYYY"
                            label="Sevk Tarihi"
                            sx={{
                                mt: 1,
                                width: "50%"
                            }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>VAZGEÇ</Button>
                    <Button onClick={setAllDataToState}>KAYDET</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}
export default AddVaultPage;