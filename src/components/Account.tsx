import React, { FC } from "react";
import { useAppSelector } from "../custom-hooks/useAppSelector";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Account: FC = () => {
  const store = useAppSelector((store) => store.offerDetails);
  const { firstName, lastName, rca, casco } = store;

  return (
    <Container className="account-container">
      <Row>
        <Col sm={4}>
          <div className="account-details">
            <p className="account-name">NAME: {firstName}</p>
            <p className="account-email">EMAIL: {lastName}</p>
            <p className="account-offers">
              All offers: {rca.length + casco.length}
            </p>
          </div>
        </Col>
        <Col sm={8}>
          <table className="insurance-table">
            <thead>
              <tr>
                <th>Insurance Type</th>
                <th>Cost</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rca.map((offer) => (
                <tr key={offer.regNo}>
                  <td>RCA</td>
                  <td>{offer.payment}</td>
                  <td>{offer.dateCreated}</td>
                </tr>
              ))}
              {casco.map((offer) => (
                <tr key={offer.payment}>
                  <td>CASCO</td>
                  <td>{offer.payment}</td>
                  <td>{offer.dateCreated}</td>
                </tr>
              ))}
              {/* <tr>
                <td>RCA</td>
                <td>200.00</td>
                <td>20/10/2002</td>
              </tr> */}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
    // <div className="account-container">
    //   <div className="account-details">
    //     <p className="account-name">NAME</p>
    //     <p className="account-email">EMAIL</p>
    //     <p className="account-offers">All offers:</p>
    //   </div>
    //   <div className="offers-table">
    //     <table>
    //       <thead></thead>
    //       <tbody></tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default Account;
