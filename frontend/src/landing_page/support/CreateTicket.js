import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
             <h3 className='fs-5 text-muted'>To create a ticket, select a relevant topic</h3>
        
            <div className='col-4 p-5  mb-2'>
             <h5 className='text-muted'><i class="fa-solid fa-circle-plus"></i>&nbsp;&nbsp;Account Opening</h5><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Resident individual</a><br/>       
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Minor</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Glossary</a><br/>
            </div>

            <div className='col-4 p-5  mb-2'>
             <h5 className='text-muted'><i class="fa-regular fa-user"></i>&nbsp;&nbsp; Your Zerodha Account</h5><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</a><br/>       
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Account modification</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"1.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of securities</a><br/>
            </div>

            <div className='col-4 p-5 mb-2'>
             <h5 className='text-muted'><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;  Kite</h5><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</a><br/>       
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Charts and orders</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Alerts and Nudges</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>General</a><br/>
            </div>

            <div className='col-4 p-5 mb-2'>
             <h5 className='text-muted'><i class="fa-solid fa-wallet"></i>&nbsp;&nbsp; Funds</h5><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Add money</a><br/>       
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Withdraw money</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Add bank accounts</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>eMandates</a><br/>
            </div>

            <div className='col-4 p-5 mb-2'>
             <h5 className='text-muted'><i class="fa-regular fa-circle-user"></i>&nbsp;&nbsp;  Console</h5><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio</a><br/>       
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate actions</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Profile</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Segments</a><br/>
            </div>

            <div className='col-4 p-5 mb-2'>
             <h5 className='text-muted'><i class="fa-solid fa-coins"></i>&nbsp;&nbsp; Coin</h5><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Mutual funds</a><br/>       
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Features on Coin</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Payments and Orders</a><br/>
             <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>General</a><br/>
            </div>

         </div>
      </div> 

    );
}

export default CreateTicket;