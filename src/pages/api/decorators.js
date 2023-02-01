import { createHandler, Post, HttpCode } from 'next-api-decorators';

class UserHandler {
  @Post()
  @HttpCode(201)
  create() {
    return 'You just created a new user.';
  }

  @Post()
  create(@Body() body: CreateUserInput) {
    // Do something with the body
    return `A new user is created with email address "${body.email}"`;
  }
}

export default createHandler(UserHandler);