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
    <section className={`${styles.section} p-5 d-flex flex-column align-items-center justify-content-center`}>
        <h2 className={styles.subtitle}>Contact</h2>
        <form className={`${styles.form} info m-5 d-flex w-50 rounded flex-column p-5 gap-3`} onSubmit={handleSubmit} action="https://formspree.io/f/myyqyrwy" method="POST">
            <div className='w-75 m-auto'>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    className='w-100 m-auto'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className='w-75 m-auto'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className='w-100 m-auto'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='w-75 m-auto'>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    className='w-100 m-auto h-100'
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit" className='w-25 mt-5 mx-auto p-1 rounded-pill' >Submit</button>
        </form>
    </section>
  );
}

export default ContactForm;
