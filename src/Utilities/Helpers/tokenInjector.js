import Cookies from "js-cookie";
export class CookieHelper {
  static CookieSetNewItem(cookie_name, item, expire_date) {
    Cookies.set(cookie_name, item, { expires: expire_date });
  }

  static CookieDeleteItem(item_name) {
    Cookies.remove(item_name);
  }

  static CheckCredentialsFromCookie()
  {
    let token = Cookies.get('tokenInfo');
    let userInfo = Cookies.get('userInfo');
    let roles = Cookies.get('roleInfo');
    if (token && userInfo && roles)
      return true;
    else
      return false;
  }
  static GetCookieData(item_name) {
    return Cookies.get(item_name);
  }
  static Inject(data, status) {
    if (status === 200 || status === 201) {
      let totalExpireDate = data.expiresOn;
      this.InjectionJwtGroup(
        {
          token: data.jwToken,
          issuedOn: data.issuedOn,
          expireDate: data.expiresOn,
          refreshToken: data.refreshToken,
        },
        totalExpireDate
      );
      this.InjectUserProfile(
        {
          id: data.id,
          email: data.email,
          isVerified: data.isVerified,
          firstName: data.firstName,
          lastName: data.lastName,
          abilities: data.abilities,
        },
        totalExpireDate
      );
      this.InjectRoles(
        {
          roles: data.roles,
        },
        totalExpireDate
      );
    }
  }

  static InjectionJwtGroup(jwt_data, expire_date) {
    this.CookieSetNewItem(
      "tokenInfo",
      JSON.stringify(jwt_data),
      Date.UTC(expire_date)
    );
  }

  static InjectUserProfile(user_info, expire_date) {
    this.CookieSetNewItem(
      "userInfo",
      JSON.stringify(user_info),
      Date.UTC(expire_date)
    );
  }

  static InjectRoles(role_info, expire_date) {
    this.CookieSetNewItem(
      "roleInfo",
      JSON.stringify(role_info),
      Date.UTC(expire_date)
    );
  }
}
