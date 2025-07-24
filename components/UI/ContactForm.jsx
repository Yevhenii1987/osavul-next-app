'use client';

import Link from "next/link";
import ButtonDark from "./ButtonDark";
import Image from "next/image";
import check from '@/assets/check.svg';

export default function ContactForm() {
  return (
    <div className="contact-form-wrap">
      <form className="contact-form">
        <h3 className="form-title">Like this event?</h3>
        <p className="form-text">Leave your contact to register</p>
        <div className="form-fields">
          <fieldset className="form-fieldset">
            <div className="form-group">
              <label htmlFor="full-name">
                <input type="text" className="form-input" name="full-name" id="full-name" placeholder="First and last name" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <input type="email" className="form-input" name="email" id="email" placeholder="Email address" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="organisation">
                <input type="text" className="form-input" name="organisation" id="organisation" placeholder="Organisation" />
              </label>
            </div>
          </fieldset>

          <div className="form-group">
            <div className="checkbox">
              <div className="checkbox-field">
                <label htmlFor="accept">
                  <input type="checkbox" name="accept" id="accept" />
                  <Image src={check} alt="check" />
                </label>
              </div>
              <p>By submitting this form, I accept <Link href={`/`}>Privacy Policy</Link></p>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <ButtonDark>Register</ButtonDark>
        </div>
      </form>
    </div>
  );
}
