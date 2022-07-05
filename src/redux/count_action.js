import {INCREMENT, DECREMENT} from './constant'



export const creatIncrementAtion = data => ({type: INCREMENT, data})
export const creatDecrementAtion = data => ({type: DECREMENT, data})

export const creatIncrementAsyncAtion = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(creatIncrementAtion(data))
        }, time);
    }
}