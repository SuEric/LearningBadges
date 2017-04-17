import 'whatwg-fetch';
import config from '../config/env';

/**
 * Parses the JSON returned by a network request
 *
 * @param {object} respose Response from a network request
 * @return {object} The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Request a URL, returning a promise
 *
 * @param {string} url The URL we want to request
 * @param {object} [options] The options we want to pass to "fetch"
 * @return {object} The response data
 */
export default function request(endpoint, options) {
  const url = `${config.url.protocol}://${config.url.link}:${config.url.port}/${endpoint}`;
  return fetch(url, options)
    .then(parseJSON);
}
