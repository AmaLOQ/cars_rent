import React from "react";
import { Modal } from "@mui/material";


export const BasicModal = ({ open, onClose, content }) => <Modal open={open} onClick={onClose}>{content}</Modal>