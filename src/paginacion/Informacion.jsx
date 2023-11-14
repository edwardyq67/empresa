import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInformacion } from '../store/slices/informacion.slice';
import './informacion.css'
const Informacion = () => {
    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(getInformacion())
    },[])
    return (
        <div className='informacion'>
            <div className="contenedorInformacion">
                 <div className="contenedorI">
                    <div className="conte">
                            <h2>Lorem, ipsum. <span>Lorem, ipsum dolor.</span></h2>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.,
                 Lorem ipsum dolor sit.<span>Lorem ipsum dolor sit</span>  amet consectetur., <span> Lorem ipsum, dolor sit amet consectetur</span> adipisicing elit. Non ut officiis accusamus 
                harum debitis omnis sunt dolorem exercitationem itaque deleniti?</p>
        
                    </div>
                </div>
            <img src="https://6552affcc712314009e27475--vocal-taiyaki-4f89c5.netlify.app/assets/pexelsfoto.jpg" alt="" />
            
            </div>
           
        </div>
    );
};

export default Informacion;