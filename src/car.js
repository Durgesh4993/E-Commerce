import { Link } from 'react-router-dom'
import Header, { Footer, Product, Sidemenu } from './shop'
const Car=()=>{
    return(
        <>
            <Header />
            <div className="r2">
                <div className="c1">
                    <Sidemenu />
                </div>
                <div className="c2">
                    <Product price="900000" pic={require('./images/car1.jpg')} name="Maruti" />
                    <Product price="700000" pic={require('./images/car2.png')} name="Hero" />
                    <Product price="800000" pic={require('./images/car3.jpg')} name="Yamaha" />
                    <Product price="900000" pic={require('./images/car4.jpg')} name="Maruti" />
                    <Product price="700000" pic={require('./images/car5.png')} name="Hero" />
                    <Product price="800000" pic={require('./images/car6.jpg')} name="Yamaha" />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Car