import './about.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../framer';
import { TypingText } from '../customText';

const About = () =>{
    return(
        <motion.div 
            className='About'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <TypingText title="| About Metaversus" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='paragraph'
            >
                Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down.
            </motion.p>
        </motion.div>
    )
}

export default About;