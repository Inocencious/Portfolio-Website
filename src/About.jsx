import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from './assets/pfp.jpeg'
import { faPython, faJava, faJsSquare, faHtml5, faCss3Alt, faReact, faGit } from '@fortawesome/free-brands-svg-icons';


function About() {
    const languages = [
        {icon: faPython },
        {icon: faJava },
        {icon: faJsSquare},
        {icon: faHtml5},
        {icon: faCss3Alt},
        {icon: faReact},
        {icon: faGit},

    ];

    return(
        <div  className="about">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="clip-path">
            <path d="M36.1,-61.9C46.3,-56.6,53.7,-46,62,-34.8C70.3,-23.5,79.5,-11.8,82.6,1.8C85.6,15.3,82.6,30.6,73.1,39.8C63.6,49,47.7,52.1,34.5,60.1C21.2,68.1,10.6,81.1,-1.3,83.4C-13.3,85.7,-26.5,77.3,-40.5,69.7C-54.5,62.1,-69.2,55.3,-73.9,43.8C-78.6,32.3,-73.3,16.2,-73,0.2C-72.7,-15.8,-77.5,-31.7,-73.1,-43.7C-68.8,-55.8,-55.3,-64.1,-41.6,-67.3C-27.8,-70.5,-13.9,-68.6,-0.5,-67.8C12.9,-66.9,25.9,-67.1,36.1,-61.9Z" transform="translate(100 100)" />
            </clipPath>
            <image clip-path="url(#clip-path)" xlinkHref={image} alt="Image" x="-12" y="15" height="225" width="225" class="svg__image">  </image>
            </svg>
            
            <div className="languages">
                <p>Languages</p>
                <ul className="language-list">
                    {languages.map((language, index) => (
                        <li key={index} className="language-item">
                            <FontAwesomeIcon icon={language.icon} className="language-icon" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default About