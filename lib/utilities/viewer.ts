import * as Cookies from '../../vendor/cookie-cutter';
import * as C from '../constants/constants';

export const getViewerFromToken = async (token: any) => {
  try {
    const url = `${process.env.API_HOST}/viewer`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();
    console.log(json);
    if (!json) {
      return null;
    }

    if (json.error) {
      return null;
    }

    return json;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getViewerFromHeader = async (headers: any) => {
  try {
    const token = Cookies.get(headers, C.auth);
    const url = `${process.env.API_HOST}/viewer`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();
    console.log(json);
    if (!json) {
      return null;
    }

    if (json.error) {
      return null;
    }

    return json;
  } catch (e) {
    console.log(e);
    return null;
  }
};
