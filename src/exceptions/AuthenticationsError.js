const ClientError = require('./ClientError');

class AuthenticationsError extends ClientError {
  constructor(messsage) {
    super(messsage, 401);
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationsError;
