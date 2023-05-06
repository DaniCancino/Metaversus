import './customComponent.css'
import arrow from '../../assets/arrow.svg'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framer';

export const StartSteps = ({number, text}) =>{
    return(
        <div className="StartStep">
            <div className='numberContainer'>
                <p>
                    {number}
                </p>
            </div>
            <p className='text'>
                {text}
            </p>
        </div>
    )

}


export const NewsComponent = ({title, text, img}) =>{
    return(
        <div className='News'>
            <div className='image-news'>
                <img src={img} alt={title}/>
            </div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}


export const InsightCard = ({img, title, text, index}) =>{
    return(
        <motion.div 
            className='InsightCard'
            variants={fadeIn('up', 'spring', index * 0.5, 1)}
        >
            <img src={img}  alt={title}  className='insigth-img'/>
            <div className='text-container'>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className='arrow-container'>
                <img src={arrow} alt='arrow' className='arrow'/>
            </div>
        </motion.div>
    )
}