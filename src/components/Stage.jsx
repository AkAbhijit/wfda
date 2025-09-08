import React, { useState } from "react";


export default function Stage() {
  const [price, setPrice] = useState(null);
  const STANDS = ["VIP", "FanPit", "General"];

  // H/w todo arrange the semicolonm properly
  // if (price === 1999) { return <Stands title="General" />; }
  // else { <Stands title="Fanpit" />; }

  return (
    <div>
      <div>
        {/* areas heere */}
        {/* {} */}

        {STANDS.map((stand) => (
          <>
            {price === 1999 && stand === "General" ? (<Stands title={stand} />) : null}
            {price === 2499 && stand === "FanPit" ? (<Stands title={stand} />) : null}
            {price === 3499 && stand === "VIP" ? (<Stands title={stand} />) : null}
            {price === null ? (<Stands title={stand} />) : null}
          </>
        ))}

        <h3>Stands</h3>
      </div>

      <div style={{ display: "flex" }}>
        {/* button heere */}
        <h3>Filter by Stands</h3>
        <StandPriceBtn price={1999} setPrice={setPrice} />
        <StandPriceBtn price={2499} setPrice={setPrice} />
        {/* h/w */}
        <StandPriceBtn price={3499} setPrice={setPrice} />
        <button style={{ marginLeft: "10px", height: "20px" }} onClick={() => setPrice(null)}>Reset</button>
      </div>
    </div>
  );
}

function StandPriceBtn({ price, setPrice }) {
  return (
    <div>
      <button onClick={() => setPrice(price)}>{price}</button>
    </div>
  );
}

function Stands({ title }) {
  return (
    <div style={{ border: "1px solid #efefef", textAlign: "center" }}>
      <h5>{title}</h5>
    </div>
  );
}
