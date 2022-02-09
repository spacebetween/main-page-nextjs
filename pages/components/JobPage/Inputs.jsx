import React, { Fragment, useState } from "react";
import AutoComplete  from 'react-google-autocomplete';

const Inputs = () => {
  const [input, setInput] = useState({
    job: "",
    location: "",
  });

  const handleInput = (type, event) => {
    if (type === "job") {
      setInput({ ...input, job: event.target.value });
    }
    if (type === "location") {
      setInput({ ...input, location: event.target.value });
    }
  };

  return (
    <Fragment>
      <div className="searchForm_textField col-md-5">
        <label className="label" htmlFor="Keywords">
          What Job?
        </label>
        <input
          autoComplete="off"
          className="input"
          id="Keywords"
          name="Keywords"
          placeholder="Job Title, Keywords"
          type="text"
          value={input.job}
          onChange={(e) => handleInput("job", e)}
        />
      </div>
      <div className="searchForm_textField col-md-5">
        <label className="label" htmlFor="JobLocation">
          Where?
        </label>
        <AutoComplete
        apiKey="AIzaSyDYs_dbyLHice28mYB3KU2Vx7xGZZeAYic"
        onPlaceSelected={(place) => console.log(place)}
        options={{
          types: ["(regions)"],
          componentRestrictions: { country: "uk" },
        }}
        style={{
          borderRadius: '0',
          border: '0',
          borderBottom: '1px solid #979797',
          background: 'transparent',
          fontSize: '34px',
          marginLeft: '0',
          paddingLeft: '0',
          width: '100%',
          outline: 'none',
          borderBottomColor: '#000'
        }}
      />
        <input
          data-val="true"
          data-val-number="The field Latitude must be a number."
          id="Latitude"
          name="Latitude"
          type="hidden"
          defaultValue=""
        />
        <input
          data-val="true"
          data-val-number="The field Longitude must be a number."
          id="Longitude"
          name="Longitude"
          type="hidden"
          defaultValue=""
        />
        <input
          id="ExcludedKeywords"
          name="ExcludedKeywords"
          type="hidden"
          defaultValue=""
        />
        <input
          data-val="true"
          data-val-required="The ExcludeNationwide field is required."
          id="ExcludeNationwide"
          name="ExcludeNationwide"
          type="hidden"
          value="False"
        />
        <div className="locateMe">
          <i className="location"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default Inputs;
