import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalComp({children,disableBookmark , handleBookMark, id , image , name , type , weight , stat , ability , height , experience}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    
        <Box sx={style} id={id} style={{backgroundColor:"#E2F9E1"}}>
          <div>
          <Button disabled={disableBookmark}  onClick={ handleBookMark}>
          <BookmarkIcon style={{color:"green" , cursor:"pointer"}}/>
          </Button>
          </div>
        
            <img src={image}/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           NAME:  {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           TYPE: {type}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          WEIGHT: {weight}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          STAT: {stat}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          ABILITY: {ability}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          HEIGHT: {height}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          EXPERIENCE: {experience}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
