export const setCookie = (name, value, expires, path = '/') => {

    document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
  };
  
  // 쿠키 가져오기
  export const getCookie = (name) => {
    return document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value ? value : '';
      return acc;
    }, {})[name];
  };
  
  export const removeCookie = (name) => {
    setCookie(name, '', 'Thu, 01 Jan 1970 00:00:00 UTC');
  };
  
  