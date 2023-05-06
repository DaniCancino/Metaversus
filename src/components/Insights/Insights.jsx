import './Insights.css'
import { motion } from "framer-motion"
import {TypingText, TitleText} from '../customText'
import { staggerContainer } from '../../framer'
import planet06 from '../../assets/planet-06.png'
import planet07 from '../../assets/planet-07.png'
import planet08 from '../../assets/planet-08.png'
import { InsightCard } from '../customComponent/customComponent'



const insights = [
    {
      imgUrl: planet06,
      title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
      subtitle:
          'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    },
    {
      imgUrl: planet07,
      title: '7 tips to easily master the madness of the Metaverse',
      subtitle:
          'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    },
    {
      imgUrl: planet08,
      title: 'With one platform you can explore the whole world virtually',
      subtitle:
          'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    },
  ];


const Insights = () =>{
    return(
        <motion.div 
            className="Insights"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <TypingText title='| Insight' />
            <TitleText title= 'Insight about metaverse' />
            <div className='insightCard-container'>
                {
                    insights.map((el, index) => (
                        <InsightCard 
                            img={el.imgUrl} 
                            title={el.title} 
                            text={el.subtitle}
                            key={index}
                            index={index}
                        />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Insights