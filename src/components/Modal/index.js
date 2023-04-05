import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    pt: 1,
    pb:6
};

export default function BasicModal({ children, button, handleClose, open, width = 400,height}) {
    return (
        <div>
            {button}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ ...style, width,height }}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
