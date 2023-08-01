// npm i -D cors express body-parser 
// npm i -g nodemon
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const xlsx = require("node-xlsx");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/test", async (req, res, next) => {
  // res.json({
  //   a: 1
  // });
  // 假设我们mysql数据库查询得到了excelData这个数据结果
  const excelData = [
    // 第一个sheet内容
    {
      name: "我是sheet1", // 给第一个sheet指名字 
      data: [
        ["姓名", "年龄", "家乡", "备注"], // 第一行
        ["孙悟空", "500", "花果山", "人送外号斗战胜佛"], // 第二行
        ["猪八戒", "88", "高老庄", "天蓬元帅"], // 第三行
      ]
    },
    // 第二个sheet内容
    {
      name: "我是sheet2", // 给第二个sheet指名字 
      data: [
        ["城市", "国家", "人口", "经济水平"], // 同上
        ["上海", "中国", "14亿", "越来越好"],
        ["伦敦", "英国", "7000万", "还行"],
        ["华盛顿", "美国", "3.4亿", "凑活"]
      ]
    }
  ];

  // excel表格内容配置单元格宽度
  const optionArr = {
    // 指定sheet1相应宽度
    "!cols": [
      { wch: 15 },
      { wch: 15 },
      { wch: 10 },
      { wch: 50 },
    ],
    // 指定sheet2相应宽度
    "cols": [
      { wch: 15 },
      { wch: 15 },
      { wch: 10 },
      { wch: 50 },
    ],
  };
  // xlsx.build方法第二个参数接收的是单元格的配置参数
  res.send(xlsx.build(excelData, optionArr));
  next();
});

app.get("/tt", async (req, res, next) => {
  const { data } = await axios({
    url: "http://dev-server.mongacloud.com/popularize/h5link/getVisitorVO?h5linkId=1644292530251841538&uid=164427873450045030511",
    method: "get",
  });
  res.json(data);
  next();
});

app.get("/test1", async (req, res, next) => {
  const dataByParse = xlsx.parse(fs.readFileSync("./11.xlsx"));
  res.send(xlsx.build(dataByParse));
  // xlsx.build方法第二个参数接收的是单元格的配置参数
  // res.send(xlsx.build(excelData, optionArr));
  next();
});

let token = "";
app.post("/login", async (req, res, next) => {
  const { data } = await axios({
    url: "https://ljxsgl.lejia-hl.com/api//login",
    method: "POST",
    data: {
      ...req.body
    }
  });
  console.log("login", data);
  token = data.data;
  res.json(data);
  next();
});
//  https://ljxsgl.lejia-hl.com/api/
app.post("/leads/list", async (req, res, next) => {
  const { data } = await axios({
    url: "https://ljxsgl.lejia-hl.com/api//leads/list",
    method: "POST",
    data: {
      ...req.body,
    },
    headers: {
      "Access-Token": token
    }
  });
  res.json(data);
  next();
});

app.post("/leads/export", async (req, res, next) => {
  const { data } = await axios({
    url: "https://ljxsgl.lejia-hl.com/api//leads/export",
    method: "POST",
    data: {
      ...req.body,
    },
    headers: {
      "Access-Token": token
    }
  });
  // const dataByParse = xlsx.parse(fs.readFileSync("./11.xlsx"));
  // res.send(xlsx.build(dataByParse));
  // const dataByParse = xlsx.parse(data);
  res.send(data);
  // res.send(data);
  next();
});

app.listen("8088", () => {
  console.log("start");
});



