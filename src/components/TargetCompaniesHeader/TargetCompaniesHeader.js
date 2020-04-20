import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import TargetCompaniesWishlist from "../TargetCompaniesWishlist/TargetCompaniesWishlist"
import TargetCompaniesApplied from "../TargetCompaniesApplied/TargetCompaniesApplied"
import TargetCompaniesInterviews from "../TargetCompaniesInterviews/TargetCompaniesInterviews"
import TargetCompaniesOffers from "../TargetCompaniesOffers/TargetCompaniesOffers"
import TargetCompaniesHeader from "../TargetCompaniesDesktopHeader/TargetCompaniesDesktopHeader"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap"

export default function TargetCompaniesPaths({ match }) {
  const isMobile = useMediaQuery({query: "(max-device-width: 1023px)"})
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div className="App">
      <TargetCompaniesHeader />
      {
        isMobile ?
        (
            <>
                <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Target Companies</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink href={`${match.path}/wishlist`}>Wishlist</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href={`${match.path}/applied`}>Applied</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href={`${match.path}/interviews`}>Interviews</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href={`${match.path}/offers`}>Offers</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>

                <Switch>
                    <Route path={`${match.path}/wishlist`} component={ TargetCompaniesWishlist } />
                    <Route path={`${match.path}/applied`} component={ TargetCompaniesApplied } />
                    <Route path={`${match.path}/interviews`} component={ TargetCompaniesInterviews } />
                    <Route path={`${match.path}/offers`} component={ TargetCompaniesOffers } />
                </Switch>
            </>
        ) : " "
      }
    </div>
  )
}
