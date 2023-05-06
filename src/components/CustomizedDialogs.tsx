import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
   },
   '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
   },
}));

type CustomizedProps = {
   text: string;
   title: string;
   modalStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DialogTitleProps {
   id: string;
   children?: React.ReactNode;
   onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
   const { children, onClose, ...other } = props;

   return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
         {children}
         {onClose ? (
            <IconButton
               aria-label="close"
               onClick={onClose}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               X
            </IconButton>
         ) : null}
      </DialogTitle>
   );
}

export default function CustomizedDialogs({ text, title, modalStatus }: CustomizedProps) {
   const [open, setOpen] = React.useState(false);

   const handleClose = () => {
      setOpen(false);
      modalStatus(false);
   };

   return (
      <div>
         <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={true}
         >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
               {title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
               <Typography gutterBottom>
                  {text}
               </Typography>
            </DialogContent>
         </BootstrapDialog>
      </div>
   );
}