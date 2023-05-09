import './World.css'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../../framer';
import {TitleText, TypingText} from '../customText'
import map from '../../assets/map.png'
import people1 from '../../assets/people-01.png'
import people2 from '../../assets/people-02.png'
import people3 from '../../assets/people-03.png'


const World = () =>{
    return(
        <motion.div 
            className='World'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <TypingText title='| Peolple on the World' />
            <TitleText 
                title='Track friends around you and invite them to play together in the same world' 
            />

            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='map-container'
            >
                <img src={map} alt='map' className='map'/>

                <motion.div 
                    className='people-one'
                    variants={fadeIn('down', 'spring', 2.5, 1)}
                >
                    <img src={people1} alt='people1' />
                </motion.div>

                <motion.div 
                    className='people-two'
                    variants={fadeIn('down', 'spring', 2, 1)}
                >
                    <img src={people2} alt='people2' />
                </motion.div>

                <motion.div 
                    className='people-three'
                    variants={fadeIn('down', 'spring', 1, 1)}
                >
                    <img src={people3} alt='people3' />
                </motion.div>
                
            </motion.div>

        </motion.div>
    )
}

export default World;