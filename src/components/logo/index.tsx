import { Image, View } from 'react-native';

import { imagesLogoPizzaria } from 'PizzariaSystemApp/assets/images';

export const Logo = () => {

  return (
    <View>
      <Image source={imagesLogoPizzaria.image.logo} alt="Logo" />
    </View>
  );
};