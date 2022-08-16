import axios from "axios";
import { v4 as uuid } from "uuid";
import BASE_URL from "service";
import OSS from "ali-oss";

const uploadImg = async (img, prefix) => {
  const res = await axios.post(`${BASE_URL}/api/oss/getSTS`, {});
  const client = new OSS({
    accessKeyId: res.data.msg.AccessKeyId,
    accessKeySecret: res.data.msg.AccessKeySecret,
    region: res.data.msg.Region,
    // 从STS服务获取的安全令牌（SecurityToken）。
    stsToken: res.data.msg.SecurityToken,
    // 填写Bucket名称。
    bucket: res.data.msg.Bucket,
  });
  //  Upload
  const url = `${prefix}/${uuid()}.jpg`;
  const result = await client.put(url, img);
  console.log(result);
  return result.url;
};

export default uploadImg;
