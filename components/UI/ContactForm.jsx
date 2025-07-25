'use client';

import Link from 'next/link';
import ButtonDark from './ButtonDark';
import Image from 'next/image';
import check from '@/assets/check.svg';
import { getFormData } from '@/lib/http';
import { useEffect, useState } from 'react';

export default function ContactForm({ formType = 'blog-form', actionFn = () => { } }) {
  const [formData, setFormData] = useState();

  useEffect(() => {
    async function getData() {
      const data = await getFormData(formType);
      setFormData(data);
    }
    getData();
  }, []);

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" action={actionFn}>
        <h3 className="form-title">{formData?.title}</h3>
        <p className="form-text">{formData?.text}</p>
        <div className="form-fields">
          <fieldset className="form-fieldset">
            {formData?.fields.map((field) => (
              <div key={field.name} className="form-group">
                <label htmlFor={field.name}>
                  {field.type === 'textarea' && (
                    <textarea
                      className="form-input"
                      name={field.name}
                      id={field.name}
                      placeholder={field.placeholder}
                    ></textarea>
                  )}
                  {field.type !== 'textarea' && (
                    <input
                      type={field.type}
                      className="form-input"
                      name={field.name}
                      id={field.name}
                      placeholder={field.placeholder}
                      required
                    />
                  )}
                </label>
              </div>
            ))}
          </fieldset>

          <div className="form-group">
            <div className="checkbox">
              <div className="checkbox-field">
                <label htmlFor="accept">
                  <input type="checkbox" name="accept" id="accept" />
                  <Image src={check} alt="check" />
                </label>
              </div>
              <p>
                By submitting this form, I accept
                <Link href={`/`}>Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <ButtonDark>{formData?.submitText}</ButtonDark>
        </div>
      </form>
    </div>
  );
}
