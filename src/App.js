import { BrowserRouter as Router, Route } from 'react-router-dom';
// Birthday Project
// import Birthday from './BirthdayReminder/Birthday'

// Tours Project
// import ToursContainer from './Tours/ToursContainer'

// Reviews Project
// import ReviewsContainer from "./Reviews/ReviewsContainer";

// Accordion Project
// import Accordion from "./Accordion/Accordion";

// Food Menu
// import FoodContainer from "./FoodMenu/FoodContainer";

// Tabs
// import TabsContainer from "./Tabs/TabsContainer";

// Sliders
// import Slider from "./Slider/Slider";
// import SliderAlt from "./Slider/SliderAlt";
// import SliderAltSecond from "./Slider/SliderAltSecond";
import SliderAltThird from './Slider/SliderAltThird'
import SlideChild from './Slider/SlideChild';

// Lorem Ipsum Generator
// import LoremContainer from './LoremGenerator/LoremContainer'


function App() {
  return (
    <div className="App">
      {/* Birthday Project */}
      {/* <Birthday/> */}

      {/* Tours Project */}
      {/* <ToursContainer /> */}

      {/* Reviews Project */}
      {/* <ReviewsContainer /> */}

      {/* Accordion Project */}
      {/* <Accordion /> */}

      {/* Food Menu */}
      {/* <FoodContainer /> */}

      {/* Tabs */}
      {/* <TabsContainer /> */}

      {/* Sliders*/}
      {/* <Slider /> */}
      {/* <SliderAlt /> */}
      {/* <SliderAltSecond /> */}
      <Router>
        <SliderAltThird/>
      </Router>       
      <SliderAltThird/>
      
      {/* Lorem Ipsum Generator */}
      {/* <LoremContainer /> */}

    </div>
  );
}

export default App;
