import { StyleSheet } from 'react-native';

import { colors, shadows, sizes } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.small,
    marginBottom: sizes.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: sizes.medium,
    paddingHorizontal: sizes.xLarge,
    backgroundColor: name === activeTab ? colors.primary : '#F3F4F8',
    borderRadius: sizes.medium,
    marginLeft: 2,
    ...shadows.medium,
    shadowColor: colors.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: 'DMMedium',
    fontSize: sizes.small,
    color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
  }),
});

export default styles;
