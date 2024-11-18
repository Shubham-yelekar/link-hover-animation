import './App.css'
import { FaBeer } from 'react-icons/fa';
import LinkHover from './components/LinkHover';

function App() {


  return (
    <main className="h-screen w-full justify-between flex flex-col items-center">
      <div></div>
      <LinkHover/>
      <a className="repo-link" href="https://github.com/Shubham-yelekar/link-hover-animation" target="_blank">repo link ➤</a>
    </main>
  )
}

export default App
