import './fan-page.css';
import osanai from './assets/yuki osanai.jpg'

const FanPage = () => {
    return (
        <>
        <section>
        <div className="page-container">
            <h2>Welcome to my Fanpage!</h2>
            <img src={osanai} alt="Osanai Yuki"/>
            <p>This is for decoration only</p>
        </div>
        </section>
        </>
    );
};

export default FanPage;