import { StyleSheet } from 'react-native';

import { colors, font, sizes } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.large,
    backgroundColor: '#FFF',
    borderRadius: sizes.medium,
    padding: sizes.medium,
  },
  headText: {
    fontSize: sizes.large,
    color: colors.primary,
    fontFamily: font.bold,
  },
  contentBox: {
    marginVertical: sizes.small,
  },
  contextText: {
    fontSize: sizes.medium - 2,
    color: colors.gray,
    fontFamily: font.regular,
    marginVertical: sizes.small / 1.25,
  },
});

export default styles;
