import React from 'react';
import solutions from '../images/solutions.png';
export const Solutions = () => {
  return (
    <div>
           <section id="our_pride">
        <div className="bnrImg">
          <img src={solutions} width="100%" height="700px" />
        </div>
        <div className="mb-2 pt-5 mt-3 container aboutOverview">
        <div className="row  justify-content-center ">
          <div className="col-lg-10">
            <h1 className="text-center py-3" style={{fontWeight:"600", color:"#6f309e"}}>Solutions</h1>
            <p className="text-center" style={{textAlign:"justify"}}>
              Airi-Sense is a global company with Swiss roots and one of the
              world's leading logistics automation companies. We are
              headquartered in Buchs/Aarau, Switzerland and stand for
              innovation, quality, industry-leading software and robotics
              technologies developed in-house.{" "}
            </p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}
