export default class AuthenticationService {
  private baseUrl: any;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async signIn(email: string, password: string) {
    throw new Error("Method not implemented yet");
  }

  async signup(name: string, email: string, password: string) {
    const requestConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    };

    try {
      const response = await fetch(
        `${this.baseUrl}/api/authentication/signup`,
        requestConfig,
      );
      const text = await response.text();

      try {
        const data = JSON.parse(text);
        return data;
      } catch {
        return { message: text };
      }
    } catch (error) {
      console.error(error);
    }
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
