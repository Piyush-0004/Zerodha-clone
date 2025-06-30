import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
         <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.1"}} className='text-muted'>
                        <li><b>Call & trade:</b>  Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                        <li>Digital contract notes will be send by e-mail</li>
                        <li><b>Physical CMR request:</b> First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</li>
                        <li><b>NRI brokerage charges:</b> For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li><b>NRI brokerage charges:</b> For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li><b>Account with debit balance:</b> If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                        <li><b>GST:</b> Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div> 
        </div>       
     );
}

export default Brokerage;