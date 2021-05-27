export const throttle = (fn, delay) => {
    let timer = null;
    return function(...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };
  
  export const getScrollTop = () => {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      ({ scrollTop } = document.documentElement);
    } else if (document.body) {
      ({ scrollTop } = document.body);
    }
    return scrollTop;
  };
  
  export const getLink = link => {
    if (`${link}`.length > 1 && /^\/[^/]/.test(`${link}`)) {
      return `${window.rootPath}${link}`;
    }
    return link;
  };
  
  export const getParameter = (search, name) => {
    const [, query = ''] = search.split('?');
    const [hit = ''] = query.split('&').filter(item => name === item.split('=')[0]);
    const [, value = ''] = hit.split('=');
    return value;
  };
  
  export const isJsonString = str => {
    try {
      if (typeof JSON.parse(str) === 'object') {
        return true;
      }
    } catch (e) {}
    return false;
  };
  
  export const generateUrl = (url, params) => {
    return [
      url,
      '?',
      Object.keys(params)
        .map(key => [key, params[key]].join('='))
        .join('&'),
    ].join('');
  };
  
  export const isPlainObject = obj => {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };