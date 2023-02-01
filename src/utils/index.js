// 手机号码校验函数
export const validPhone = (_, value) => {
  if (/^1[3578]\d{9}$/.test(value)) {
    return Promise.resolve(true);
  }

  return Promise.reject(new Error('请输入正确的手机号码'));
};

// 密码校验函数
export const validPassword = (_, value) => {
  const reg =
    /^(?=.{8,16})(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*?\{\}\\\/_\>\|.,:";'-=+])[\w!@#$%^&*?\{\}\\\/_\>\|.,:";'-=+]{8,16}$/;
  if (reg.test(value)) {
    return Promise.resolve(true);
  }

  return Promise.reject(new Error('必须包含数字+字母，长度8-16位!'));
};

// 身份证校验函数
export const valIdidentity = (_, value) => {
  const reg =
    /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;
  if (reg.test(value)) {
    return Promise.resolve(true);
  }

  return Promise.reject(new Error('请正确输入身份证!'));
};

// 银行卡号校验函数
export const valPayCard = (_, value) => {
  const reg = /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/;
  if (reg.test(value)) {
    return Promise.resolve(true);
  }

  return Promise.reject(new Error('请正确输入银行卡号!'));
};
