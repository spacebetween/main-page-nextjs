import React, { Fragment, useState } from "react";
import AutoComplete  from 'react-google-autocomplete';

const Inputs = ({handleKeyword, handleLocation, keyword }) => {

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
          value={keyword}
          onChange={handleKeyword}
        />
      </div>
      <div className="searchForm_textField col-md-5">
        <label className="label" htmlFor="JobLocation">
          Where?
        </label>
        <AutoComplete
        className="input"
        apiKey="AIzaSyDYs_dbyLHice28mYB3KU2Vx7xGZZeAYic"
        onPlaceSelected={(place) => handleLocation(place)}
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
          borderBottomColor: '#000',
        }}
      />
        <div className="locateMe">
          <i className="location"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default Inputs;
