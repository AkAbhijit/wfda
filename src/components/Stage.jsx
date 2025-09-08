import React, { useState } from "react";

const STANDS = ["VIP", "FanPit", "General"];

export default function Stage() {
  const [price, setPrice] = useState(null);

  // H/w todo arrange the semicolonm properly
  //   if (price === 1999) return <Stands title="General" />;
  //   else return <Stands title="Fanpit" />;

  return (
    <div>
      <div>
        {/* areas heere */}
        {/* {} */}

        {price === 1999 ? (
          <Stands title="General" />
        ) : (
          //   STANDS.map((s) => {
          //     return <Stage title={s} />;
          //   })
          <></>
        )}

        <h3>Stands</h3>
      </div>

      <div style={{ display: "flex" }}>
        {/* button heere */}
        <h3>Filter by Stands</h3>
        <StandPriceBtn price={1999} setPrice={setPrice} />
        <StandPriceBtn price={2499} setPrice={setPrice} />
        {/* h/w */}
        <StandPriceBtn price={3499} />
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
