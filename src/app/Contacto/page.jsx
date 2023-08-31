import Image from 'next/image';
import styles from './contacto.module.css';
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope} from "react-icons/fa";

export default function Contacto() {
  return (
    <main className={styles.main}>
     <div className={styles.content_contacto}>
     <section className={styles.location}>
        <Image src="/images/MapaMillary.jpeg"
      alt="imagen_millary"
          width={500}
          height={500}
          style={{margin: "auto", maxWidth: "100%"}}/>
      </section>

      <section className={styles.contact_us}>
        <div className={styles.row}>
          <div className={styles.contact_col}>
            <div>
              <i className={styles.fa_icons}> <FaMapMarkedAlt/> </i>
              <span>
                <h5>4940000 Freire, 4940000 Araucanía</h5>
                <p>Araucanía, Chile</p>
              </span>
            </div>
            <div>
              <i className={styles.fa_icons}> <FaPhoneAlt/> </i>
              <span>
                <h5>+56912345678</h5>
                <p>Araucanía, Chile</p>
              </span>
            </div>
            <div>
              <i className={styles.fa_icons}> <FaEnvelope/></i>
              <span>
                <h5>info@campomillary.com</h5>
                <p>Contáctanos.</p>
              </span>
            </div>
          </div>
          <div className={styles.contact_col}>
            <form id="miFormulario">
              <input type="text" name="name" placeholder="Enter Name" required />
              <input type="email" name="email" placeholder="Enter Email" required />
              <input type="text" name="subject" placeholder="Enter Subject" required />
              <textarea rows="8" name="message" placeholder="Your Comment" required></textarea>
              <button type="submit" className={styles.boton_reserva}>Upload</button>
            </form>
          </div>
        </div>
      </section>
     </div>
    </main>
  );
};
