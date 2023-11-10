import './PoneyTalk.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PoneyTalk(){

    const talkList = ['hello','bonjour','bonjorno','bueno dias']
    
    const clickBtn = () => {    

        let greeting = talkList[(Math.random()*(talkList.length-1)).toFixed()]
        console.log(greeting);
    }

    return(
        <>
            <Header />
            <main className='poneyTalk--main'>

                <button onClick={clickBtn}>click me</button>
                <p>click bouton!</p>

            </main>
            <Footer />
        </>
    )

}

export default PoneyTalk