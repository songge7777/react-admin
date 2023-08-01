import * as React from "react";
import bgLogin from "@/img/bg-login.png";
import { Button, Checkbox, Form, Input, message } from "antd";
import "@/styles/pages/login.scss";
import axios from "@/api/axios";
import { useDispatch } from "react-redux";
import { setLoginInfo } from "@/store/modules/login";
import { useLocation, useNavigate } from "react-router-dom";

type AgreementProps = {
  checked?: boolean,
  onChange?: (i: boolean) => {}
}

const Agreement: React.FC = (props: AgreementProps) => {
  const { checked, onChange } = props;
  const navigate = useNavigate();
  const selfClick = () => onChange(!checked);
  const goToPage = (id: number) => {
    navigate(`/agreement?id=${id}`);
  };
  return <div className="checkbox_layout">
    <Checkbox onClick={(r) => onChange(r)} checked={checked} />
    <div>
      <span onClick={selfClick}> 我已阅读并同意 </span>
      <span onClick={() => goToPage(1)} className="agreement">《服务协议》</span>
      <span onClick={selfClick}> 和 </span>
      <span onClick={() => goToPage(2)} className="agreement">《隐私政策》</span>
    </div>
  </div>;
};

const Login = () => {
  const dispatch = useDispatch();
  const [formRef] = Form.useForm();
  const routeConfig = useLocation();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    // password: "yc20220804..",
    // username: "ycadmin"
    const { data } = await axios.post("/login", {
      ...values,
    });
    const { code, success, data: token } = data;
    if (Number(code) === 200 && data) {
      localStorage.setItem("accessToken", token);
      navigate("/home/list");
    } else {
      message.error(data.msg);
    }
  };

  const getUserInfo = async () => {
    const { data } = await axios.get("/auth/client/info");

    const loginInfo = data.data ? data.data : {};
    dispatch(setLoginInfo({ loginInfo }));
  };

  const init = async () => {
    const { search } = routeConfig;
    const code = search.slice(1,).split("=")[1];
    if (code) {
      // 跳转登录
      const { data: rsData } = await axios.get(`/auth/client?code=${code}`);
      if (rsData.code === 200) {
        const { accessToken } = rsData;
        localStorage.setItem("accessToken", accessToken);
        // 获取用户信息
        getUserInfo();
        message.success("登录成功");
        navigate("/search");
      } else {
        message.error(`${rsData.message}`);
      }
    }
  };
  React.useEffect(() => {
    init();
  }, []);
  return (
    <div className="login_layout">
      <img className="login_layout_img" src={bgLogin} alt="" />
      <section className="login_layout_div">
        <React.Fragment>
          <div className="login_layout_div_title">请登录</div>
          <Form
            className="login_layout_div_from"
            form={formRef}
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ username: "", password: "" }}
            onFinish={onFinish}
            autoComplete="off"
          >
            {/* form */}
            <Form.Item
              className="login_layout_div_from"
              name="username"
              rules={[{ required: true, message: "请输入账号" }]}
            >
              <Input addonBefore="账号:" placeholder="请输入账号" />
            </Form.Item>
            <Form.Item
              className="login_layout_div_from"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                type='password'
                addonBefore="密码:" placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </React.Fragment>
      </section>
    </div>
  );
};

export default Login;