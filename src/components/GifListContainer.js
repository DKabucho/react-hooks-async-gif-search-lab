import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'dogs') => {
    const apiKey = `https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`; 
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          gifs: data.data.map((gif) => gif.images.original.url),
        });
      })
      .catch((error) => console.error('Error fetching gifs:', error));
  };

  handleSearchSubmit = (query) => {
    this.fetchGifs(query);
  };

  render() {
    const { gifs } = this.state;

    return (
      <div>
        <GifSearch onSubmit={this.handleSearchSubmit} />
        <GifList gifs={gifs} />
      </div>
    );
  }
}

export default GifListContainer;
