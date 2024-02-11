import config from "@/config";
import http from "@/utils/http";

export async function auth() {
  const token = localStorage.getItem(config.TOKEN_NAME);
  if (!token) return false;
  // 如果token存在 则验证
  const jwt = await http.get("/user/auth", {
    params: { token },
  });
  if (jwt.data.data){
    return jwt.data.data
  } else {
      return false;
  }


}
