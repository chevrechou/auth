import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';


const EventModal = ({show, onModalClose, date}) => {
    // const {onClickDay}= this.props;
    return (
        <>
        <Modal show={show} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{date}, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onModalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default EventModal;
