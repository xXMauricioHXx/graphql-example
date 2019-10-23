import { Resolver, Schema } from "./resolver";

const users = [
  {
    id: "1",
    name: "Mauricio Henrique",
    email: "mauriciosh558@gmail.com"
  },
  {
    id: "2",
    name: "Joyce dos Santos Henrique",
    email: "joycetrindade@gmail.com"
  }
];

export interface UserDTO {
  id: string;
}

export class UserResolver extends Resolver{
  protected getAll() {
    return users;
  }
  protected findById(_: any, data: UserDTO) {
    return users.find(user => user.id === data.id);
  }

  get resolvers(): Schema {
    return {
      Query: {
        users: this.getAll,
        user: this.findById
      },
      Mutation: {
        createUser: () => users[0]
      }
    }
  }
}