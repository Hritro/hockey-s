import clientQuestionImage from '../assets/images/11.png'
export default function ClientQuestion(){
    return (
        <div className='grid grid-cols-3 mt-10 justify-center gap-20 items-center border-2 p-10 rounded-xl'>
            <div><img src={clientQuestionImage} alt='Client-question'/></div>
            <div className='col-span-2'>
                <div className='text-xl font-bold'>Our Equipment</div>
                <div className='text-xl font-bold'>Hockey Training</div>
                <div className='text-xl font-bold'>Hockey Training</div>
                <div className='text-xl font-bold'>Private Lessons</div>
                <div className='text-xl font-bold'>Booking</div>
                <div className='text-xl font-bold'>Pricing</div>

            </div>
        </div>
        
    )
}