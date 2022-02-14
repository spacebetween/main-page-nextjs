import * as moment from 'moment';

export const timePosted = (date) => {
    
    const datePosted = moment(date, moment.ISO_8601);

    let timePeriod = datePosted.fromNow();

    timePeriod = timePeriod.indexOf('hour') >= 0 ? 'today' : timePeriod;
    timePeriod = timePeriod.indexOf('a day ago') >= 0 ? 'yesterday' : timePeriod;
    const weeks = moment().diff(date, 'weeks');
    if (weeks !== 0) {
        timePeriod = weeks === 1 ? weeks + ' week ago' : weeks + ' weeks ago';
    }

   return timePeriod;
}

export const checkIfNew = date => {
    const datePosted = moment(date, moment.ISO_8601);
    if (moment(new Date()).diff(datePosted, 'days') <= 3) {
       return true
    } else return false

}

export const checkType = type => {
    if (type === "328") return 'Permanent'
    if (type === "329") return 'Temporary'
    if (type === "330") return 'Contract'
    else return '-'
}

export const determineSalary = (salaryFrom, salaryTo, salaryExtra, salaryType, salary) => {
        let salaryText;

        if (salary && salary !== "Not Specified") {
            salaryText = salary + ' per ' + salaryType
        } else {
            salaryText = salaryFrom + ' - ' + salaryTo + ' per ' + salaryType
        }
        if (salaryExtra) {
            salaryText = salaryText + " " + salaryExtra
        }

        if (salaryFrom === salaryTo) {
            salaryText = salaryFrom + ' per ' + salaryType
        }

        if (salaryFrom === 0 && salaryTo === 0 && salary === "Not Specified" && salaryExtra) {
            salaryText = salaryExtra
        }

        if (salaryFrom === 0 && salaryTo === 0 && salary === "Not Specified" && !salaryExtra) {
            return "Not Specified"
        }

        return salaryText.replace(/GBP/g, "£")
}

export const setCompanyLogo = (websiteID) => {
    //ABSOLUTE
    if (websiteID === "2VEJf7b46ppZcuknn2f2qr") {
      return (
        <img
          className="brandLogo_logo lozad"
          src="https://hrgo-image-cache.spacebetween.co.uk/media/7162/absolutereed.png?format=webp"
          data-loaded="true"
        />
      );
    }
    //RCH
    if (websiteID === "rch")
     return ( <img
        className="brandLogo_logo lozad"
        src="https://hrgo-image-cache.spacebetween.co.uk/media/6909/rhl.png?format=webp"
        data-loaded="true"
      />)
    //HRGO
    return (
    <img
      className="brandLogo_logo lozad"
      src="https://hrgo-image-cache.spacebetween.co.uk/media/6911/hrgo.png?format=webp"
      data-loaded="true"
    />)
  };
  