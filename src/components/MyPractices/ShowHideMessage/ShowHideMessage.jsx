import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import { useShow } from "../../hooks/useShow";
import { Captcha } from "../utils/captcha";

const handleCaptcha = () => {
  Captcha();
};

export const ShowHideMessage = () => {
  const { show, handleShowMessage } = useShow(false);

  return (
    <Container>
      <Row>
        <Col xs={12} lg={{ span: 6, offset: 3 }} className='text-center'>
          <Button
            className='mb-2'
            onClick={
              handleCaptcha ? handleShowMessage : "Sos un robot rufian 🤖"
            }
            variant={show ? "danger " : "success "}
          >
            {show ? "🙈Ocultar " : "👁Mostrar "}mensaje
          </Button>
          <Toast show={show} className='m-auto' onClose={handleShowMessage}>
            <Toast.Header>
              <img
                src='holder.js/20x20?text=%20'
                className='rounded me-2'
                alt=''
              />
              <strong className='me-auto'>ReactJs</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Praaactica!!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
