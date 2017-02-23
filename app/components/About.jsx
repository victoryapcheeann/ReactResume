var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className = "text-center" >About</h1>
      <p>Welcome to the Weather app!</p>
      <p>This is a weather application bulid on React</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href = "http://facebook.github.io/react">React</a> -
            This was the Javascript Framework used.
        </li>
        <li>
          <a href = "http://openweathermap.org">Open Weather Map</a> -
            I used Open Weather MAP API to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
}

module.exports = About;
