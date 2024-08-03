import '../../../App.css'
import Imgae1 from '../../../assets/place1.png'
function Comp1() {
    return ( 
        <>
        <div style={{marginTop:''}} className="text-light p-5">
        <h1 className=" PT_serif">Building Bridges to Career Success </h1>
        <p className=' PT_Sans'>Your Success, Our Commitment</p>
        <img className='mt-4 comp1_image'  src={Imgae1} />
        </div>
        </>
     );
}

export default Comp1;