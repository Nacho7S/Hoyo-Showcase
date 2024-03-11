import { LOADING, SUCCESS_FETCH_USER } from "./actionType";

const { BASE_URL } = require("@/config/baseUrl");

export function fetchUser(uid) {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
      payload: true
    })

    try {
      const res = await fetch(`${BASE_URL}/api/v1/genshin-user`, {
        method: 'POST',
        headers: {
          "Content-tyoe": "application/json"
        },
        cache: 'no-cache',
        body: JSON.stringify({ uid: uid })
      })

      const dataJson = await res.json()
      if (res.ok) {
        // console.log("go in");
        // console.log(dataJson, "user di redux");
        localStorage.setItem("user", dataJson.user.nickname)
        dispatch({
          type: SUCCESS_FETCH_USER,
          payload: dataJson
        })
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({
        type: LOADING,
        payload: false
      })
    }
  }
}
