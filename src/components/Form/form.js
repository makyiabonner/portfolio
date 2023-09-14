import styles from './form.module.scss'
import React, { useState } from 'react';
import axios from 'axios';

function Form() {
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
        <form className={styles.form} onSubmit={handleSubmit} action="https://formspree.io/f/myyqyrwy" method="POST">
            <div className='mx-auto w-75 mb-3'>
              <span className={styles.formSpan}>GET IN TOUCH</span>
              <h1 className={styles.formTitle}>Contact.</h1>
            </div>
            <div className='w-75 m-auto mb-3'>
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input
                    placeholder={`What's your name?`}
                    type="text"
                    id="name"
                    className={`${styles.input} w-100`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className='w-75 m-auto mb-3'>
                <label className={styles.label} htmlFor="email">Your Email</label>
                <input
                    placeholder={`What's your email?`}
                    type="email"
                    id="email"
                    className={`${styles.input} w-100`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='w-75 m-auto mb-3'>
                <label className={styles.label} htmlFor="message">Your Message</label>
                <textarea
                    placeholder={`What's your message?`}
                    id="message"
                    value={message}
                    className={`${styles.big_input} w-100`}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit" className={styles.submit}>SEND</button>
        </form>
    </section>
  );
}

export default Form;
