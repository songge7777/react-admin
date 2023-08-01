import { Button, Table, Row, Col, DatePicker } from "antd";

import * as React from "react";

import axios from "@/api/axios";
import Axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const { RangePicker } = DatePicker;


const { useEffect, useState } = React;

const Counter = () => {

  const [dataList, setDataList] = useState([]);

  const [searchParams, setSearchParams] = useState({
    startTime: "",
    endTime: "",
  });

  const [pages, setPages] = useState({
    current: 1,
    total: 0,
    size: 10,
  });

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "性别",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "婚姻状态",
      dataIndex: "marital",
      key: "marital",
    },
    {
      title: "收入",
      dataIndex: "income",
      key: "income",
    },
    {
      title: "电话",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "省份",
      dataIndex: "province",
      key: "province",
    },
    {
      title: "城市",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "镇/区",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "学历",
      dataIndex: "education",
      key: "education",
    },
    {
      title: "婚姻状态",
      dataIndex: "marital",
      key: "marital",
    },
    {
      title: "生日",
      dataIndex: "birthMonth",
      key: "birthMonth",
    },
    {
      title: "注册时间",
      dataIndex: "createTime",
      key: "createTime",
    },
  ];

  const init = async (i?: number) => {
    const { startTime, endTime } = searchParams;
    const { size: _size, current: _current } = pages;
    const { data } = await axios.post("/leads/list", {
      current: i ? i : _current,
      size: _size,
      startTime,
      endTime,
    });
    const { current, total, size, records } = data.data;
    const _records = records.map((i: { id: any; }) => ({ ...i, key: i.id }));
    setDataList(_records);
    const _pages = {
      current,
      total,
      size,
    };
    setPages(_pages);
  };
  const onExportExcel = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const MyAxios = Axios.create({
      baseURL: baseUrl,
      timeout: 1000 * 60,
      responseType: "blob", // 注意responseType必须设置成blob
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Token": accessToken,
      },
    });

    const { startTime, endTime } = searchParams;
    const { size: _size, current: _current } = pages;
    MyAxios.post("/leads/export", {
      current: _current,
      size: _size,
      startTime,
      endTime,
    }).then((res) => {
      const BLOB = new Blob([res.data], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
      });
      const url = window.URL.createObjectURL(BLOB);
      const link = document.createElement("a");
      link.style.display = "none";
      link.download = "数据导出";
      link.href = url;
      document.body.appendChild(link);
      link.click();
    });
  };
  const onChange = (data: any, data1: string[]) => {
    setSearchParams({
      endTime: data1[1],
      startTime: data1[0]
    });
    console.log(data, data1);
  };
  const searchList = () => {
    init();
  };
  const exportData = async () => {
    onExportExcel();
  };
  const pageOnChange = (i: number) => {
    setPages({
      ...pages,
      current: i
    });
    init(i);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div >
      <Row style={{ marginBottom: "20px" }}>
        <Col span={4}>
          <RangePicker onChange={onChange} />
        </Col>
        <Col offset={1} span={2}>
          <Button onClick={searchList} type="primary"  >
            搜索
          </Button>
        </Col>
        <Col offset={12} span={2}>
          <Button onClick={exportData} type="primary"  >
            导出
          </Button>
        </Col>
      </Row>
      <Table dataSource={dataList} columns={columns} pagination={{ total: pages.total, pageSize: pages.size, current: pages.current, onChange: pageOnChange }} />
    </div >
  );
};

export default Counter;