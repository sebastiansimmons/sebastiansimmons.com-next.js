import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <div class="col-md-6 col-lg-4 mb-5">
      <>

        <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton />

          <Modal.Body>
            <div class="modal-body text-center">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      {/*  Portfolio Modal - Title-- */}
                      <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Log Cabin</h2>
                      {/*  Icon Divider-- */}
                      <div class="divider-custom">
                          <div class="divider-custom-line"></div>
                          <div class="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                          <div class="divider-custom-line"></div>
                      </div>
                      {/*  Portfolio Modal - Image-- */}
                      <img class="img-fluid rounded mb-5" src='/img/portfolio/cabin.png' alt="" />
                  </div>

                  {/*  Portfolio Modal - Text-- */}
                  <Container margin={"4px"}>
                  <p class="mb-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  </Container>


                    <button class="btn btn-primary" onClick={handleClose}>
                        Close Window
                    </button>
              </div>
            </div>
           </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </>
      <i  onClick={handleShow}>

          <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><FontAwesomeIcon className="fas fa-plus fa-3x"  icon={faPlus} /></div>
              </div>
              <img class="img-fluid" src='/img/portfolio/cabin.png' alt="" />
          </div>
            </i>
      </div>
    );
}

function BlogPost() {
  return <h2>BLOGPOST</h2>;
}
