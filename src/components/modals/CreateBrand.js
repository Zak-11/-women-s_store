import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";


const CreateBrand = ({show, onHide}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control

                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success"onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
