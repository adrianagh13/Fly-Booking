import React, { useState } from 'react';
import { BoldText, GeneralButton, PickerPassengers, FlightDetails, ArrowButton } from '../../components';
import {ContainerTop} from '../../components/Styled/generals';
import {PickerContainer } from '../styled';

export const Passengers = (props) => {

  const [passengers, setPassengers] = useState('')
  return (
    <ContainerTop>
      <ArrowButton navigation={props.navigation} />
      <FlightDetails
        OriginCity={props.route.params.originCity}
        OriginCountry={props.route.params.originCountry}
        DestinationCity={props.route.params.destinationCity}
        DestinationCountry={props.route.params.destinationCountry}
        Date={props.route.params.date}
        noBorder
      />
      <PickerContainer>
        <BoldText text={'How many passengers?'} />
      </PickerContainer>
      <PickerPassengers setPassengers={setPassengers} selectedNumber={passengers} />
      <GeneralButton
        text={'Next'}
        onPress={'FinalDetails'}
        navigation={props.navigation}
        origin={props.route.params.origin}
        destination={props.route.params.destination}
        date={props.route.params.date}
        passengers={passengers}
        />
    </ContainerTop>
  );
};
