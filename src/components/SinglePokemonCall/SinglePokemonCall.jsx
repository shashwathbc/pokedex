import React , {useContext} from 'react';
import ModalComp from './../ModalPokemon/ModalComp';
import { GlobalContext } from './../../context/GlobalState';
import Button from '@mui/material/Button';


const SinglePokemonCall = ({id, image, name, type , weight , stat , ability , height , experience ,  handleBookMark , disableBookmark}) => {
    const style = type + " thumb-container";
    const { removeBookMark}  = useContext(GlobalContext);
  return (
    <ModalComp id={id} image={image}  name={name}  type={type} weight={weight} stat={stat} ability={ability} height={height} experience={experience} disableBookmark={disableBookmark} handleBookMark={ handleBookMark} >
         <div className={style}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
            <Button fullWidth  onClick={()=>removeBookMark(id)} >REMOVE FROM BOOKMARK</Button>
        </div>
    </ModalComp>
  )
}

export default SinglePokemonCall