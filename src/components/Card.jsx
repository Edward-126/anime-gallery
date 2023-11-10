import cardimg1 from "../images/card-img/ds.png";
import cardimg2 from "../images/card-img/mha.png";

export default function Card(props) {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm ">
        <img
          src={`./src/images/card-img/${props.image}`}
          className="card-img-top"
        />

        {/* <img src={props.image} className="card-img-top" /> */}

        <div className="card-body">
          <h5 className="card-title">{props.name.english}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {props.name.japanese}
          </h6>
          <p className="card-text">{props.description}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>IMDB Ratings : </b>
              {props.ratings.imdb}
            </li>
            <li className="list-group-item">
              <b>Polularity : </b>
              {props.ratings.popularity}
            </li>
            <li className="list-group-item"></li>
          </ul>

          <a href={props.link}>
            <button className="btn btn-primary abc-button">SEE MORE</button>
          </a>
        </div>
      </div>
    </div>
  );
}
