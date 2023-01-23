import About from './About/About';
import PreFooter from './PreFooter/PreFooter';
import FeedBack from './Feedback/FeedBack';
import './LayoutMenu.scss';
import Footer from './Footer/Footer';
import AnimationPage from '../Test/AnimationPage';

export default function LayoutMenu() {
  return (
    <AnimationPage>
      <About />
      <FeedBack />
      <PreFooter />
      <Footer />
    </AnimationPage>
  );
}
