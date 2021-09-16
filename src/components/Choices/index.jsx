import { useEffect, useState } from 'react';
import axios from 'axios';
import SChoices from './style';

function Choices() {
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/choices/1').then(({ data }) => {
      console.log(data);
      setChoices(data);
    });
  }, []);

  return (
    <SChoices>
      <h2>Choices</h2>
      <ul>
        {choices.map(() => {
          return <li>hello</li>;
        })}
      </ul>
    </SChoices>
  );
}

export default Choices;
