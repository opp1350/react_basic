// 리듀서
export const valuesReducer = (values, {type, payload}) => {
  switch (type) {
    //입력한 값을 목록에 추가
    case 'ADD_VALUES': 
      return [...values, { 'title': payload, 'id': values.length, 'mode' :'reader'}];

    // ?? 
    // case 'SET_INIT_DATA': 
    //   return payload;

    // 수정모드 전환
    case 'CHANGE_MODE__MODIFY': 
      return values.map(val => {
        if (val.id === +payload) {
          if (val.mode === 'reader') {
            val.mode = 'modify'
          } else return val;
        }
        return val;
      });
    // 읽기모드 전환
    case 'CHANGE_MODE__READER': 
      return values.map(val => {
        if (val.id === +payload) {
          if (val.mode !== 'reader') {
            val.mode = 'reader'
          } else return val;
        }
        return val;
      });

    // 기존 데이터 변경
    case 'MODIFY_DATA':
      return values.map(val => {
        if (val.id === +payload.id) {
          val.title = payload.title
        }
        return val;
      })
    default:
      break;
  }
}