import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {Mail, Notifications, Pets} from "@mui/icons-material";
import {useState} from "react";

const StyledToolbar = styled(Toolbar)({
   display : "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}));

const Icons = styled(Box)(({ theme}) => ({
    display: 'none',
    gap: 8,
    alignItems : 'center',
    [theme.breakpoints.up("sm")] : {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    },
    cursor: 'pointer'
}));

function Navbar() {

    const [open, setOpen] = useState(false);
    return (
        <AppBar position={"sticky"}>
            <StyledToolbar>
                <Typography variant={'h6'} sx={{display: {xs: "none" , sm: "block"}}}>LAMA DEV</Typography>
                <Pets sx={{display: {xs: 'block', sm: 'none'}}}/>
                <Search>
                    <InputBase placeholder="search..."/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{width: 30, height: 30}} src={'https://mui.com/static/images/avatar/1.jpg'}
                            onClick={ () => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={() => setOpen(true)}>
                    <Avatar sx={{width: 30, height: 30}} src={'https://mui.com/static/images/avatar/1.jpg'}/>
                    <Typography variant={'span'}>Jone</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>

        </AppBar>
    );
}

export default Navbar;