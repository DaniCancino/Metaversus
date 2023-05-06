import cover from '../../assets/cover.png'
import stamp from '../../assets/stamp.png'
import { motion } from 'framer-motion';
import './hero.css'

import { staggerContainer, textVariant, slideIn } from '../../framer';

const Hero = () =>{
    return(
        <div className="Hero">
            <motion.div
                className='content-container'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <div 
                    className="hero-title"
                >
                    <motion.p
                        variants={textVariant(1.1)}
                    >
                        METAVERSE
                    </motion.p>
                    <motion.p
                        variants={textVariant(1.4)}
                    >
                        MADNESS
                    </motion.p>
                </div>
                <motion.div 
                    variants={slideIn('left', 'tween', 0.2, 1.3)}
                    className='img-container'
                >
                    <img src={cover} alt='cover image' className='cover' />
                    <a href='#explore' className='explore-link'>
                        <img src={stamp} alt='stamp' className='stamp' />
                    </a>
                </motion.div>
            </motion.div>
                    <div className='hero-gradient' />
        </div>
    )
}

export default Hero