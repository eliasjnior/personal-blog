import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Links = () => {
  return (
    <ul className="flex gap-6 mt-8 items-center justify-center">
      <li className="flex items-center">
        <CiLocationOn size={40} /> Bahia, Brazil
      </li>
      <li className="flex items-center">
        <AiOutlineMail size={30} />
        <a className="ml-2" href="mailto:me@eliasjr.dev">
          me@eliasjr.dev
        </a>
      </li>
      <li className="flex items-center">
        <AiOutlineLinkedin size={30} />
        <a
          className="ml-2"
          href="https://linkedin.com/in/eliasjnior"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
      <li className="flex items-center">
        <AiOutlineGithub size={30} />
        <a
          className="ml-2"
          href="https://github.com/eliasjnior"
          target="_blank"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
};

export default Links;
