export const REGNAME = /^[A-Za-zА-Яа-яЁё]{6,20}(?:[-\s'][A-Za-zА-Яа-яЁё]{1,19})?$/;
export const REGPHONE = /^\+375\d{9}$/;
export const REGEMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGCITY = /^[a-zA-Z\-]{3,20}$/;
export const REGSTREET = /^[a-zA-Z\s\-]+$/;
export const REGHOUSE = /^\d+[A-Za-z]?(\/\d+)?$/;
export const REGAPARTMENT = /^\d+[A-Za-z]?(\/\d+)?$/;