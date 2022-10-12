import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="w-full px-8 py-4 bg-primary-color dark:bg-dark-mode-1">
      <div className="flex items-center justify-center pt-4 pb-8 dark:text-white">
        <FontAwesomeIcon className="text-xl px-2 cursor-pointer" icon={faFacebook} />
        <FontAwesomeIcon className="text-xl px-2 cursor-pointer" icon={faTwitter} />
        <FontAwesomeIcon className="text-xl px-2 cursor-pointer" icon={faYoutube} />
        <FontAwesomeIcon className="text-xl px-2 cursor-pointer" icon={faGithub} />
        <FontAwesomeIcon className="text-xl px-2 cursor-pointer" icon={faLinkedin} />
      </div>

      <div className="flex items-center justify-center text-center flex-col py-4 dark:text-white">
        <h6 className="font-bold pb-2">Our Work is</h6>
        <p className=" text-sm pb-2">Designed, crafted and built with ReactJS, Tailwind.</p>
      </div>

      <div className="flex items-center justify-center text-center flex-col py-4 dark:text-white">
        <h6 className="font-bold pb-2">About</h6>
        <p className="text-sm pb-2"> 2022 ZETTAI . All Rights Reserved Designed with love HuyyNguyenz</p>
      </div>
    </div>
  );
}

export default Footer;
