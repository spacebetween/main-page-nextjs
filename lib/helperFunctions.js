import * as moment from "moment";
import Link from "next/link";

export const timePosted = (date) => {
  const datePosted = moment(date, moment.ISO_8601);

  let timePeriod = datePosted.fromNow();

  timePeriod = timePeriod.indexOf("hour") >= 0 ? "today" : timePeriod;
  timePeriod = timePeriod.indexOf("a day ago") >= 0 ? "yesterday" : timePeriod;
  const weeks = moment().diff(date, "weeks");
  if (weeks !== 0) {
    timePeriod = weeks === 1 ? weeks + " week ago" : weeks + " weeks ago";
  }

  return timePeriod;
};

export const checkIfNew = (date) => {
  const datePosted = moment(date, moment.ISO_8601);
  if (moment(new Date()).diff(datePosted, "days") <= 3) {
    return true;
  } else return false;
};

export const checkType = (type) => {
  if (type === "328") return "Permanent";
  if (type === "329") return "Temporary";
  if (type === "330") return "Contract";
  else return "-";
};

export const determineSalary = (job = {}) => {
  let salaryText;

  if (job.salary && job.salary !== "Not Specified") {
    salaryText = job.salary + " per " + job.salaryType;
  } else {
    salaryText =
      job.salaryFrom + " - " + job.salaryTo + " per " + job.salaryType;
  }
  if (job.salaryExtra) {
    salaryText = salaryText + " " + job.salaryExtra;
  }

  if (job.salaryFrom === job.salaryTo) {
    salaryText = job.salaryFrom + " per " + job.salaryType;
  }

  if (
    job.salaryFrom === 0 &&
    job.salaryTo === 0 &&
    job.salary === "Not Specified" &&
    job.salaryExtra
  ) {
    salaryText = job.salaryExtra;
  }

  if (
    job.salaryFrom === 0 &&
    job.salaryTo === 0 &&
    job.salary === "Not Specified" &&
    !job.salaryExtra
  ) {
    return "Not Specified";
  }

  return salaryText.replace(/GBP/g, "£");
};

export const determineWhereRedirect = (el) => {
  const jobTitle = el.jobTitle
    .replace(/[^0-9a-zA-Z. ]/g, "")
    .split(" ")
    .filter((x) => x.length > 0)
    .join("-")
    .toLowerCase();
  const jobID = el.id;
  if (
    el.website === "HR GO Recruitment" ||
    el.website === "HR GO Driving" ||
    el.website === "hrgo/hrgo_boards.txt" ||
    el.website === "Teachright"
  ) {
    return { href: {pathname: `/job/${jobTitle}/${jobID}` }}
  }
  if (el.website === "rhl" || el.website === "RHL - OLD") {
    return {
      href: `https://www.rhl.com.au/job/${jobTitle}/${jobID}`,
      target: "_blank"
    };
  }
  if (el.website === "Exectec") {
    return {
      href: `https://www.exectecsolutions.co.uk/job/${jobTitle}/${jobID}`,
      target: "_blank"
    }
  }
  if (el.website === "RHL AU") {
    return {
      href: `https://www.rhl.com.au/job/${jobTitle}/${jobID}`,
      target: "_blank"
    };
  }
  if (el.website === "HR GO Poland") {
    return {
      href: `https://www.hrgorecruitment.pl/job/${jobTitle}/${jobID}`,
      target: "_blank"
    };
  }
  if (el.website === "Gel Resourcing") {
    return {
      href: `https://www.gelresourcing.co.uk/job/${jobTitle}/${jobID}`,
      target: "_blank"
    };
  }
  if (el.website === "Absolute") {
    return {
      href: `https://www.absoluteexecutivesearch.co.uk/job/${jobTitle}/${jobID}`,
      target: "_blank"
    };
  } else
    return { href: "#" }
};

export const setCompanyLogo = (website) => {
  //ABSOLUTE
  if (website === "Absolute") {
    return (
      <img
        className="brandLogo_logo lozad"
        src="https://hrgo-image-cache.spacebetween.co.uk/media/7162/absolutereed.png?format=webp"
      />
    );
  }
  //RCH
  if (website === "rhl" || website === "RHL AU")
    return (
      <img
        className="brandLogo_logo lozad"
        src="https://hrgo-image-cache.spacebetween.co.uk/media/6909/rhl.png?format=webp"
      />
    );
  //Exectec
  if (website === "Exectec")
    return (
      <img
        className="brandLogo_logo lozad"
        src="https://www.hrgo.co.uk/media/6910/exectec.png?width=500&mode=max&animationprocessmode=first"
      />
    );
  if (website === "Gel Resourcing")
    return (
      <img
        className="brandLogo_logo lozad"
        src="https://hrgo-image-cache.spacebetween.co.uk/media/5354/gel-resourcing.png?format=webp"
      ></img>
    );
  if (
    website === "HR GO Recruitment" ||
    website === "HR GO Driving" ||
    website === "hrgo/hrgo_boards.txt" ||
    website === "Teachright" ||
    website === "HR GO Poland"
  )
    return (
      <img
        className="brandLogo_logo lozad"
        src="https://hrgo-image-cache.spacebetween.co.uk/media/6911/hrgo.png?format=webp"
      ></img>
    );
  //HRGO
  return <img className="brandLogo_logo lozad" src="" />;
};

export const determineSector = (sectorsListWithCodes, id, key) => {
  console.log("CALLED: ", key);
  // if(key === "84coFtwDeqP3pjT7CX4uxn") {
  //   debugger;
  // }
  console.log(sectorsListWithCodes, id);
  let sector;

  sectorsListWithCodes.map((el) => {
    if (el.value === id) {
      sector = el.label;
    }
  });
  return sector;
};

export const determineWhoPosted = (user = "") => {
  const name = user.substring(0, user.indexOf("@")).replace(".", " ");

  return name.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

export const determineLinkToRecruiter = (user = "") => {
  const name = user.substring(0, user.indexOf("@")).replace(".", "-");

  return `https://www.hrgo.co.uk/team/${name}`;
};
