
import styles from './galeria.module.css'
import Image from 'next/image';

export default function Galeria() {
  return (
    <main className={styles.main}>
        {/* Galleria */}
        <div className={styles.gallery}
        style={{}}>
          <div className={styles.image_container}>
          <div className={styles.imageDomo}>
              <Image src="/images/domos1.jpg" 
              alt="imagen domo"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageDomo}>
              <Image src="/images/domos2.jpg" 
              alt="Imagen domo"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageDomo}>
            <Image src="/images/domos3.jpg" 
              alt="imagen domo"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageGastronomia}>
            <Image src="/images/comida1.jpg" 
              alt="imagen gastronomia"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageGastronomia}>
            <Image src="/images/comida2.jpg" 
              alt="imagen gastronomia"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageGastronomia}>
            <Image src="/images/comida3.jpg" 
              alt="imagen gastronomia"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageGastronomia}>
            <Image src="/images/comida4.jpg" 
              alt="imagen gastronomia"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageGastronomia}>
            <Image src="/images/comida5.jpg" 
              alt="imagen gastronomia"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageGastronomia}>
            <Image src="/images/comida6.jpg" 
              alt="imagen gastronomia"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageTinaja}>
            <Image src="/images/tinaja1.jpg" 
              alt="imagen tinaja"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageTinaja}>
            <Image src="/images/tinaja2.jpg" 
              alt="imagen tinaja"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageSustentabilidad}>
            <Image src="/images/sustentabilidad1.jpg" 
              alt="imagen sustentabilidad"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageSustentabilidad}>
            <Image src="/images/sustentabilidad2.jpg" 
              alt="imagen sustentabilidad"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageEventos}>
            <Image src="/images/evento1.jpg" 
              alt="imagen eventos"
              width={350}
              height={250} />
            </div>
            <div className={styles.imageEventos}>
            <Image src="/images/evento2.jpg" 
              alt="imagen eventos"
              width={350}
              height={250} />
            </div>
          </div>
        </div>
        <section>
        </section>
    </main>
  )
}
