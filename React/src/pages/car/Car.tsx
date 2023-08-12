import './Car.css';

const Car = () => {
    return (
        <div style={{ backgroundColor: 'yellow', height: '100vh' }}>
            <div className='car'>
                <img src='car1.jpg' alt='car' />
            </div>
            <div className='ambulance'>
                <img src='ambulance.jpg' alt='car' />
            </div>
            <div className='truck'>
                <div className='wheel-outer'>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="circle">
                <img src="car1.jpg" alt="Rotating Image" height={50} width={50}/>
            </div>
        </div>
    )
}

export default Car
