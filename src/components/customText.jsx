import {motion} from 'framer-motion'
import { textContainer,textVariant2 } from '../framer';
import './custom.css'

// eslint-disable-next-line react/prop-types
export const TypingText = ({ title }) => (
    <motion.p
      variants={textContainer}
      className='typing'
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
);


// eslint-disable-next-line react/prop-types
export const TitleText = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className='title-text'
  >
    {title}
  </motion.h2>
);