import React from "react";
import { useMediaQuery } from "react-responsive"

export default function Description() {
  const isMobile = useMediaQuery({query: "(max-width:768px)"}) 
  return (
    <>
      {
        isMobile ?
          (
            <div style={{marginTop: "7%", marginBottom: "7%"}}>
                <h3 className="companies-description">Keep track of your all job applications!</h3>
            </div>
          ) : 
          (
            <div>
              <h3 className="companies-description">Keep track of your all job applications!</h3>
            </div>
          )
      }
    </>
  )
}