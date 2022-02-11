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

export const determineSalary = () => {
    
}