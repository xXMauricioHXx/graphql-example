export interface Schema {
  Query: object;
  Mutation: object
}

export abstract class Resolver {
  abstract get resolvers(): Schema;
}