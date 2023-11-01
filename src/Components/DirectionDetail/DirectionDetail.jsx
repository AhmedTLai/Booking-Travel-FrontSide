import { useParams } from "react-router-dom"
import cards from '../../../public/data/cards.json'
import Comments from "./Comments"
import './DirectionDetail.css'
import BookingForm from '../BookingForm/BookingFrom'

const DirectionDetail = () => {

    const {id} = useParams()
    const data = cards.find(val=> val.id == id)
    

  return (
    <div className="container py-5 d-flex gap-3">
        <div className="innerContainer">
        <div className="w-100 me-auto mb-4 ">
        <img src={data?.img} alt="pic" className="rounded-3 w-100 objectFitC" />
        </div>

        <div className="border rounded-3 py-4 px-4">
            <h3 className="mb-4">{data?.directionName}</h3>
            <div className="d-flex justify-content-between flex-wrap w-50">
            <p ><i className="fa-solid fa-star mainTextColor "></i> {data?.rate}(2)</p>
            <p><i className="fa-solid fa-user border rounded-circle py-1 px-1 border-dark"></i> SomeWhere</p>
            </div>
            <div className="d-flex justify-content-between w-100 py-3 mb-3 gap-2 flex-wrap" style={{maxWidth : '100%'}}>
              <p ><i className="fa-solid flex1 fa-location-dot"></i> {data?.countryName}</p>
              <p ><i className="fa-solid flex1 fa-dollar-sign border border-dark rounded-circle w-100 text-center" style={{maxWidth : '17px'}}></i> {data?.price} /per person</p>
              <p ><i className="fa-solid flex1 fa-clock"></i> {data?.klm}</p>
              <p ><i className="fa-solid flex1 fa-user"></i> {data?.perPerson}</p>
            </div>
            <div>
              <h3 className="d-inline-flex mb-3">Description</h3>
              <p className="home-text">{data?.desc}</p>

            </div>
        </div>
        <Comments />
        </div>
        <BookingForm data={data}/>
    </div>
  )
}

export default DirectionDetail