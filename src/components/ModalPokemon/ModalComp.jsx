import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CloseIcon from '@mui/icons-material/Close';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ModalComp({children,disableBookmark , handleBookMark, id , image , name , type , weight , stat , ability , height , experience}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle =  type + " thumb-container";;

  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    
        <Box sx={style} id={id} className={modalStyle} >
          <div>
          <Button disabled={disableBookmark}  onClick={ handleBookMark}>
          <BookmarkIcon style={{color:"green" , cursor:"pointer" , marginRight:"90px"}} />
          </Button>
          <Button onClick={handleClose}>
            <CloseIcon  style={{color:"red" , cursor:"pointer" }}/>
            </Button>
          </div> 
            <img src={image}/>
            <Grid >
            <Typography variant="h3" component="h2" >
           NAME:  {name}
          </Typography>
          <Typography id="modal-modal-title" sx={{ mt: 2 }} varient="h4" component="h2">
           TYPE: {type}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          ABILITY: {ability}
          </Typography>
          <Typography variant="h6" component="h2"  >
         WEIGHT:  {weight}
          <LinearProgress variant="indeterminate" value={weight} />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          STAT: {stat} <LinearProgress variant="determinate" value={stat} /> 
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          HEIGHT: {height} <LinearProgress variant="indeterminate" value={height} /> 
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          EXPERIENCE: {experience} <LinearProgress variant="determinate" value={experience} /> 
          </Typography>
            </Grid>
        
        </Box>
      </Modal>
    </div>
  );
}
