import * as React from "react";
import "@/styles/pages/loginCard.scss";
import { Button, Checkbox, Form, Input,message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginInfo } from "@/store/modules/login";
import axios from "@/api/axios";
let timer = 0;
type AgreementProps = {
  checked?: boolean,
  onChange?:(i:boolean)=>{}
}
const Agreement:React.FC = (props:AgreementProps) => {
  const { checked,onChange } = props;
  const navigate = useNavigate();
  const selfClick = () => onChange(!checked);
  const goToPage = (id:number) => {
    navigate(`/agreement?id=${id}`);
  };
  return <div className="checkbox_layout">
    <Checkbox onClick={(r)=>onChange(r)} checked={checked} />
    <div> 
      <span onClick={selfClick}> 我已阅读并同意 </span>
      <span onClick={()=>goToPage(1)} className="agreement">《服务协议》</span> 
      <span  onClick={selfClick}> 和 </span>
      <span onClick={()=>goToPage(2)} className="agreement">《隐私政策》</span>
    </div>
  </div>;
};
const LoginCard = () => {
  const dispatch = useDispatch();
  const [formRef] = Form.useForm();
  const [validCodeReqNo, setValidCodeReqNo] = React.useState("");
  const [show,setShow] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const navigate = useNavigate();
  const onFinish =async (values: any) => {
    const {validCode,phone} = values;
    const param = {
      phone,
      validCode,
      validCodeReqNo,
      device:"pc"
    };

    
    // 是否进入个人引导页
    const isGoToGuide = async() => {
      const {data} = await axios.get("/cpe/resume/enter");
      return data;
    };
    const getUserInfo = async () => {
      const {data} = await axios.get("/auth/client/info");
     
      const loginInfo = data.data ? data.data : {};
      dispatch(setLoginInfo({loginInfo}));
    };
    const {data:rsData} = await axios.post("/auth/client/login",param);
    if(rsData.code === 200){
      const { data:{accessToken} } = rsData;
      localStorage.setItem("accessToken",accessToken);
      message.success("登录成功");
      const data = await isGoToGuide();
     
      getUserInfo();
      if(data.ok){
        navigate("/jobWanted");
      }else {
        navigate("/index");
      }
    }else{
      message.error(`${rsData.message}`);
    }
  };

  React.useEffect(()=> {
    if( time === 60 ) {
      timer = setInterval(()=> {
        setTime(time => --time);
      }, 1000);
    }else if ( time === 0 ) {
      setShow(false);
      clearInterval(timer);
    }
  }, [time]);
  const validator = (rule, value, callback) =>{
    if(Boolean(value) === true){
      callback();
    }else{
      callback("请勾选协议");
    }
  };
  const getCode = async() => {
    const {phone} =await formRef.validateFields(["phone"]);
    
    if(!phone) return; 
    const data = {
      phone,
      smsType:"loginSms"
    };
    const {data:getCodeRs} =  await axios.post("/auth/verify/code",data);
    if(getCodeRs.code === 200){
      setValidCodeReqNo(getCodeRs.data);
      message.success("成功获取验证码");
      setTime(60);
      setShow(true);
    }else{
      message.error(`${getCodeRs.message}`);
    }
  };
  return (
    <section className="loginCard_layout">
      <div className="loginCard_layout_title">注册登录后更多岗位任您选</div>
      <Form
        className="loginCard_layout_div"
        form={formRef}
        name="basic"
        initialValues={{phone:"",validCode:"", remember: false }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* form */}
        <Form.Item
          className="loginCard_layout_div_from"
          name="phone"
          rules={[{ required: true, message: "请输入手机号码" }]}
        >
          <Input  addonBefore="+86" placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item
          className="loginCard_layout_div_from"
          name="validCode"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <Input placeholder="请输入验证码" addonAfter={
            show ? <div>{time}s</div>:<div className="clickCode" onClick={()=>getCode()}>获取验证码</div>
          } />
        </Form.Item>

        <Form.Item>
          <Button style={{width:"100%"}} type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
        <Form.Item
          className="loginCard_layout_div_from"
          name="remember"
          rules={[{ validator:validator }]}
          valuePropName="checked">
          <Agreement />
        </Form.Item>
      </Form>
    </section>
  );
};
export default LoginCard;