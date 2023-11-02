import { StyleSheet } from 'react-native';

import { colors, font, sizes } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.xLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: sizes.small,
  },
  headerTitle: {
    fontSize: sizes.large,
    fontFamily: font.medium,
    color: colors.primary,
  },
  headerBtn: {
    fontSize: sizes.medium,
    fontFamily: font.medium,
    color: colors.gray,
  },
  cardsContainer: {
    marginTop: sizes.medium,
    gap: sizes.small,
  },
});

export default styles;
