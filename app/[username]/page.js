import React from 'react'

const Username = async ({params}) => {
  params = await params
  const username = decodeURIComponent(params.username)

  return (
    <>
       <div className="cover w-full bg-red-50 relative">
         <img className="object-cover w-full h-[350]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/19.gif?token-hash=6x7o-n9lVDpp1Ia3XHPRwySExQ7W8sdygpeA950IwiE%3D&token-time=1767484800" alt="" />
         <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZsF6tdiFNuR1W1wFdOqMEJAKDaeReD4Neg&s" alt="" className="rounded-full" width={150} height={150} />
         </div>
       </div>

       <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">9,719 members . 82 posts . $15,450/release</div>

        <div className="payment flex gap-3 w-[80%] mt-11">
            <div className="suppoters w-1/2 bg-slate-900 rounded-lg text-white p-10">
                <h2 className="text-2xl font-bold my-5">Supporters</h2>
                <ul className="mx-5 text-lg">
                    <li className="my-4 flex gap-2 items-center"><img width={33} src="avatar.gif" alt="user avatar" /><span>Shubham donated <span className='font-bold'>$30</span> with a message "T support you bro. Lots of love"</span></li>
                    <li className="my-4 flex gap-2 items-center"><img width={33} src="avatar.gif" alt="user avatar" /><span>Shubham donated <span className='font-bold'>$30</span> with a message "T support you bro. Lots of love"</span></li>
                    <li className="my-4 flex gap-2 items-center"><img width={33} src="avatar.gif" alt="user avatar" /><span>Shubham donated <span className='font-bold'>$30</span> with a message "T support you bro. Lots of love"</span></li>
                </ul>
            </div>

            <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                <div className="flex gap-2 flex-col">
                    <div>
                    <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder='Enter Name'/></div><input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder='Enter Message' /><input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder='Enter Amount'/>
                            <button type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100">Pay</button>
                </div>

                    <div className="flex gap-2 mt-5"><button className="bg-slate-800 p-3 rounded-lg">Pay $10</button><button className="bg-slate-800 p-3 rounded-lg">Pay $20</button><button className="bg-slate-800 p-3 rounded-lg">Pay $30</button></div>
            </div>
        </div>

       </div>
    </>
  )
}

export default Username
