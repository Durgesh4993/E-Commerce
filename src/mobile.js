import {Link} from 'react-router-dom';
import Header, { Footer, Product, Sidemenu } from './shop';
const Mobile=()=>{
    return(
        <>
            <Header />
            <div className="r2">
                <div className="c1">
                <Sidemenu />
                </div>
                <div className="c2">
                <Product price="4000" pic={require('./images/mob1.jpg')} name="Samsung" />
                <Product price="700000" pic={require('./images/mob2.jpg')} name="Hero" />
                <Product price="800000" pic={require('./images/mbo3.jpg')} name="Yamaha" />
                <Product price="4000" pic={require('./images/mob4.jpg')} name="Samsung" />
                <Product price="700000" pic={require('./images/mob5.jpg')} name="Hero" />
                <Product price="800000" pic={require('./images/mob6.jpg')} name="Yamaha" />
                <Product price="800000" pic={require('./images/mbo3.jpg')} name="Yamaha" />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Mobile