import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.text_box}>
        <h1>Campo Millary, hospitalidad sureña</h1>
        <p>
          Somos un emprendimiento familiar en el corazón del campo. Ponemos en
          valor la cocina campesina-mapuche con ingredientes frescos de nuestra
          propia huerta,
          <br /> atendido personalmente por nuestros anfitriones.
        </p>
        <a href="" className={styles.boton_reserva}>Reserva aquí</a>
      </div>
      <section>
      <div>
        <section className={styles.cuadrotexto}>
          <div className={styles.aboutus_col}> 
          <Image src="/images/Campo Millary 104.jpg"
          alt="imagen_millary"
          width={500}
          height={400}/>
          </div>
          <div className={styles.textCuadro}>
            <h1 className={styles.title}>Sumérgete en el corazón de la Araucanía</h1>
            <p className={styles.text}>Campo Millary te transportará a un universo mágico, donde podrás disfrutar de una conexión profunda con la naturaleza/ñuke mapu y deleitarte con la exquisita comida gourmet Mapuche. Adéntrate con nosotros en un entorno rodeado de paisajes
              impresionantes y siente la energía de la tierra de la mano de la calidez sureña.</p></div>
        </section>
        <section className={styles.cuadrotexto1}>
          <div className={styles.textCuadro1}>
            <h1 className={styles.title}>Gastronomía auténtica sureña</h1>
            <p className={styles.text}>Descubre una experiencia culinaria única en Campo Millary, donde los sabores legendarios de la gastronomía Mapuche te transportarán a un mundo de tradiciones ancestrales. Sumérgete en un festín para tus sentidos mientras saboreas platos preparados
              con ingredientes frescos y locales, rescatando la esencia natural de la comida Mapuche.</p></div>
          <div className={styles.aboutus_col_1}>
            <Image src="/images/Campo Millary 210.jpg"
          alt="imagen_millary"
          width={400}
          height={300}/>
          </div>
        </section>
        <section className={styles.cuadrotexto2}>
          <div className={styles.aboutus_col_2}>
          <Image src="/images/imagen6.jpg"
          alt="imagen_millary"
          width={500}
          height={400}/>
          </div>
          <div className={styles.textCuadro2}>
            <h1 className={styles.title}>Un refugio en la naturaleza</h1>
            <p className={styles.text}>El domo de Campo Millary es un santuario de tranquilidad y conexión con la “Ñuke Mapu”, madre tierra. Con su diseño y ubicación únicos, te sumergirá en un universo ancestral donde la armonía entre el entorno natural y la comodidad moderna
              se fusionan en perfecto equilibrio. Ven, despierta tus sentidos y conecta con tu paz interior.</p>
          </div></section>
        {/*--- Servicios ---*/}
        <section className={styles.services}>
          <h1> Servicios que ofrecemos </h1>
          <div className={styles.row}>
            <div className={styles.services_col}>
              <h3>DOMO KÜRAM</h3>
              <p>Sumérgete en una experiencia única alojándote en nuestro domo.
Disfruta de la comodidad que ofrecemos, con tinajas calientes y una variedad de
servicios de alimentación. Contamos con calefacción, parrilla y estacionamiento
para mayor comodidad durante tu estancia.</p>
            </div>
            <div className={styles.services_col}>
              <h3>TALLER GASTRONOMICO</h3>
              <p>Descubre los auténticos sabores de la comida tradicional
Mapuche reservando un almuerzo o cena con tus seres queridos. Te invitamos a
probar platos tradicionales preparados con ingredientes frescos y locales, y a
conocer la historia tras estas preparaciones que te transportarán a la esencia
culinaria de nuestra cultura.</p>
            </div>
            <div className={styles.services_col}>
              <h3>TINAJAS</h3>
              <p>Experimenta la relajación y la conexión con la naturaleza en nuestras
tinajas calientes al aire libre. Disfruta de un servicio único mientras te sumerges en
el agua energizante y te deleitas con una experiencia gastronómica inolvidable.</p>
            </div>
          </div>
        </section>
      </div>
      </section>
    </main>
  );
}
