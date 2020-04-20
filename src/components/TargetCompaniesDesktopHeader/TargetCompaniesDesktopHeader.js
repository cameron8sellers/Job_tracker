import React from "react"
import { useMediaQuery } from "react-responsive"
import TargetCompaniesDesktopView from "../TargetCompaniesDesktopView/TargetCompaniesDesktopView"
// import "../../styles.css"

function TargetCompaniesHeader() {
  const isDesktop = useMediaQuery({query: "(min-device-width: 1024px)"})
  return (
    <>
      {
        isDesktop ?
          (
            <TargetCompaniesDesktopView />
          ) : 
          ( " " )
      }
    </>
  )
}

export default TargetCompaniesHeader