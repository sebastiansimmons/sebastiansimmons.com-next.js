import React from 'react';

import IndexHeader from '../components/IndexHeader';
import Portfolio from '../components/Portfolio';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function HomePage() {
    return(
      <>
      <Portfolio />
      <IndexHeader />

      {/*  Contact Section-- */}
      <section class="page-section" id="contact">
          <div class="container">
              {/*  Contact Section Heading-- */}
              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
              {/*  Icon Divider-- */}
              <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                  <div class="divider-custom-line"></div>
              </div>
              {/*  Contact Section Form-- */}
              <div class="row">
                  <div class="col-lg-8 mx-auto">
                      {/*  To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-- */}
                      <form id="contactForm" name="sentMessage" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="contact" /> {/* Hidden input field for netlify */}
                          <div class="control-group">
                              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                  <label>Name</label>
                                  <input class="form-control" id="name" name="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                  <p class="help-block text-danger"></p>
                              </div>
                          </div>
                          <div class="control-group">
                              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                  <label>Email Address</label>
                                  <input class="form-control" id="email" name="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                  <p class="help-block text-danger"></p>
                              </div>
                          </div>
                          <div class="control-group">
                              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                  <label>Message</label>
                                  <textarea class="form-control" id="message" name="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                  <p class="help-block text-danger"></p>
                              </div>
                          </div>
                          <br />
                          <div id="success"></div>
                          <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                      </form>
                  </div>
              </div>
          </div>
      </section>
      </>
    );
}
