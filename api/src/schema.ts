import { gql } from 'apollo-server-express'
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { GraphQLDate } from 'graphql-iso-date';

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
    transDate: Date!
    clearedDate: Date
    description: String
    amt: Float! 
    cat: Cat!
    acct: Acct!
    checkNum: Int
    location: String
    year: Int!
    month: Int!
    day: Int!
    created: Date
    updated: Date
  }

  type Query {
    acct(id: Int!): Acct
    accts: [Acct]
    cat(id: Int!): Cat
    cats: [Cat]
    transs: [Trans]
    trans(id: Int!): Trans
  }

  type Mutation {
    createTrans(transDate: Date!, amt: Int!, description: String, acctId: Int!, catId: Int!): Trans 
    updateTrans(id: Int!, transDate: Date, amt: Int, description: String, acctId: Int, catId: Int): Trans 
  }
`

export const resolvers = {
  Date: GraphQLDate,
  Trans: {
    acct: (parent) => {
      return acctService.findOne(parent.acctId)
    },
    cat: (parent) => {
      return catService.findOne(parent.catId)
    }
  },
  Query: {
    acct: async (_parent, args) => 
      acctService.findOne(args.id),
    accts: async () => 
      acctService.findAll(),
    cat: async (_parent, args) => 
      catService.findOne(args.id),
    cats: async () => 
      catService.findAll(),
    trans: async (_parent, args) => 
      transService.findOne(args.id),
    transs: async () => 
      transService.findAll()
  },
  Mutation: {
    createTrans: async (_parent, args) => {
      function parseYYMMDD(date: Date) {
        return [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()]
        /* return date.split('-').map(s => parseInt(s, 10)) */
      }
      const [year, month, day] = parseYYMMDD(args.transDate)
      args.year = year
      args.month = month
      args.day = day

      const savedTrans = await transService.create(args)
      return savedTrans
    },
    updateTrans: async (_parent, args) => {
      function parseYYMMDD(date: Date) {
        console.log('date', typeof date, date)
        return [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()]
        /* return date.split('-').map(s => parseInt(s, 10)) */
      }
      let dbTrans = await transService.findOne(args.id)
      dbTrans = { ...dbTrans, ...args }
      const [year, month, day] = parseYYMMDD(args.transDate)
      console.log('y,m,d', year, month, day)
      dbTrans.year = year
      dbTrans.month = month
      dbTrans.day = day

      const savedTrans = await transService.create(dbTrans)
      return savedTrans
    }
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
