import './Accueil.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import poneys from '../JSoutils/poneylist';

function Accueil(){

      const ponyMagic = poneys.filter(poney=>poney.isMagic)
      const last5ponyMagic = ponyMagic.slice(-5)
      last5ponyMagic.forEach((element,ind)=>{
        last5ponyMagic[ind].imgsrc = `/assets/img/pony${ind+1}.png`
      })
      
    return(
        <>
        <Header />
        <main className='accueil--main'>
            <section className='main--banner'>
                <h1>BIENVENUE PONY TALE ADVENTURE !</h1>
            </section>
            <p className='main--lorem'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium et placeat, officia deserunt quod hic reiciendis. Ipsum sit dolores quam deleniti dicta cupiditate fugit labore ea. Ut quia alias libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ut minima voluptatibus rerum laborum libero omnis architecto eius aspernatur earum deleniti, tenetur, ad, iure deserunt odit voluptate laudantium. Eos, ab!</p>

            <section className='accueil--poneylist'>
                {last5ponyMagic.map((object)=>{
                    return(
                        <article className='accueil--poneylist--ponybox'>
                            <img src={object.imgsrc} alt="ponyimgs" />
                            <h4>nom : {object.name}</h4>
                            <p>couleur : {object.color}</p>
                            <p>age : {object.age}</p>
                        </article>
                    )
                })}
            </section>
        </main>
        <Footer />
        </>
        )
}
export default Accueil