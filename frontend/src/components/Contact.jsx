import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { MdPhonelinkRing } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Goku Pizza</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              soluta beatae culpa dignissimos eaque delectus esse omnis
              necessitatibus veniam asperiores blanditiis ducimus minus, impedit
              ipsum libero, quasi tempore! Odio, repellat eligendi, obcaecati
              nisi nihil tempore hic ipsa laudantium minima facilis error
              consequuntur quisquam id itaque officiis, impedit voluptatem.
              Autem expedita quisquam modi sed suscipit est odio placeat, odit
              atque, ad sunt, dignissimos obcaecati distinctio voluptates
              aliquid ipsum adipisci natus molestiae eveniet voluptatem dolorem
              itaque esse! Eos minima reiciendis animi ipsam voluptate in, alias
              corrupti voluptas aliquid. Reiciendis quos reprehenderit fugiat,
              ratione aliquid molestias, vitae facere esse velit, impedit quo
              sed!
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    ----Contact Details----
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>22234-4567-90</td>
                </tr>
                <tr>
                  <td>
                    <MdPhonelinkRing />
                  </td>
                  <td>Call</td>
                  <td>9383015886</td>
                </tr>
                <tr>
                  <td>
                    <HiOutlineMailOpen />
                  </td>
                  <td>Email</td>
                  <td>Help@yourdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src="images/farmhouse.jpg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
