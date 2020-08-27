import React from 'react';
import Row from 'react-bootstrap/Row';

import PortfolioItem from './PortfolioItem';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio(props) {

    return(
      <section class="page-section portfolio" id="blog">
          <div class="container">
              {/*  Portfolio Section Heading-- */}
              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Project Blog<br/>(Coming Soon)</h2>
              {/*  Icon Divider-- */}
              <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                  <div class="divider-custom-line"></div>
              </div>
              {/*  Portfolio Grid Items-- */}
              <Row>
                  {/*  Portfolio Item 1-- */}
                  <PortfolioItem />
                  {/*  Portfolio Item 2-- */}
                  <div class="col-md-6 col-lg-4 mb-5">
                      <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div class="portfolio-item-caption-content text-center text-white"><FontAwesomeIcon className="fas fa-plus fa-3x"  icon={faPlus} /></div>
                          </div>
                          <img class="img-fluid" src='/img/portfolio/cake.png' alt="" />
                      </div>
                  </div>
                  {/*  Portfolio Item 3-- */}
                  <div class="col-md-6 col-lg-4 mb-5">
                      <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div class="portfolio-item-caption-content text-center text-white"><FontAwesomeIcon className="fas fa-plus fa-3x"  icon={faPlus} /></div>
                          </div>
                          <img class="img-fluid" src='/img/portfolio/circus.png' alt="" />
                      </div>
                  </div>
                  {/*  Portfolio Item 4-- */}
                  <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                      <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div class="portfolio-item-caption-content text-center text-white"><FontAwesomeIcon className="fas fa-plus fa-3x"  icon={faPlus} /></div>
                          </div>
                          <img class="img-fluid" src='/img/portfolio/game.png' alt="" />
                      </div>
                  </div>
                  {/*  Portfolio Item 5-- */}
                  <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                      <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div class="portfolio-item-caption-content text-center text-white"><FontAwesomeIcon className="fas fa-plus fa-3x"  icon={faPlus} /></div>
                          </div>
                          <img class="img-fluid" src='/img/portfolio/safe.png' alt="" />
                      </div>
                  </div>
                  {/*  Portfolio Item 6-- */}
                  <div class="col-md-6 col-lg-4">
                      <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div class="portfolio-item-caption-content text-center text-white"><FontAwesomeIcon className="fas fa-plus fa-3x"  icon={faPlus} /></div>
                          </div>
                          <img class="img-fluid" src='/img/portfolio/submarine.png' alt="" />
                      </div>
                  </div>
              </Row>
          </div>
      </section>
    );
}
