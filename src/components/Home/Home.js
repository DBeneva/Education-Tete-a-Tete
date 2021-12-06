import './Home.css';

export default function Home() {
    return (
        <>
        <div className="home-image">
            <img src="/images/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg" alt="Books" />
        </div>
        <div className="home-content">
            <h1>Welcome to Education Tête-<span>à</span>-Tête!</h1>
            <p>The best private lessons from the comfort of your own home.</p>
            <p>Our qualified and experienced teachers are a click away!</p>
        </div>
        <button className="home-btn">PICK <span>A</span> SUBJECT</button>
        </>
    );
};