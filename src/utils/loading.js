import { Toast } from 'react-vant';

/*
 * @description: loading decorator
 * @param {string} message loading mesaage
 * @return {function}  decorator
 * @example:
 * @loading('加载中')
 * async function getData() {
 *  const res = await api.getData();
 * return res;
 * }
 */
export default function loading(message = '加载中') {
  return function (target, a, descriptor) {
    let func = descriptor?.value;
    func.value = async function () {
      // loading和错误提示不共用一个示例，否则错误信息展示时间太短
      Toast.allowMultiple();
      const loading = Toast.loading({
        message,
        forbidClick: true,
        overlay: true,
        duration: 0
      });
      try {
        return await func.bind(this)(...arguments);
      } catch (error) {
        console.log(error);
        Toast.fail(error);
      } finally {
        loading.clear();
      }
    };

    return func;
  };
}
