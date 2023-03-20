import Navbar from './navbar';
import Footer from './Footer';

export default function MainContainer({children}) {
  return (
    <>
    <Navbar/>
    <div>
      {children}
    </div>
    <Footer/>
    </>
  )
}