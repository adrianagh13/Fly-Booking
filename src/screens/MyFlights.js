import React from 'react'
import { ScrollView } from 'react-native'
import { FlightDetails, AddButton } from '../components'
import { PurpleText } from '../components/Styled/generals'

export const MyFlights = () => {
    return (
        <>
            <ScrollView>
                <PurpleText>My flights</PurpleText>
                <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    DestinationCity={"AMS"}
                    DestinationCountry={"Netherlands"}
                    Date={"september 3, 2020"}
                    Passengers={"2 passengers"}
                />
                <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    DestinationCity={"AMS"}
                    DestinationCountry={"Netherlands"}
                    Date={"september 3, 2020"}
                    Passengers={"2 passengers"}
                />
                <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    DestinationCity={"AMS"}
                    DestinationCountry={"Netherlands"}
                    Date={"september 3, 2020"}
                    Passengers={"2 passengers"}
                />
                <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    DestinationCity={"AMS"}
                    DestinationCountry={"Netherlands"}
                    Date={"september 3, 2020"}
                    Passengers={"2 passengers"}
                />
                <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    DestinationCity={"AMS"}
                    DestinationCountry={"Netherlands"}
                    Date={"september 3, 2020"}
                    Passengers={"2 passengers"}
                />
                <FlightDetails 
                    OriginCity={"BEG"}
                    OriginCountry={"Serbia"}
                    DestinationCity={"AMS"}
                    DestinationCountry={"Netherlands"}
                    Date={"september 3, 2020"}
                    Passengers={"2 passengers"}
                />
            </ScrollView>
            <AddButton/>
        </>
    )
}




