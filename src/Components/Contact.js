import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div class="container mt-4">
          <h2 className="myName  mb-2">Please, send a message</h2>
          <div class="row mt-2">
            <div class="col-lg-8 mx-auto">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                action="/contact"
              >
                <div className="form-group">
                  <input type="hidden" name="form-name" value="contact" />

                  <label className="projectParagraph" for="Name">
                    Name:
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="projectParagraph" for="email">
                    Email Address:
                  </label>
                  <input type="email" class="form-control" />
                </div>
                <div className="form-group">
                  <label className="projectParagraph" for="message">
                    Message:
                  </label>
                  <textarea class="form-control"></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mx-auto mb-5 btnLink1"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="inline flex p- 3 mx-auto my-5 icons">
          <h5 className="socialheader">Follow me on Social media:</h5>

          <SocialIcon
            url="https://twitter.com/Ada_ezemba"
            classname="mx-4"
            target="_blank"
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/chiamaka-ezemba/"
            classname="mx-4"
            target="_blank"
            style={{ height: 60, width: 60 }}
          />
          <SocialIcon
            url="https://medium.com/@ezembachiamaka"
            target="_blank"
            classname="mx-4"
            style={{ height: 60, width: 60 }}
          />
          </div>
      </div>
    );
  }
}
