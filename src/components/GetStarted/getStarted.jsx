import './getStarted.css'
import {motion} from 'framer-motion'
import getStarted from '../../assets/get-started.png'
import {TypingText, TitleText } from '../customText'
import { staggerContainer, fadeIn,planetVariants } from '../../framer';
import { StartSteps } from '../customComponent/customComponent';



const startingFeatures = [
    'Find a world that suits you and you want to enter',
    'Enter the world by reading basmalah to be safe',
    'No need to beat around the bush, just stay on the gas and have fun',
];

const GetStarted = () =>{
    return(
        <motion.div 
            className='GetStarted'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.div 
                className='image-container'
                variants={planetVariants('left')}
            >
                <img src={getStarted} alt='getStared image' />
            </motion.div>
            <motion.div 
                className='text-container'
                variants={fadeIn('left', 'tween', 0.2, 1)}
            >
                <TypingText title='| How Metaverus Works' />
                <TitleText title='Get started with just a few clicks' />

                <div className='features'>
                    {
                        startingFeatures.map((el, index) =>(
                            // <p key={el}>{`${index < 10 ? '0' : ''} ${index + 1}`}</p>
                            <StartSteps 
                                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                                text={el}
                                key={index}
                            />
                        ))
                    }
                </div>

            </motion.div>

        </motion.div>
    )
}

export default GetStarted;