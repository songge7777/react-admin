/**
 * @description 薪资
 */
import * as  React from "react";

// export const moneyList = () => {
//   const baseArr = [{id:0,value:"1千以内"}];
//   const qianArr = ["1","2","3","4","5","6","7","8","9"].map(i => ({id:`${Number(i)*1000}`,value:`${i}千`}));
//   const wanOneArr = ["1.0","1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9"].map(i => ({id:`${Number(i)*1000}`,value:`${i}`}));
//   const wanTwoArr = ["2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9"].map(i => ({id:`${Number(i)*1000}`,value:`${i}万`}));
//   const wanMiddleArr = ["3.0","3.5","4.0","4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0","8.5","9.0","9.5"].map(i => ({id:`${Number(i)*1000}`,value:`${i}万`}));
//   const wanMoreArr = ["11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"].map(i => ({id:`${Number(i)*1000}`,value:`${i}万`}));
//   return [...baseArr,...qianArr,...wanOneArr,...wanTwoArr,...wanMiddleArr,...wanMoreArr];
// };

export const moneyList = () => {
  const baseArr = [{id:0,value:"1千以内"}];
  const qianArr = ["1","2","3","4","5","6","7","8","9"].map(i => ({id:`${Number(i) * 1000}`,value:`${i}千`}));
  const wanOneArr = ["1.0","1.1","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9"].map(i => ({id:`${Number(i)*10000}`,value:`${i}万`}));
  const wanTwoArr = ["2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9"].map(i => ({id:`${Number(i)*10000}`,value:`${i}万`}));
  const wanMiddleArr = ["3.0","3.5","4.0","4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0","8.5","9.0","9.5"].map(i => ({id:`${Number(i)*10000}`,value:`${i}万`}));
  const wanMoreArr = ["11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"].map(i => ({id:`${Number(i)*10000}`,value:`${i}万`}));
  return [...baseArr,...qianArr,...wanOneArr,...wanTwoArr,...wanMiddleArr,...wanMoreArr];
};

/**
 *
 * @description 城市
 */
export const expectedCityData = ()=>{
  return [
    {
      id:"0",
      value:"不限"
    },
    {
      id:"420100",
      value:"武汉"
    },
    {
      id:"320500",
      value:"苏州"
    },
    {
      id:"610100",
      value:"西安"
    },
    {
      id:"120100",
      value:"天津"
    },
    {
      id:"330100",
      value:"杭州"
    },
    {
      id:"440300",
      value:"深圳"
    },
    {
      id:"440100",
      value:"广州"
    },
    {
      id:"310100",
      value:"上海"
    },
    {
      id:"110100",
      value:"北京"
    }
  ];
};
 


/**
 * 
 * @description 状态
 */
export const identityStatusData = ()=>{
  return [
    {
      id:1,
      value:"离职-随时到岗"
    },
    {
      id:2,
      value:"在职-暂不考虑"
    },
    {
      id:3,
      value:"在职-考虑机会"
    },
    {
      id:4,
      value:"在职-月内到岗"
    }
  ];
};

/**
 * @description 学历
 * qualification 字典表查
    10201  初中及以下  
    10202  中专/中技  
    10203  高中  
    10204  大专  
    10205  本科  
    10206  硕士  
    10207  博士  
 */
export const educationData = ()=>{
  return [
    {
      id:0,
      value:"不限",
    },
    {
      id:10201,
      value:"初中"
    },
    {
      id:10202,
      value:"中专"
    },
    {
      id:10203,
      value:"高中"
    },
    {
      id:10204,
      value:"大专"
    },
    {
      id:10205,
      value:"本科"
    },
    {
      id:10206,
      value:"硕士"
    },
    {
      id:10207,
      value:"博士"
    }
  ];
};


/**
 * @description 学制类型
 */
export const educationalData = ()=>{
  return [
    {
      id:1,
      value:"全日制"
    },
    {
      id:2,
      value:"非全日制"
    }
  ];
};

/**
 * @description 搜索城市
 */
export const searchCityData = ()=>{
  return [
    {
      id:"420100",
      value:"武汉"
    },
    {
      id:"320500",
      value:"苏州"
    },
    {
      id:"610100",
      value:"西安"
    },
    {
      id:"120100",
      value:"天津"
    },
    {
      id:"330100",
      value:"杭州"
    },
    {
      id:"440300",
      value:"深圳"
    },
    {
      id:"440100",
      value:"广州"
    },
    {
      id:"310100",
      value:"上海"
    },
    {
      id:"110100",
      value:"北京"
    }
  ];
};


/**
 * @description 学历要求
 */
export const educationalRequirementsDta = ()=>{
  return [
    {
      id:0,
      value:"不限",
    },
    {
      id:10201,
      value:"初中"
    },
    {
      id:10202,
      value:"中专"
    },
    {
      id:10203,
      value:"高中"
    },
    {
      id:10204,
      value:"大专"
    },
    {
      id:10205,
      value:"本科"
    },
    {
      id:10206,
      value:"硕士"
    },
    {
      id:10207,
      value:"博士"
    }
  ];
};



/**
 * @description 工作经验
 */
export const workExperience = ()=>{
  return [
    {
      id:0,
      value:"不限"
    },
    {
      id:10402,
      value:"应届生"
    },
    {
      id:10404,
      value:"1年内"
    },
    {
      id:10405,
      value:"1-3年"
    },
    {
      id:10406,
      value:"3-5年"
    },
    {
      id:10407,
      value:"5-10年"
    },
    {
      id:10408,
      value:"10年以上"
    }
  ];
};



/**
 * @description 公司规模
 */
export const companySize = ()=>{
  return [
    {
      id:10501,
      value:"少于20人"
    },
    {
      id:10502,
      value:"20-99人"
    },
    {
      id:10503,
      value:"100-499人"
    },
    {
      id:10504,
      value:"500-999人"
    },
    {
      id:10505,
      value:"1000-9999人"
    },
    {
      id:10506,
      value:"10000人"
    },
  ];
};




/**
 * @description 融资阶段
 */
export const financingStage= ()=>{
  return [
    {
      id:0,
      value:"不限"
    },
    {
      id:10601,
      value:"未融资"
    },
    {
      id:10602,
      value:"天使轮"
    },
    {
      id:10603,
      value:"A轮"
    },
    {
      id:10604,
      value:"B轮"
    },
    {
      id:10605,
      value:"C轮"
    },
    {
      id:10606,
      value:"D轮及以上"
    },
    {
      id:10607,
      value:"已上市"
    },
    {
      id:10608,
      value:"不需要融资"
    },
  ];
};
