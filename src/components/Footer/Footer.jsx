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
        url: twitter
    },
    {
        name: 'instagram',
        url: instagram
    },
    {
        name: 'linkedin',
        url: linkedin
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
            <div className='footer-gradient' />
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
                                <img src={el.url} alt={el.name} key ={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Footer