import { useState } from 'react';
import {
    Container,
    TextField,
    FormGroup,
    Button,
    Box,
    Alert,
} from '@mui/material';
import SignupModal from './components/SignupModal';
import { ERROR_MSG } from './Constants';

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
                    <Alert severity="error">{ERROR_MSG.PW_NOT_CORRECT}</Alert>

                    <Box
                        sx={{
                            border: 1,
                            p: 4,
                            mt: 4,
                            borderRadius: '10px',
                            borderColor: 'primary.main',
                        }}
                    >
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
                                style={{ marginTop: '30px', padding: '10px 0' }}
                            >
                                登入
                            </Button>
                            <Button
                                variant="outlined"
                                style={{ marginTop: '10px', padding: '10px 0' }}
                                onClick={() => {
                                    setOpenSignupModal(true);
                                }}
                            >
                                註冊會員
                            </Button>
                        </FormGroup>
                    </Box>
                </Box>
            </Container>
            <SignupModal
                isOpen={openSignupModal}
                closeModal={() => {
                    setOpenSignupModal(false);
                }}
            />
        </>
    );
}

export default App;
