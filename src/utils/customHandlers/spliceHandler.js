/* eslint-disable */
import { generateTimeStamp, updateIn, getIn, typeOf } from '../helpers';
import Safe from '../nullCheck';
export const spliceHandler = ({
  task: { clearData, spliceKey = [], subKey = [] } = {},
  callback: { updateCallback } = {},
  successData = {},
  successDataStatusCode,
}) => ({ data: oldData = {}, statusCode } = {}) => ({
  data: (() => {
    if (subKey.length > 0 && Array.isArray(getIn(oldData, subKey))) {
      const _oldCopyData = {
        ...oldData,
        ...(typeOf(successData) === 'object' ? successData : {}),
        [subKey[0]]: oldData[subKey[0]],
      };
      // return _oldCopyData
      return updateIn(_oldCopyData, subKey, _oldData => {
        if (clearData) return Safe(successData, `.${subKey.join('.')}`, []);
        return updateCallback
          ? updateCallback(
              _oldData,
              Safe(successData, `.${subKey.join('.')}`, []),
            )
          : Array.isArray(_oldData)
          ? (() => {
              const _newData = _oldData.slice();
              _newData.splice(
                ...spliceKey,
                ...Safe(successData, `.${subKey.join('.')}`, []),
              );
              return _newData;
            })()
          : _oldData;
      });
    }
    const newData = Array.isArray(oldData)
      ? (() => {
          const _newData = oldData.slice();
          return _newData.splice(
            ...spliceKey,
            ...Safe(successData, `.${subKey.join('.')}`, []),
          );
        })()
      : oldData;
    return updateCallback ? updateCallback(oldData, successData) : newData;
  })(),
  statusCode: successDataStatusCode || statusCode,
  error: false,
  lastUpdated: generateTimeStamp(),
  isError: false,
});
