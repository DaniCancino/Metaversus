import { useState } from 'react'
import './explore.css'
import { motion } from 'framer-motion'
import { staggerContainer, slideIn } from '../../framer';
import { TypingText, TitleText } from '../customText';
import planet from '../../assets/planet-01.png'
import planet2 from '../../assets/planet-02.png'
import planet3 from '../../assets/planet-03.png'
import planet4 from '../../assets/planet-04.png'
import planet5 from '../../assets/planet-05.png'
import headset from '../../assets/headset.svg'

const elements = [
    {
        id: 1,
        imgURL: planet,
        title: 'The Hogwarts'
    },
    {
        id: 2,
        imgURL: planet2,
        title: 'The Upside Down'
    },
    {
        id: 3,
        imgURL: planet3,
        title: 'Kadirojo Permai'
    },
    {
        id: 4,
        imgURL: planet4,
        title: 'Paradise Island'
    },
    {
        id: 5,
        imgURL: planet5,
        title: 'Hawkins Labs'
    }
]

const Explore = () =>{
    const [active, setActive] = useState(2)


    return(
        <motion.div 
            className="Explore"
            id='explore'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <TypingText title="| The World" />
            
            <TitleText title='Choose the world you want to explore'/>
            <div className='image-explorer-container'>
                {
                    elements.map((el, index) => 
                    <motion.div 
                        className= {active === el.id ? 'active' : 'image-container'}
                        key={el.id}
                        variants={slideIn('right', 'tween', index * 0.2 , 1.3)}
                        onClick={() => setActive(el.id)}
                    >
                        <img src={el.imgURL} alt={el.title} />
                        <div className='info-container'>
                            <div className='headset-container'>
                                <img src={headset} alt= 'headset' className='headset'/>
                            </div>
                            <p>ENTER METAVERSE</p>
                            <h3 className='title'>{el.title}</h3>
                        </div>
                    </motion.div>)
                }
            </div>
        </motion.div>
    )
}

export default Explore