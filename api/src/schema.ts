/* import { buildSchema } from 'graphql' */

import { gql } from 'apollo-server-express'

import * as transService from './trans/trans-service'

export const typeDefs = gql`
  type Acct {
    id: Int!
  }
  type Cat {
    id: Int!
  }
  type Trans {
    id: Int!
    acct: Acct 
    amt: Float! 
    cat: Cat 
    description: String
  }

  type Query {
    trans: [Trans]
  }
`

export const resolvers = {
  Query: {
    trans: async () => 
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
