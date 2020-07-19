import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { gql } from 'apollo-server-express'

import * as acctService from './acct/acct-service'
import * as catService from './cat/cat-service'
import * as transService from './trans/trans-service'

export const typeDefs = gql`
  scalar Date

  type Acct {
    id: Int!
    abbrev: String!
    name: String!
    created: Date
    updated: Date
    liquidable: Boolean 
    transs: [Trans!]!
  }
  type Cat {
    id: Int!
    abbrev: String!
    name: String!
    description: String
    created: Date
    updated: Date
    transs: [Trans!]!
  }

  type Trans {
    id: Int!
    acct: Acct 
    amt: Float! 
    cat: Cat!
    description: String
  }

  type Query {
    accts: [Acct]
    cats: [Cat]
    transs: [Trans]
    trans(id: Int!): Trans
  }
`

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    },
  }),
  Trans: {
    cat: (parent) => {
      return catService.findOne(parent.catId)
    }
  },
  Query: {
    accts: async () => 
      acctService.findAll(),
    cats: async () => 
      catService.findAll(),
    trans: async (_parent, args) => 
      transService.findOne(args.id),
    transs: async () => 
      transService.findAll()
  }
}

/* export const schema = buildSchema(` */
/*   type Acct @pgTable(name: "acct") { */
/*     id: Int! @unique */
/*     abbrev: String! @unique */
/*     created: DateTime */
/*     liquidable: Boolean @default(value: true) */
/*     name: String! */
/*     trans: [Trans!]! */
/*     updated: DateTime */
/*   } */

/*   type Auth_user @pgTable(name: "auth_user") { */
/*     id: ID! @unique @pgColumn(name: "username") */
/*     created: DateTime */
/*     password_hash: String! */
/*     updated: DateTime */
/*   } */

/*   type Cat @pgTable(name: "cat") { */
/*     id: Int! @unique */
/*     abbrev: String! @unique */
/*     created: DateTime */
/*     description: String */
/*     expecteds: [Expected!]! */
/*     name: String! */
/*     trans: [Trans!]! */
/*     # type: null @default(value: debit) # Type 'USER-DEFINED' is not yet supported. */
/*     updated: DateTime */
/*   } */

/*   type Expected @pgTable(name: "expected") { */
/*     id: Int! @unique */
/*     amt: Float! @default(value: 0.00) */
/*     cat: Cat @pgRelation(column: "cat_id") */
/*     created: DateTime */
/*     date: DateTime! */
/*     month: Int! @unique */
/*     notes: String */
/*     updated: DateTime */
/*     year: Int! @unique */
/*   } */

/*   type Pgmigration @pgTable(name: "pgmigration") { */
/*     id: UUID! @unique @default(value: uuid_generate_v4()) */
/*     dateapplied: DateTime */
/*     name: String */
/*     scriptname: String */
/*   } */

/*   type Session @pgTable(name: "session") { */
/*     id: ID! @unique */
/*     expiry: DateTime! */
/*     session: Json */
/*   } */

/*   type Trans @pgTable(name: "trans") { */
/*     id: Int! @unique */
/*     acct: Acct @pgRelation(column: "acct_id") */
/*     amt: Float! @default(value: 0.00) */
/*     cat: Cat @pgRelation(column: "cat_id") */
/*     check_num: Int */
/*     cleared_date: DateTime */
/*     created: DateTime */
/*     day: Int! */
/*     description: String */
/*     location: String */
/*     month: Int! */
/*     trans_date: DateTime! */
/*     updated: DateTime */
/*     year: Int! */
/*   } */
/* `) */
