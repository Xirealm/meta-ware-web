import { http } from "@/utils/http"

export const useUserAPI = () => {
  /**
   * 密码登录
   * @param phone 手机号
   * @param password 密码
   */
  const postLoginByPsw = (phone: string, password: string): any => {
    return http.post("/auth/login", {
      phone: phone,
      password: password,
    });
  }
  /**
   * 发送登录验证码
   */
  const postLoginCode = (phone: string): any => {
    return http.post("/auth/sendLoginAuthCode?phone="+ phone);
  }
  /**
   * 发送注册验证码
   */
  const postRegisterCode = (phone: string): any => {
    return http.post("/auth/sendRegisterAuthCode?phone=" + phone);
  }
  /**
   * 验证码登录
   */
  const postLoginByCode = (phone: string, authCode: string): any => {
    return http.post("/auth/loginByCode", {
      phone: phone,
      authCode: authCode,
    });
  };
  /**
   * 退出登录
   */
  const postLogout = (): any => {
    return http.post("/auth/logout");
  };
  /**
   * 注册用户
   */
  const postRegister = (phone: string, password: string, code: string): any => {
    return http.post("/auth/register", {
      phone: phone,
      password: password,
      code: code,
    });
  }

  return {
    postLoginByPsw,
    postLoginCode,
    postRegisterCode,
    postLoginByCode,
    postRegister,
    postLogout,
  };
}