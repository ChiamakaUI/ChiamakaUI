import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h2>Please, send a message</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact"
        >
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>

          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <div>
          <SocialIcon url="https://twitter.com/Ada_ezemba" target="_blank" />
          <SocialIcon
            url="https://www.linkedin.com/in/chiamaka-ezemba/"
            target="_blank"
          />
          <SocialIcon
            url="https://medium.com/@ezembachiamaka"
            target="_blank"
          />
        </div>
      </div>
    );
  }
}
