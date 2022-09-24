import { useState, useRef } from 'react';
import { Container, TextField, FormGroup, Button, Box } from '@mui/material';
import SignupModal from './components/signupModal';
import Request from './common/request';

import { ToastContainer } from 'react-toastify';
import { showToast, ToastType } from './common/toast';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [isAccountError, setIsAccountError] = useState(false);
  const [isPwError, setIsPwError] = useState(false);
  const accountRef = useRef(null);
  const pwRef = useRef(null);

  const resetForm = () => {
    accountRef.current.value = '';
    pwRef.current.value = '';
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    let account = accountRef.current.value;
    let password = pwRef.current.value;
    let result = await Request('login', {
      account,
      password,
    });
    if (result.code === '1' && result.msg) {
      showToast(ToastType.SUCCESS, result.msg);
    } else {
      setIsAccountError(true);
      setIsPwError(true);
      accountRef.current.focus();
      if (result.msg) {
        showToast(ToastType.ERROR, result.msg);
      }
    }
    resetForm();
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 10,
          }}
        >
          <Box
            sx={{
              border: 1,
              p: 4,
              mt: 4,
              borderRadius: '10px',
              borderColor: 'primary.main',
            }}
          >
            <form onSubmit={onSubmit}>
              <FormGroup>
                <TextField
                  id="account"
                  label="帳號"
                  variant="outlined"
                  margin="dense"
                  error={isAccountError}
                  inputRef={accountRef}
                  onChange={() => {
                    setIsAccountError(false);
                  }}
                />
                <TextField
                  id="password"
                  label="密碼"
                  variant="outlined"
                  margin="dense"
                  type="password"
                  error={isPwError}
                  inputRef={pwRef}
                  onChange={() => {
                    setIsPwError(false);
                  }}
                />
                <Button
                  variant="outlined"
                  style={{
                    marginTop: '30px',
                    padding: '10px 0',
                  }}
                  type="submit"
                >
                  登入
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    marginTop: '10px',
                    padding: '10px 0',
                  }}
                  onClick={() => {
                    setOpenSignupModal(true);
                  }}
                >
                  註冊會員
                </Button>
              </FormGroup>
            </form>
          </Box>
        </Box>
      </Container>
      <SignupModal
        isOpen={openSignupModal}
        setOpen={setOpenSignupModal}
        closeModal={() => {
          setOpenSignupModal(false);
        }}
      />
      <ToastContainer />
    </>
  );
}

export default App;
