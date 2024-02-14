import config from "@/config";
import http from "@/utils/http";

export async function auth() {

  const jwt = await http.get("/user/auth");
  if (jwt.data){
    return jwt.data
  } else {
    return false
  }
}
