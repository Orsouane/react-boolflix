function SerieCards({ image, nome }) {
  return (
    <div className="card w-75 ">
      <img src={image} className="card-img-top  " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
      </div>
    </div>
  );
}

export default SerieCards;
