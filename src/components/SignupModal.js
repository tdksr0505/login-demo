import React, { useState, useRef } from 'react';
import {
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Alert,
} from '@mui/material';
import { ERROR_MSG } from '../Constants';

export default function SignupModal(props) {
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertText, setAlertText] = useState('');
    const pwRef = useRef(null);
    const pwConfirmRef = useRef(null);
    const onSignup = () => {
        if (checkPassword()) {
        } else {
            setAlertOpen(true);
            setAlertText(ERROR_MSG.PW_CONFIRM);
        }
    };
    const checkPassword = () => {
        if (pwRef.current.value === pwConfirmRef.current.value) {
            return true;
        }
        return false;
    };

    return (
        <Dialog open={props.isOpen}>
            <DialogTitle>註冊會員</DialogTitle>
            {alertOpen ? (
                <Alert
                    severity="error"
                    onClose={() => {
                        setAlertOpen(false);
                    }}
                >
                    {alertText}
                </Alert>
            ) : null}

            <DialogContent>
                <TextField
                    margin="dense"
                    id="account"
                    label="帳號"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="密碼"
                    fullWidth
                    variant="outlined"
                    type="password"
                    inputRef={pwRef}
                />
                <TextField
                    margin="dense"
                    id="pw_confirm"
                    label="確認密碼"
                    fullWidth
                    variant="outlined"
                    type="password"
                    inputRef={pwConfirmRef}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeModal}>取消</Button>
                <Button onClick={onSignup}>註冊</Button>
            </DialogActions>
        </Dialog>
    );
}
