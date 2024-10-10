import { useState } from "react";
import reviews from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    } 
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevRev = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextRev = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <main>
      <article>
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{job}</p>
          <p>{text}</p>
        </div>
        <button onClick={prevRev}>Previous</button>
        <button onClick={nextRev}>Next</button>
      </article>
    </main>
  );
};

export default App;
