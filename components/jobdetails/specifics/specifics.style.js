import { StyleSheet } from 'react-native';

import { colors, font, sizes } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.large,
    backgroundColor: '#FFF',
    borderRadius: sizes.medium,
    padding: sizes.medium,
  },
  title: {
    fontSize: sizes.large,
    color: colors.primary,
    fontFamily: font.bold,
  },
  pointsContainer: {
    marginVertical: sizes.small,
  },
  pointWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: sizes.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.gray2,
    marginTop: 6,
  },
  pointText: {
    fontSize: sizes.medium - 2,
    color: colors.gray,
    fontFamily: font.regular,
    marginLeft: sizes.small,
  },
});

export default styles;
