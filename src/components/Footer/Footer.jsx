import './Footer.css'
import { motion } from 'framer-motion'
import { footerVariants } from '../../framer'
import headset from '../../assets/headset.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'



const socials = [
    {
        name: 'twitter',
        img: twitter,
        url: 'https://twitter.com/ziete_77'
    },
    {
        name: 'instagram',
        img: instagram,
        url:'https://www.instagram.com/thecancino/'
    },
    {
        name: 'linkedin',
        img: linkedin,
        url:'https://www.linkedin.com/in/danicancino-dev/'
    }
]

const Footer = () =>{
    return(
        <motion.div 
            className='Footer'
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
        >
            <div className='upper'>
                <h4>
                    Enter the Metaverse
                </h4>
                <button>
                    <img src={headset} alt='headset' />
                    <span>Enter Metaverse</span>
                </button>
            </div>
            <div className='lower'>
                <div className='border'></div>
                <div className='text-container'>
                    <h4>Metaversus</h4>
                    <span>
                        Designed by
                        <a 
                            href='https://danielcancino.vercel.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Daniel Cancino
                        </a>
                    </span>
                    <div className='socials'>
                        {
                            socials.map((el, index) =>(
                                <a 
                                    key ={index}
                                    href={el.url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='socials-link'
                                >
                                    <img src={el.img} alt={el.name} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Footer