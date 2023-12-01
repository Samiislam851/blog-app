import * as fs from 'fs'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

fs.readFile("blogData/blogdata.json",(err,data)=>{
res.json(JSON.parse(data))
})
}
