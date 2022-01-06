import React from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { CalendarContainer } from './styled';

LocaleConfig.locales['en'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'June', 'July.', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: "Today"
  };
  LocaleConfig.defaultLocale = 'en';
  

export const CalendarDate = () => {



    let today = new Date().toLocaleDateString()

    return (
        <CalendarContainer>
            <Calendar
                style={{
                    height: 380,
                    width: 340
                }}
                theme={{
                    textDayFontSize: 20,
                    textMonthFontSize: 24,
                    textMonthFontWeight: 'bold'
                }}
                // Initially visible month. Default = now
                current={today}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={today}
                
            />
        </CalendarContainer>
    )
}

