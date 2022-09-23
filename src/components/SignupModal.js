import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  FormGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { ALERT_MSG } from "../Constants";
import { toast } from "react-toastify";

const onSubmit = () => {
  console.log(`onSubmit`);
};
export default function SignupModal(props) {
  const [isPwConfirmError, setIsPwConfirmError] = useState(false);
  const pwRef = useRef(null);
  const pwConfirmRef = useRef(null);
  const onSignup = () => {
    if (checkPwConfirm()) {
    } else {
      toast.error(ALERT_MSG.ERROR.PW_CONFIRM, {
        position: toast.POSITION.TOP_CENTER,
      });
      pwConfirmRef.current.value = "";
      pwConfirmRef.current.focus();
      setIsPwConfirmError(true);
    }
  };
  const checkPwConfirm = () => {
    if (pwRef.current.value === pwConfirmRef.current.value) {
      return true;
    }
    return false;
  };

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>註冊會員</DialogTitle>
      <form>
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
            error={isPwConfirmError}
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
          <Button
            onClick={() => {
              props.closeModal();
              setIsPwConfirmError(false);
            }}
          >
            取消
          </Button>
          <Button onClick={onSubmit}>註冊</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
