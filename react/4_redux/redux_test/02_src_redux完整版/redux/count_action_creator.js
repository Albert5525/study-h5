/*
* 给文件专门用于给count组件生成action对象
* */
import {INCREMENT,DECREMENT} from "./constant";

const createIncrementAction = function createIncrementAction(data) {
    return {type: INCREMENT, data};
}

const createDecrementAction = function createDecrementAction(data) {
    return {type: DECREMENT, data};
}

export {createIncrementAction, createDecrementAction};