import './Contact.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact(){



    function submitBtnClick (e){
        e.preventDefault();
        console.log('hello');
    }

    

    return(
        <>
            <Header />
            <main className='contact--main'>
                <form onSubmit={submitBtnClick} className='contact--form' action="">
                    <div>
                        <label htmlFor="lastname">nom : </label>
                        <input type="text" id='lastname' placeholder='NOM' />
                    </div>
                    <div>
                        <label htmlFor="firstname">prenom : </label>
                        <input type="text" id='firstname' placeholder='PRESNOM' />
                    </div>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='ecrivez message ici!'></textarea>
                    <input type="submit" value="submit" />

                </form>
            </main>
            <Footer />
        </>
    )
}
export default Contact

