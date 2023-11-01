import './ToursHero.css'

const ToursHero = () => {
  return (
    <div className='tourHero'>
<h1 className='text-white d-inline-block position-relative'><div className='position-absolute bg-dark w-100 h-100'style={{zIndex : '0' , filter : 'blur(25px)'}}/> <span style={{zIndex : '1',position:'relative',background : 'transparent'}}>All Tours</span></h1>
    </div>
  )
}

export default ToursHero