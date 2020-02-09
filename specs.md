
ALL

errors: [
  { title: 'human', status: 401, code: 'TOKENEXP' }
]

POST /api/v1/auth

{
  username: string,
  password
}

{
  data: {
    token: string
  }
}



GET /api/v1/acct

{
  data: [
    {
      id:number
      name: string
      abbrev: string
      liquidable: boolean
      created: date
      updated: date
    }
  ]
}


