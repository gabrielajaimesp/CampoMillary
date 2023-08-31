import Image from 'next/image';
import styles from './nosotros.module.css'

export default function Nosotros() {
  return (
    <main className={styles.main}>
      <section className={styles.about_us}>
        <br></br>
  <h1 className={styles.titulo1}>Campo Millary</h1>
  <br></br>
  <div className={styles.row}>
    <br />
    <p>Somos Juan Quiñeman, Grace Correa y Margarita Milla, una familia apasionada que busca ofrecer una experiencia única que
      combine la belleza de la naturaleza, el patrimonio cultural Mapuche y la gastronomía auténtica. Buscamos ser un refugio
      acogedor en la Araucanía, donde los visitantes puedan sumergirse en un entorno mágico y brindar una experiencia
      inolvidable.
      <br /><br />
      Creamos un espacio donde convergen la calidez sureña y la energía de la tierra, con el objetivo de ofrecer una
      experiencia auténtica y enriquecedora. Nos apasiona transmitir nuestras raíces ancestrales a través de la gastronomía, preparando recetas
      tradicionales con ingredientes frescos y locales, rescatando y resaltando los sabores auténticos de la comida
      tradicional Mapuche.

    </p>
    <div className={styles.imagen1}>
      <Image src="/images/Campo Millary 104.jpg"
      alt="imagen_millary"
          width={500}
          height={400}/>
    </div>
  </div>
  <section className={styles.nuestrahistoria}>
    <h1>Nuestra Historia</h1>
    <br/>
    <p>Campo Millary nació a fines del 2021, a raíz de idea gestada en 2019 durante la pandemia, como una respuesta ante las necesidades de los turistas, los cuáles
      buscan una experiencia con enriquecimiento cultural y una conexión con la naturaleza.
      <br /> <br />
      Con esto en mente, Campo Millary surge con la idea de crear un refugio en la Araucanía y transmitir la cultura
      Mapuche con un enfoque de triple impacto: trabajando con productos de emprendedores locales, produciendo empleos
      para la comunidad y siendo responsables con nuestro entorno y medioambiente.
      <br /> <br />
      De esta manera, nos enfocamos en un modelo de negocio ecológico, sustentable y local situado en la tierra que nos
      heredó Carlos Mario Quiñeman, padre de Juan Quiñeman, realzando un espacio con esencia ancestral, mezclado con los
      conocimientos y saberes de Margarita Milla, Juan Quiñeman y Grace Correa.
      <br /> <br />
    </p>
  </section>
  <div className={styles.imagen_container}>
    <div className={styles.imagen2}>
      <Image src="/images/Campo Millary 392.jpg" 
      alt="imagen_millary"
      width={500}
      height={400}/>
    </div>
    <div className={styles.imagen3}>
      <Image src="/images/Campo Millary 11 (1).jpg" 
      alt="imagen_millary"
      width={500}
      height={400}/>
    </div>
    <div className={styles.imagen6}>
    <Image src="/images/Campo Millary 401.jpg" 
      alt="imagen_millary"
      width={500}
      height={400}/>
    </div>
  </div>
  <div className={styles.mision}>
    <h3>Misión</h3>
    <p>
      Nuestra misión en Campo Millary es brindar una experiencia única que conecte a nuestros visitantes con la naturaleza,
      la cultura y la gastronomía Mapuche de manera auténtica y sustentable. Nos esforzamos por ofrecer un refugio
      acogedor donde cada detalle refleje el amor por la tierra y la preservación de nuestras tradiciones ancestrales.
    </p>
  </div>
  <br /> <br />
  <div className={styles.imagen_container}>
    <div className={styles.imagen7}>
    <Image src="/images/Campo Millary 210.jpg" 
      alt="imagen_millary"
      width={500}
      height={400}/>
    </div>
    <div className={styles.imagen8}>
      <Image src="/images/Campo Millary 290.jpg" 
      alt="imagen_millary"
      width={500}
      height={400}/>
    </div>
    <div className={styles.imagen5}>
      <Image src="/images/imagen8.jpg" 
      alt="imagen_millary"
      width={500}
      height={400}/>
    </div>
  </div>
  <div className={styles.vision}>
    <h3> Visión</h3>
    <p>
      Nuestra visión es ser reconocidos como un destino de referencia en la Araucanía, donde los visitantes puedan sumergirse
      en una experiencia enriquecedora que resalte la belleza de la naturaleza y promueva la visibilización de la cultura
      Mapuche. Aspiramos a ser un modelo de sustentabilidad y transmitir nuestro legado cultural de manera respetuosa,
      generando un impacto positivo en nuestras comunidades locales y el entorno natural.
    </p>
    <br /> <br />
    <div className={styles.imagen_container}>
      <div className={styles.imagen2}>
        <Image src="/images/Campo Millary 95.jpg" 
        alt="imagen_millary"
      width={500}
      height={400}/>
      </div>
      <div className={styles.imagen2}>
        <Image src="/images/Campo Millary 140.jpg"
        alt="imagen_millary"
        width={500}
        height={400}/>
      </div>
      <div className={styles.imagen2}>
        <Image src="/images/Campo Millary 87.jpg"
        alt="imagen_millary"
        width={500}
        height={400}/>
      </div>
    </div>
  </div>
  <div className={styles.valores}>
    <h3>Valores</h3>
    <p>
      1. Sustentabilidad: Nos comprometemos a operar de manera responsable y sostenible, preservando el medio ambiente, 
      promoviendo la reforestación y utilizando prácticas eco-amigables en todas nuestras actividades.
      <br /> <br />
      2. Autenticidad: Valoramos y respetamos la riqueza cultural de la comunidad Mapuche, buscando transmitir su esencia a
      través de experiencias genuinas y la preservación de las tradiciones culinarias y artísticas.
      <br /> <br />
      3. Hospitalidad: Nos esforzamos por brindar un servicio cálido y acogedor a nuestros visitantes, creando un ambiente
      familiar y seguro para que su estadía sea cómoda y memorable.
      <br /> <br />
      4. Conexión con la naturaleza: Promovemos la apreciación y el respeto por la belleza natural del walmapu, invitando a
      nuestros huéspedes a sumergirse en entornos naturales, participar en actividades al aire libre y disfrutar de la
      tranquilidad que ofrece campo Millary.
      <br /> <br />
      5. Colaboración comunitaria: Valoramos nuestras relaciones con las comunidades locales, colaborando activamente con ellas y
      fomentando un intercambio cultural enriquecedor, generando beneficios económicos y sociales para todos los involucrados.
    </p>
  </div>
</section>

    </main>
  )
}
