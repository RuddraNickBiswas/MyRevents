import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { decrement,  increment } from './testReducer'


export default function SandBox () {
    const data = useSelector(state =>  state.test.data) 
    const dispatch = useDispatch()
    return (
        <>
             <h1>Testing 123</h1>
             <h2> deta is : {data} </h2>
             <Button onClick ={() => {dispatch(increment(20))}} content ="Increment" color = "green"/>
             <Button onClick ={() => {dispatch(decrement(10))}} content ="Decrement" color = "red"/>
        </>
    )
}