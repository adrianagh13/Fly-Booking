import React from 'react'
import { BoldText, GeneralButton, CalendarDate, FlightDetails } from '../../components'
import { ContainerCenter } from '../../components/Styled/generals'
import {View} from 'react-native'

export const Date = () => {
    return (
        <ContainerCenter>
            <FlightDetails
                OriginCity={"BEG"}
                OriginCountry={"Serbia"}
                DestinationCity={"AMS"}
                DestinationCountry={"Netherlands"}
            />
            <BoldText text={'Select Date'}/>
            <CalendarDate/>
            <GeneralButton text={'Next'}/>
        </ContainerCenter>
    )
}


