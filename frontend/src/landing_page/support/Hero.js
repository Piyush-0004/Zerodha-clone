import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid'id="supportHero">
            <div className='p-1' id="supportWrapper">
                <h5 className='mt-5 fs-4'>Support Portal</h5>
                <a href="" className='mt-5 fs-5'>Track tickets</a>
            </div>
            <div className='row p-3 mx-5'>
                <div className='col-6 p-5 mb-3'>
                    <h3 className='fs-4'>Search for an answer or browse help topics to create a ticket</h3><br/>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected...'/><br/><br></br>
                    <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Intraday margins</a><br/>
                    <a href="">Kite user manual</a>
                </div>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h3 className='fs-4'>Featured</h3>
                    <ol>
                        <li><a href=""> Latest Intraday leverages and Square-off timings</a></li><p></p>
                        <li> <a href=""> Rights Entitlements listing in June 2025</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;