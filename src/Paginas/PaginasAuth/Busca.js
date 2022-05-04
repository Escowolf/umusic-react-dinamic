import React, { useState } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import axios from 'axios';
import defaultImage from '../../assets/default-image.jpg';

export default function Search() {
const [playlists, setPlaylists] = useState([]);

async function load(value) {
    const response = await axios.get(`http://localhost:4000/musicas/${value}`
    );
    
    setPlaylists(response.data.playlists.items);
}
const delayedSearch = debounce((value) => {
    load(value);
}, 1000);

return (
    <div id="search" className="container">
        <FiSearch size="1.5em" className="icon" />
        <input
            type="text"
            className="search-input"
            onChange={(e) => delayedSearch(e.target.value)}
            placeholder="Busque artistas, músicas ou podcasts"
        />
        <div className="search-results">
            {playlists.length !== 0 && (
                <div className="playlists">
                    <h2>Playlists</h2>
                    <div className="grid-template">
                        {playlists.map((data) => (
                            <div className="album-info" key={data.id}>
                                <Link to={`/playlist/id=${data.id}`}>
                                    <div
                                        className="album-cover cover"
                                        style={{
                                            backgroundImage: `url(${
                                                data.images.length === 0
                                                    ? defaultImage
                                                    : data.images[0].url
                                            })`,
                                        }}
                                    />
                                    <span className="album-name">
                                        {data.name}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
);
}