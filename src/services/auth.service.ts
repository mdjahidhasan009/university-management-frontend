import {getFromLocalStorage, setToLocalStorage} from "@/utils/local-storage";
import {authKey} from "@/constants/storageKey";
import {decodedToken} from "@/utils/jwt";

export const storeAccessToken = ({accessToken}: { accessToken: string }) => {
    return setToLocalStorage(authKey, accessToken as string);
}

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if(authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return null;
  }
}

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
}

export const removeUserInfo = () => {
  return localStorage.removeItem(authKey);
}