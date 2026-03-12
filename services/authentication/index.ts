class LocalStorage {
  setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeValue(key: string) {
    localStorage.removeItem(key);
  }
}

export default class AuthenticationService {
  private baseUrl: any;
  private browserStorage;

  constructor(baseUrl: string) {
    // variables used:
    //token

    this.baseUrl = baseUrl;
    this.browserStorage = new LocalStorage();
  }

  private setBrowserStorgedToken(token: string) {
    this.browserStorage.setValue("token", token);
  }

  getBrowserStorgedToken() {
    // this method shows what session is active

    return this.browserStorage.getValue("token");

    // throw new Error("Method not implemented");
  }

  async signIn(email: string, password: string) {
    throw new Error("Method not implemented yet");
  }

  async signup(name: string) {
    // check if there are active user sessions
    // create a user with a session id

    // throw error if there is a active user session
    // throw error if user alreddy exists, in this case the existing user is duck

    const tokenStorgedInBrowser = this.getBrowserStorgedToken();

    // console.log(tokenStorgedInBrowser)

    if (tokenStorgedInBrowser !== null) {
      // console.log("there is a user session active");
      return {
        success: false,
        message: "there is alreddy a active token in browser",
      };
    }

    this.setBrowserStorgedToken("token");
    return {
      success: true,
      message: "user signed up successfully",
    };
  }

  async signOut(accessToken: string) {
    throw new Error("Method not implemented yet");
  }
  async signOutAll(accessToken: string) {
    throw new Error("Method not implemented yet");
  }

  async refresh(refreshToken: string) {
    throw new Error("Method not implemented yet");
  }

  async requestPasswordReset(email: string) {
    throw new Error("Method not implemented yet");
  }
  async resetPassword(token: string, newPassword: string) {
    throw new Error("Method not implemented yet");
  }

  async verifyEmail(token: string) {
    throw new Error("Method not implemented yet");
  }

  async resendVerificationEmail(email: string) {
    throw new Error("Method not implemented yet");
  }

  async getCurrentUser(accessToken: string) {
    throw new Error("Method not implemented yet");
  }

  async revokeToken(refreshToken: string) {
    throw new Error("Method not implemented yet");
  }

  async getUserRoles(userId: string) {
    throw new Error("Method not implemented yet");
  }

  async listUserActiveSessions(userId: string) {
    throw new Error("Method not implemented yet");
  }

  async deactivateAccount(token: string) {
    throw new Error("Method not implemented yet");
  }
}
