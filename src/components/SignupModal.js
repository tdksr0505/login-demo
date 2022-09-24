import React, { useState, useRef } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { ALERT_MSG } from '../Constants';
import Request from '../common/request';
import { showToast, ToastType } from '../common/toast';

export default function SignupModal(props) {
  const [isPwConfirmError, setIsPwConfirmError] = useState(false);
  const accountRef = useRef(null);
  const pwRef = useRef(null);
  const pwConfirmRef = useRef(null);

  const resetForm = () => {
    accountRef.current.value = '';
    pwRef.current.value = '';
    pwConfirmRef.current.value = '';
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let account = accountRef.current.value;
    let password = pwRef.current.value;
    let pw_confirm = pwConfirmRef.current.value;
    if (password === pw_confirm) {
      // 檢查確認密碼是否相同
      let result = await Request('signup', {
        account,
        password,
      });
      if (result.code === '1' && result.msg) {
        // 註冊成功
        showToast(ToastType.SUCCESS, result.msg);
        props.setOpen(false);
      } else if (result.code === '0' && result.msg) {
        // 帳號已被註冊
        resetForm();
        showToast(ToastType.ERROR, result.msg);
      }
    } else {
      showToast(ToastType.ERROR, ALERT_MSG.ERROR.PW_CONFIRM);
      pwConfirmRef.current.value = '';
      pwConfirmRef.current.focus();
      setIsPwConfirmError(true);
    }
  };

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>註冊會員</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            margin="dense"
            id="account"
            label="帳號"
            fullWidth
            variant="outlined"
            inputRef={accountRef}
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
            onChange={() => {
              setIsPwConfirmError(false);
            }}
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
          <Button type="submit">註冊</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
