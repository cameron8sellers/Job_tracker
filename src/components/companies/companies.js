import React from "react";
import Wishlist from "./Wishlist/Wishlist"
import Applied from "./Applied/Applied"
import Interviews from "./Interviews/Interviews"
import Offers from "./Offers/Offers"
import { Col, Row } from "react-bootstrap"

const CompaniesApplications = () => {
  return (
    <div>
        <Row>
            <Col>
                <Wishlist />
            </Col>

            <Col>
                <Applied />
            </Col>

            <Col>
                <Interviews />
            </Col>

            <Col>
                <Offers />
            </Col>
        </Row>
    </div>
  );
};

export default CompaniesApplications;