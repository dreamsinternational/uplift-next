'use client'
import CountUp from 'react-countup';

export function Counter({time}:{time:number}){
    return (<CountUp duration={3} end={time} />)  
}