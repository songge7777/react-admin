
// 导出
export const exportExcel = (url, fileName) => {
  const MyAxios = axios.create({
    baseURL: url,
    timeout: 1000 * 60,
    responseType: "blob", // 注意responseType必须设置成blob
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Token": UserModule.token || localStorage.getItem("token")
    },
  });
  MyAxios.post("").then((res) => {
    const BLOB = new Blob([res.data], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
    });
    const url = window.URL.createObjectURL(BLOB);
    const link = document.createElement("a");
    link.style.display = "none";
    link.download = fileName;
    link.href = url;
    document.body.appendChild(link);
    link.click();
  });
};
