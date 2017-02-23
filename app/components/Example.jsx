var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className ="text-center">Examples!</h1>
      <p>Here are some example to try out the app!</p>
      <ol>
        <li>
          <Link to = "/?location = Singapore">Singapore, SG</Link>
        </li>
        <li>
          <Link to = "/?location = Malaysia">Malaysia, MY</Link>
        </li>
        <li>
          <Link to = "/?location = China">China, CN</Link>
        </li>
      </ol>
    </div>

  );
}

module.exports = Example;
