import { Pool } from 'pg'


export const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    password:'216053099',
    database:'tscapi',
    port:5432
})