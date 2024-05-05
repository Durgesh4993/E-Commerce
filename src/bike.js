import { Link } from 'react-router-dom';
import Header, { Footer, Product, Sidemenu } from './shop';
const Bike=()=>{
    return(
        <>
        <Header />
            <div className="r2">
                <div className="c1">
                <Sidemenu />

                </div>
                <div className="c2">
                    <Product price="900000" pic={require('./images/bike1.jpg')} name="Pulsar" />
                    <Product price="700000" pic={require('./images/bike2.jpg')} name="Hero" />
                    <Product price="800000" pic={require('./images/bike3.jpg')} name="Yamaha" />
                    <Product price="900000" pic={require('./images/bike4.jpg')} name="Pulsar" />
                    <Product price="900000" pic={require('./images/bike5.jpg')} name="Pulsar" />
                    <Product price="900000" pic={require('./images/bike6.jpg')} name="Pulsar" />
                    <Product price="900000" pic={require('./images/bike3.jpg')} name="Pulsar" />
                    <Product price="900000" pic={require('./images/bike1.jpg')} name="Pulsar" />
                    
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Bike