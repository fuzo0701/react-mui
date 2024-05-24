import {Avatar, Box, Fab, Modal, Stack, styled, TextField, Tooltip, Typography} from "@mui/material";
import {Add as AddIcon, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material';
import {useState} from "react";

const SytledModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
});

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems:'center',
    gap : '10px',
}));


function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={() => setOpen(true)}
                title="Delete"
                sx={{position: "fixed",
                    left: {xs: "calc(50% - 25px)", md:30},
                    bottom: 20,
                    }}>
                <Fab color={'primary'} aria-label={'add'}>

                    <AddIcon />

                </Fab>
            </Tooltip>
            <SytledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={200} bgcolor={"background.default"} colr={"text.primary"} p={3} borderRadius={5}>
                    <Typography id="modal-modal-title" variant="h6" color={'gray'} textAlign={'center'}>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar sx={{width: 30, height: 30}} src={'https://mui.com/static/images/avatar/1.jpg'}/>
                        <Typography variant={'span'}> Jone </Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        sx={{width: '100%'}}
                        multiline
                        rows={3}
                        placeholder="what's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1}>
                        <EmojiEmotions color='primary'/>
                        <Image color='secondary'/>
                        <VideoCameraBack color='success'/>
                        <PersonAdd  color='error'/>
                    </Stack>
               </Box>

            </SytledModal>
        </>
    );
}

export default Add;