import {FcBookmark} from 'react-icons/fc'

const Card = ({title,location,googleMapsUrl,startDate,endDate,description,imageUrl}) =>{
  return(
    <section className="p-20 flex flex-col lg:flex-row lg:space-x-10 items-center">
      <div className="h-72 lg:h-96 mb-5 lg:mb-0 max-w-[20rem]">
        <img src={imageUrl} alt={title} className="rounded-md h-full object-cover max-w-[20rem]" />
      </div>
      <div>
        <div className=" flex items-center space-x-4">
          <div className='flex items-center'>
            <FcBookmark />
            <p className=" uppercase tracking-widest font-medium">{location}</p>
          </div>
          <a href={googleMapsUrl} className="text-sm lg:text-md text-gray">View on Google Maps</a>
        </div>
        <h2 className="text-3xl  mt-5 lg:text-5xl lg:text-left font-bold mb-10">{title}</h2>
        <p className=" font-bold mb-2">{startDate} - {endDate}</p>
        <p className=" lg:w-3/5">{description}</p>
      </div>
    </section>
  )
}

export default Card