var React = require('react');

// Component that displays related results from Amazon API
var AmazonRelatedResultsDisplay = React.createClass({
  render: function() {
    var resultNodes = this.props.data.amazon.map(function(result, index) {
      var attributes = result.ItemAttributes[0];
      // console.log(result.SmallImage.URL)
      
      return (
        <AmazonIndividualResultDisplay name={attributes.Title} />
      );
    });
    return (
      <div className="amazon-related-results-display hidden">
        <h3>Amazon Related Results</h3>
        {resultNodes}
      </div>
    );
  }
});

// Component that displays individual results for Amazon
var AmazonIndividualResultDisplay = React.createClass({
  render: function() {
    return (
      <div className="individual-display">
        <h5 className="product-name">
          {this.props.name}
        </h5>
      </div>
    );
  }
});

module.exports.AmazonRelatedResultsDisplay = AmazonRelatedResultsDisplay;

module.exports.AmazonIndividualResultDisplay = AmazonIndividualResultDisplay;