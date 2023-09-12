function Hero(props) {
  // console.log(props);
  return (
    <div className="hero">
      <img className="heroImg" src={props.imageUrl} />
      <div className="disc">
        <div>
          <span className="location">{props.location}</span>
          <a className="googleMapsUrl" href="#">
            View on Google Maps
          </a>
        </div>
        <h3 className="title">{props.title}</h3>
        <p className="startDate">
          {props.startDate} - {props.endDate}
        </p>
        <p className=" description">{props.description}</p>
      </div>
    </div>
  );
}
export default Hero;
