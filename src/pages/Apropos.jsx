import './Apropos.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Apropos(){
  
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };

    return(
      <>
        <Header />
        <main className='apropos--main'>
          <article>
            <h2>author : {infos.author}</h2>
            <p>published : {infos.published}</p>
            <p>address : {infos.address}</p>
          </article>
        </main>
        <Footer />  
      </>
    )      
}
export default Apropos