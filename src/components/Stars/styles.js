import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Container = styled.View`
    width: ${wp('35')};
    height: ${hp('4')};
    justify-content: center;
`;  