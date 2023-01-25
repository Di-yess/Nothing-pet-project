import AnimationPage from '../Test/AnimationPage';
import About from './About/About';
import FeedBack from './Feedback/FeedBack';
import './LayoutMenu.scss';
import PreFooter from './PreFooter/PreFooter';

export default function LayoutMenu() {
  return (
    <AnimationPage>
      <About />
      <FeedBack />
      <PreFooter />
    </AnimationPage>
  );
}
