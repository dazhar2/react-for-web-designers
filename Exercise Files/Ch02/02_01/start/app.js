(function() {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      var sizes = window.Inventory.allSizes;

      return props.sizes.map(function(val) {
        return (
          <option value={val} key={val}>
            {val}
          </option>
        );
      });
    }

    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select defaultValue={props.size} name="sizeOptions" id="size-options">
          {sizeOptions()}
        </select>
      </div>
    );
  }
  
  function ColorSelector(props) {
    function colorOptions() {
      return props.colors.map(function(val) {
        return (
          <option value={val} key={val}>
            {val}
          </option>
        );
      });
    }

    return (
      <div className="field-group">
        <label htmlFor="color-options">Color:</label>
        <select defaultValue={props.color} name="colorOptions" id="color-options">
          {colorOptions()}
        </select>
      </div>
    );
  }

  function ProductImage(props) {
    return  <img src={`../../../assets/${props.color}.jpg`} alt="Product Image" />;
  }

 var ProductCustomizer = createReactClass({
    getInitialState: function() {
      var sizes = window.Inventory.allSizes,
        colors = window.Inventory.allColors;

      return {
        color: "green",
        colors: colors,
        size: 9,
        sizes: sizes
      };
    },

    render: function() {
      return (
        <div className="customizer">
          <div className="product-image">
            <ProductImage color={this.state.color} />
          </div>
          <div className="selectors">
            <SizeSelector size={this.state.size} sizes={this.state.sizes} />
            <ColorSelector color={this.state.color} colors={this.state.colors} />
          </div>
        </div>
      );
    }
  });
 

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
