import { useState } from "react";
import AddVaultPage from "./AddVault";
import { Button, Box } from "@mui/material";

const VaultsPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}></Button>
            <Box sx={{display: "flex", justifyContent:"center"}}>
                <AddVaultPage
                    onClose={handleClose}
                    open={open}
                />
            </Box>
        </>

    );
}

export default VaultsPage;