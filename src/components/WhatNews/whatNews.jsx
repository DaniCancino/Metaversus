import './whatNews.css'
import whatnews from '../../assets/whats-new.png'
import {TitleText, TypingText} from '../customText'
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn, planetVariants } from '../../framer';
import vrpano from '../../assets/vrpano.svg'
import headset from '../../assets/headset.svg'
import { NewsComponent } from '../customComponent/customComponent';



export const newFeatures = [
    {
      imgUrl: vrpano,
      title: 'A new world',
      subtitle:
          'we have the latest update with new world for you to try never mind.',
    },
    {
      imgUrl: headset,
      title: 'More realistic',
      subtitle:
          'In the latest update, your eyes are narrow, making the world more realistic than ever.',
    },
  ];
  

const WhatNews = () =>{
    return(
        <motion.div 
            className='WhatNews'
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.div 
                className='text-container'
                variants={fadeIn('right', 'tween', 0.2, 1)}
            >
                <TypingText title='| Whats New?' />
                <TitleText title='Whats new about Metaversus?' />
                <div className='news'>
                    {
                        newFeatures.map((el,index) => (
                            <NewsComponent 
                                key={index} 
                                title={el.title} 
                                text={el.subtitle} 
                                img={el.imgUrl} 
                            />
                        ))
                    }
                </div>
            </motion.div>
            <motion.div 
                className='image-container'
                variants={planetVariants('right')}
            >
                <img src={whatnews} alt='whatsnew image' />
            </motion.div>
        </motion.div>
    )
}

export default WhatNews