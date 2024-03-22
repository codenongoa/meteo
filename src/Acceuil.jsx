import { Link } from "react-router-dom";

const Acceuil = () => {
  return (
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item"><Link to="/photo" class="nav-link active" href="#">Photo</Link></li>
        <li class="nav-item"><Link to="/todo" class="nav-link" href="#">Todo</Link>
        </li><li class="nav-item"><a class="nav-link" href="#">Link</a></li>
      </ul>
    </div>
  );
}

export default Acceuil;
