import './Contact.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact(){
    return(
        <>
            <Header />
            <main className='contact--main'>
                <form className='contact--form' action="">
                    <div>
                        <label htmlFor="lastname">nom : </label>
                        <input type="text" id='lastname' placeholder='NOM' />
                    </div>
                    <div>
                        <label htmlFor="firstname">prenom : </label>
                        <input type="text" id='firstname' placeholder='PRESNOM' />
                    </div>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='ecrivez message ici!'></textarea>
                </form>
            </main>
            <Footer />
        </>
    )
}
export default Contact