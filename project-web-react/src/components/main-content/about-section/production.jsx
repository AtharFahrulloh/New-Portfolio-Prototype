import cogwheel from './assets/cogwheel-150.svg'
import './production.css'

function Production() {
    return (
    <>
        <section className="production-section">
            <div className='production-content'>
                <img src={cogwheel} alt='cogwheel'/>
                <h1>Currently in production. . .</h1>
            </div>
        </section>
    </>
    )
}

export default Production;