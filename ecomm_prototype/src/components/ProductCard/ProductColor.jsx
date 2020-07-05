import React, {useState} from "react";

function ProductColor(props) {
  const [visible, setVisible] = useState(false);
  const handleColorChange = () => {
    setVisible(prevState => !prevState);
  }
  return (
    <div className="product-color-picker" >
      <span style={{textDecoration: 'none', color: 'white'}}>
        <p onClick={handleColorChange} className="dot" style={{ background: `${props.color}` }}>
          <i className="fa fa-check" style={{opacity: visible ? 1 : 0}}></i>
        </p>
      </span>
    </div>
  );
}

export default ProductColor;
