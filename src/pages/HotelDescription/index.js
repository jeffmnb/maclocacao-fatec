import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';

import {
    Container,
    SlideImages,
    Title,
    BtnBack,
    BtnFavorite,
    Price,
    Location,
    Details,
    AreaDetails,
    Area,
    TitleDetail,
    TitleArea,
    TxtBenefits,
    AreaBenefits,
    TxtItem,
    AreaStars
} from './styles';

import { Button } from '../../components/Button';

import { MaterialIcons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import imgcard from '../../assets/imgcard.jpg';
import { Stars } from '../../components/Stars';

export const HotelDescription = () => {

    const [liked, setLiked] = useState(true);

    const Navigation = useNavigation();

    const Route = useRoute();

    const { item } = Route.params;

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SlideImages>

                    <FlatList
                        keyExtractor={item => String(item)}
                        data={item.fotos}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (

                            <Image source={{ uri: item }} resizeMode='cover' style={{ borderRadius: widthPercentageToDP('8'), width: widthPercentageToDP('95'), height: heightPercentageToDP('33') }} />

                        )}
                    />

                    <View style={{ position: 'absolute', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <BtnBack onPress={() => Navigation.goBack()}>
                            <MaterialIcons name="keyboard-arrow-left" size={RFValue(28.5)} color={theme.colors.blue} />
                        </BtnBack>

                        <BtnFavorite onPress={() => setLiked(oldValue => !oldValue)}>
                            {liked
                                ? <AntDesign name="hearto" size={RFValue(24)} color={theme.colors.blue} />
                                : <AntDesign name="heart" size={RFValue(24)} color={theme.colors.tomato} />
                            }
                        </BtnFavorite>
                    </View>

                </SlideImages>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title numberOfLines={2}>{item.nome}</Title>

                    <AreaStars>
                        <Stars value={5} />
                    </AreaStars>
                </View>

                {/* 
                <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                        <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                        <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                        <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                        <FontAwesome name="star" size={RFValue(18)} color={theme.colors.blue} />
                     */}


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Price>R$ {item.price} / dia.</Price>
                </View>

                <Location>{item.endereco.rua}, {item.endereco.numero}</Location>


                <Details>Detalhes</Details>

                <AreaDetails>
                    <Area>
                        <Ionicons name="expand" size={RFValue(26)} color={theme.colors.blue} />
                        <TitleArea>{item.details.area}m2</TitleArea>
                    </Area>

                    <Area>
                        <Ionicons name="bed" size={RFValue(26)} color={theme.colors.blue} />
                        <TitleDetail>{item.details.numBed}</TitleDetail>
                    </Area>

                    <Area>
                        <FontAwesome name="bathtub" size={RFValue(26)} color={theme.colors.blue} />
                        <TitleDetail>{item.details.numBath}</TitleDetail>
                    </Area>
                </AreaDetails>

                <TxtBenefits>Vantagens do imóvel</TxtBenefits>

                <AreaBenefits>
                    <View style={{ flex: 1, paddingLeft: widthPercentageToDP('3.5'), width: widthPercentageToDP('43.5') }}>
                        <TxtItem numberOfLines={1}>{item.actions[0] && `- ${item.actions[0].title}`}</TxtItem>
                        <TxtItem>{item.actions[2] && `- ${item.actions[2].title}`}</TxtItem>
                        <TxtItem>{item.actions[4] && `- ${item.actions[4].title}`}</TxtItem>
                    </View>

                    <View style={{ flex: 1, paddingLeft: widthPercentageToDP('3.5'), width: widthPercentageToDP('43.5') }}>
                        <TxtItem numberOfLines={1}>{item.actions[1] && `- ${item.actions[1].title}`}</TxtItem>
                        <TxtItem>{item.actions[3] && `- ${item.actions[3].title}`}</TxtItem>
                        <TxtItem>{item.actions[5] && `- ${item.actions[5].title}`}</TxtItem>
                    </View>
                </AreaBenefits>

                <View style={{ alignSelf: 'center', marginTop: heightPercentageToDP('4'), marginBottom: heightPercentageToDP('4') }}>
                    <Button title={'Alugar'} onpress={() => Navigation.navigate('ConfirmHotel')} />
                </View>

            </ScrollView>
        </Container>
    );
}