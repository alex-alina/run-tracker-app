import moment from 'moment';

export const formatDateToDDMMMYYY = (date) =>  moment(date).format("DD MMM YYYY");

export const formatDateToDDMMMY = (date) =>  moment(date).format("DD MMM YY");

