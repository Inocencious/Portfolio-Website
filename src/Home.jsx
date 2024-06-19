import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Home() {
    
    return(
        <div className='home'>
            <div className='picture'></div>
            <h1>Hi, I'm Ken Inocencio</h1>
            <p>I'm a passionate Web Developer dedicated to creating dynamic and responsive web applications. With a strong focus on user experience and efficient coding practices, I bring innovative ideas to life and deliver projects that exceed expectations</p>
            <ul>
                <li><a href='#'><FontAwesomeIcon icon={faGithub} size='2x' /></a></li>
                <li><a href='https://www.linkedin.com/in/ken-inocencio/'  target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size='2x' /></a></li>
            </ul>
        </div>
    )
}

export default Home