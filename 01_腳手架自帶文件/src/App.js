// import logo from './logo.svg';
// 一切皆模塊、因此圖片也是個模塊

import './App.css';
import Hello from './component/Hello/Hello';
import Welcome from './component/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;
