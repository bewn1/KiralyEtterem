import classes from "./Modal.module.css";
import {Fragment} from "react";
import ReactDOM from "react-dom/client";
import {createPortal} from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlay');
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
      {createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </Fragment>
  );
};

export default Modal;