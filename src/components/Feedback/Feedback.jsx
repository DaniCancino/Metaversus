import './Feedback.css'
import planet09 from '../../assets/planet-09.png'
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../../framer';

const Feedback = () =>{
    return(
        <motion.div 
            className='Feedback'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <div className='feedback-gradient' />
            <motion.div 
                className='container'
                variants={fadeIn('right', 'tween', 0.2, 1)}
            >
                <div className='text-container'>
                    <h2>Samantha</h2>
                    <p className='founder'>Founder Metaversus</p>
                    <p className='test'>“With the development of today&lsquo;s technology, metaverse is very useful for today&lsquo;s work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
                </div>
            </motion.div>
            <motion.div 
                className='image-container'
                variants={fadeIn('left', 'tween', 0.2, 1)}
            >
                <img src={planet09} alt='planet 9' />
            </motion.div>
        </motion.div>
    )
}

export default Feedback