import { FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import Modal from "./contactModal";
function ContactCard() {
  return (
    <div className="text-center">
      <ul className="flex flex-col gap-4 items-center">
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500 dark:text-gray-400 text-xl" />
          <a
            href="mailto:andreas.kruger.joburg"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            andreas@kruger.joburg
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaPhone className="text-gray-500 dark:text-gray-400 text-xl" />
          Not so fast, how about this: send me an email and I will have my
          people call your people.
        </li>
        <li className="flex items-center gap-2">
          <FaGlobe className="text-gray-500 dark:text-gray-400 text-xl" />
          <Modal />
        </li>
      </ul>
    </div>
  );
}

export default ContactCard;
