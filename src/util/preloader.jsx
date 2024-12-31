
import React from 'react';
import { ScaleLoader} from "react-spinners";
import './style.scss'
import usePreloader from './../hook/usePreloader';
const Preloader = () => {
    const { isLoading } = usePreloader()
    return isLoading && (
        <div className='P-isLoading G-flex G-flex-column G-justify-center G-align-center'>
            <ScaleLoader size={100} color={'#fff'} loading={isLoading} />
            
        </div>
    );
};

export default Preloader;