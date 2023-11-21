// const express = require('express')
import express from "express"
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function(req, res) {
	res.send('<h1>Hello World nodejs</h1>')
})

app.listen(port, hostname, () => {
	console.log(`Hello HieuLB, Running server at http://${hostname}:${port}/`);
})