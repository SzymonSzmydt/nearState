import './App.css';
import { Outlet } from "react-router-dom";
import { Header } from './components/ui/Header/Header';

function App() {
  return (
    <main className="App">
      <Header/>
      <Outlet />
    </main>
  );
}

export default App;
