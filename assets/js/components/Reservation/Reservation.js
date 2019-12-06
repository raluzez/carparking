import React from 'react';
import Button from '../UI/Button/Button';

import '../../../css/components/Reservation/Reservation.scss';

const reservation = React.forwardRef((props, ref) => {
    const date = new Date(props.date)
    return (
        <div className='Reservation_container' 
            style={{height:props.height}}
            ref={ref}>
            <div className='Reservation_header'>
                <span>{`${date.toLocaleDateString('en-EN', {weekday:'long'}).toUpperCase()} `}</span>
                <span>{`${date.toLocaleDateString('en-EN', {month:'short'}).toUpperCase()} ${date.getDate()}`}</span>
                  {/* needs some clean up */}
            </div>
            <div className='Reservation_body'>
                {props.loading && new Date(props.loading).getDate() === date.getDate()
                    ? null
                    : <>
                        <a  data-toggle='tooltip' style={{minHeight:'60%', marginTop:'1em'}}
                            title={`Parking spots: ${props.parkingSpaces} \nReserved: ${props.usedSpaces}`}>
                            <svg className='Reservation_svg'> 
                            {console.log(props)}
                                <circle className='Reservation_circleGreen' 
                                    cx="50%" cy="50%" r="30%"
                                    strokeDasharray={`110% 110%`}/>
                                <circle className='Reservation_circleRed' 
                                    cx="50%" cy="50%" r="30%"
                                    strokeDasharray={`${props.graphStatus.status} 184.2%`}
                                    style={props.graphStatus.isVisible} />
                                <text className='Reservation_text' 
                                    x="50%" y="50%">
                                        {`${(props.usedSpaces/props.parkingSpaces)*100}%`}
                                </text>
                            </svg>
                        </a>
                        
                        {props.userParkingSpot
                            ? <div style={{fontSize:'1.5em', color:'#343a40'}}>Reserved No: <strong>{props.userParkingSpot}</strong></div>
                            : <a data-toggle='tooltip' title='Tip: You can always ask for a switch'>
                                <div style={{fontSize:'1.5em', color:'#343a40'}}>Avalable: <strong>{`${props.parkingSpaces-props.usedSpaces}`}</strong></div>
                              </a>}
                        
                        
                        <Button 
                            text={props.buttonOptions.buttonText} 
                            classname={`Button_${props.buttonOptions.buttonClass}`}
                            buttonStyle={{width:'50%', marginBottom:'1em'}}
                            onclick={props.buttonOptions.buttonClass==='neutral'
                                        ? ()=>props.history.push('/users')
                                        : props.onButtonClick}/>
                        
                        
                    </>
                    }    
            </div>
        </div>
    )
})

export default reservation;