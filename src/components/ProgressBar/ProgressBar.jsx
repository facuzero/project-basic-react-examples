import { useRef } from "react";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  ProgressBar as BarProgress,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { ProgressBar2 } from "./ProgressBar2";

export const ProgressBar = () => {
  const [now, setNow] = useState(0);
  const [intervalState, setIntervalState] = useState(null);
  const inputRef = useRef(null);
  const [btnDisable, setBtnDisable] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const valueInput = inputRef.current?.value;
    const isValueValid =
      !isNaN(valueInput) && valueInput > 0 && valueInput <= 100;
    setShowModal(!isValueValid);

    if (intervalState) {
      clearInterval(intervalState);
    }

    if (isValueValid) {
      const interval = setInterval(() => {
        setNow((now) => {
          if (now === +valueInput) {
            clearInterval(interval);
            return now;
          }
          return now + 1;
        });
      }, 100);
      setIntervalState(interval);
    } else {
      handleReset();
    }
  };

  const handleReset = () => {
    setNow(0);
    clearInterval(intervalState);
  };

  const handleChange = ({ target: { value } }) => {
    setBtnDisable(
      !!!+value
    ); /* Transformar a booleano !!, negarlo !!! y parsear a num + */
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} lg={{ span: 8, offset: 2 }} className='text-center'>
          <Card style={{ width: "40rem" }} className='m-auto'>
            <Card.Body>
              <Card.Title>ProgressBar</Card.Title>
              <BarProgress
                animated
                now={now}
                label={`${now}%`}
                variant={now === 100 ? "success" : "danger"}
              />
              <ProgressBar2 now={{ now }} label={`${now}%`} />
              <Form.Control
                ref={inputRef}
                placeholder='ingresar porcentaje'
                className='mb-3'
                onChange={handleChange}
              ></Form.Control>
              <Button
                variant='primary'
                className='mb-1'
                onClick={handleDownload}
                disabled={!inputRef.current?.value}
              >
                Descargar
              </Button>
              <Button variant='primardangery' onClick={handleReset}>
                Reiniciar barra
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <h2 className='text-danger text-center py-4'>ERROR.. ❌</h2>
            <p className='text-muted fs-4 text-center'>
              Solo se acepta valores numéricos. El valor debe ser mayor a 0 y
              menor a 100.
            </p>
          </>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
