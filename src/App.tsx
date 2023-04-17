import { useState } from 'react';
import Checkbox from './components/Checkbox';


function App() {

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (newValue: boolean) => {
    setIsChecked(newValue);
  };

  return <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
}

export default App;
