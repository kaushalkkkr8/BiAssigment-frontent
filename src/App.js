import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header'
import Content from './components/Content'

export default function App() {
  return (
<>
  <div className='bg-secondary-subtle py-3'>
    <Header/>
    <hr/>
    <Content/>
    
  </div>
</>
   
  )
}
