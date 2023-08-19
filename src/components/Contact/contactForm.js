import styles from '../Contact/contact.module.scss'
import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://formspree.io/f/myyqyrwy', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        console.log('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <section className={styles.section}>
        <form className={`${styles.form} d-flex flex-column`} onSubmit={handleSubmit} action="https://formspree.io/f/myyqyrwy" method="POST">
            <div className='w-75 m-auto mb-3'>
                <label className='mb-1' htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    className={`${styles.input} w-100`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className='w-75 m-auto mb-3'>
                <label className='mb-1' htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className={`${styles.input} w-100`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='w-75 m-auto mb-3'>
                <label className='mb-1' htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    className={`${styles.big_input} w-100`}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit" className={styles.submit}>Submit</button>
        </form>
    </section>
  );
}

export default ContactForm;
