export const REGNAME = /^[A-Za-zА-Яа-яЁё]{3,15}(?:[-\s'][A-Za-zА-Яа-яЁё]{1,19})?$/;
export const REGPHONE = /^\+375\d{9}$/;
export const REGEMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGCITY = /^[a-zA-Zа-яА-Я\-]{3,20}$/;
export const REGSTREET = /^[a-zA-Zа-яА-Я\s\-]+$/;
export const REGHOUSE = /^\d{1,4}[A-Za-z]?(\/\d+)?$/;
export const REGAPARTMENT = /^\d{1,4}[A-Za-z]?(\/\d+)?$/;