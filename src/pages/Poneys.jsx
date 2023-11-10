import './Poneys.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import poneys from '../JSoutils/poneylist';

function Poneys(){
  return(
    <>
      <Header />
      <main className='poneys--main'>
        {poneys.map((object)=>{
            return(
                <article className='poneys--poneylist'>
                    <h4>nom : {object.name}</h4>
                    <p>couleur : {object.color}</p>
                    <p>age : {object.age}</p>
                    <p>{object.isMagic ? (
                      <span className='span-poneymaginc'>** ce poney est poney Magic! ** </span>
                    ):(
                      <span> poney normal</span>
                    )}
                    </p>
                </article>
            )
        })}
      </main>
      <Footer />
    </>
    )
}
export default Poneys