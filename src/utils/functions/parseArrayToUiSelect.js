/**
 * Created by squad on 02/08/16.
 */

export default function (sourceArray, key) {
  return sourceArray.map( (item) => {
    return {
      text: item[key],
      value: item
    }
  })
}