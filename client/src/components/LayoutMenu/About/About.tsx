import { motion as m } from 'framer-motion';
import { variants } from '../../Test/AnimationPage';
import './About.scss';
import AboutForm from './AboutForm/AboutForm';
import { arrForm } from './AboutForm/aboutInside';

export default function About() {
  return (
    <m.div
      className="aboutSummary"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
    >
      {arrForm.map((form) => (
        <AboutForm form={form} key={form.id} />
      ))}
    </m.div>
  );
}
