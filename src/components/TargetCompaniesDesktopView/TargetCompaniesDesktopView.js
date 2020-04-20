import React from "react"
import {Nav, Navbar, NavbarBrand } from "reactstrap"
import { Row, Col } from "reactstrap"
import TargetCompaniesWishlist from "../TargetCompaniesWishlist/TargetCompaniesWishlist"
import TargetCompaniesApplied from "../TargetCompaniesApplied/TargetCompaniesApplied"
import TargetCompaniesInterviews from "../TargetCompaniesInterviews/TargetCompaniesInterviews"
import TargetCompaniesOffers from "../TargetCompaniesOffers/TargetCompaniesOffers"
// import "../../styles.css"

export default function TargetCompaniesDesktopView(props) {
    return (
        <>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/targetcompanies">Target Companies</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                </Navbar>
                    <Row>
                        <Col>
                            <TargetCompaniesWishlist />
                        </Col>

                        <Col>
                            <TargetCompaniesApplied />
                        </Col>

                        <Col>
                            <TargetCompaniesInterviews />
                        </Col>

                        <Col>
                            <TargetCompaniesOffers />
                        </Col>
                    </Row>
            </div>
        </>
    )
}
