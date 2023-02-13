import './AboutForm.scss';
import { About } from './aboutInside';

export default function AboutForm({ form }: { form: About }) {
  return (
    <div className="about">
      <div className="aboutHeader">{form.title}</div>
      <div className="aboutText">{form.text}</div>
    </div>
  );
}
