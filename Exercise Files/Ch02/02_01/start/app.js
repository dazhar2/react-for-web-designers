(function() {
  "use strict";

  function SizeSelector(props) {
    function sizeOptions() {
      var sizes = window.Inventory.allSizes;

      return sizes.map(function(val) {
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

  function ProductImage(props) {
    return  <img src={`../../../assets/${props.color}.jpg`} alt="Product Image" />;
  }

  function ProductCustomizer(props) {
    return (
      <div className="customizer">
        <div className="product-image">
         <ProductImage color="green" />
        </div>
        <div className="selectors">
          <SizeSelector size={9} />
        </div>
      </div>
    );
  }

  ReactDOM.render(<ProductCustomizer />, document.getElementById("react-root"));
})();
