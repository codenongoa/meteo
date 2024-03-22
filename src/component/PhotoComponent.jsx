import { useState, useEffect } from "react";
import axios from "axios";

const PhotoComponent = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
               
                setPhotos(response.data);
            })
            .catch(error => {
            
            });

    }, []);

    return (
        <div className="container">
            <h1 className="text-blue-600">Photos</h1>
            <div className="row">
                {photos.map((photo) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={photo.id}>
                        <div className="card">
                            <img src={photo.thumbnailUrl} alt={photo.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{photo.title}</h5>
                                <p className="card-text">ID: {photo.id}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoComponent;
