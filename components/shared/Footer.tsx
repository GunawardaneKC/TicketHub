import React from 'react';
import Image from "next/image"
import Link from "next/link"
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section2} >
        <Link href='/'>
          <Image 
            src="/assets/images/logo3.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
          <h3 className=' mt-5'>TicketHub.LK is your go-to platform for purchasing tickets to the best musical concerts and live events. With a simple, secure, and fast booking system, we make sure you never miss out on your favorite performances. Explore and grab your tickets now!</h3>
        </div>

        <div className={styles.section3}>
          <h3 className=' text-lg font-semibold'>Links <hr className='w-14' style={{ borderColor: '#0fa709' }}/></h3>
          <ul className={styles.list}>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className={styles.section3}>
          <h3 className=' text-lg font-semibold'>Contact <hr className=' w-20' style={{ borderColor: '#0fa709' }} /> </h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.icon} />
              <span>+947778743175 | +947778743175</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>No 188/1, Piliyandala Road, Werahera, Boralesgamuwa.</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <span>hello@tickethub.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.social}>
      <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
      <a href="#" className={styles.socialIcon}><FaInstagram /></a>
      <a href="#" className={styles.socialIcon}><FaTiktok /></a>
      <a href="#" className={styles.socialIcon}><FaWhatsapp /></a>
      <a href="#" className={styles.socialIcon}><FaEnvelope /></a>
      </div>
      <div className={styles.footerBottom}>
      <hr />
        <p className='mt-5'>&copy; 2025 TicketHub.LK. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;