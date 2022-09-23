import { useState } from "react";
import {
  Container,
  TextField,
  FormGroup,
  Button,
  Box,
  Alert,
} from "@mui/material";
import SignupModal from "./components/SignupModal";
import { ALERT_MSG } from "./Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onSubmit = () => {
  toast.error(ALERT_MSG.ERROR.PW_CONFIRM, {
    position: toast.POSITION.TOP_CENTER,
  });
  console.log(`onSubmit`);
};
function App() {
  const [openSignupModal, setOpenSignupModal] = useState(false);
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
              borderRadius: "10px",
              borderColor: "primary.main",
            }}
          >
            <form>
              <FormGroup>
                <TextField
                  id="account"
                  label="帳號"
                  variant="outlined"
                  margin="dense"
                />
                <TextField
                  id="password"
                  label="密碼"
                  variant="outlined"
                  margin="dense"
                  type="password"
                />
                <Button
                  variant="outlined"
                  style={{ marginTop: "30px", padding: "10px 0" }}
                  onClick={onSubmit}
                >
                  登入
                </Button>
                <Button
                  variant="outlined"
                  style={{ marginTop: "10px", padding: "10px 0" }}
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
        closeModal={() => {
          setOpenSignupModal(false);
        }}
      />
      <ToastContainer />
    </>
  );
}

export default App;
