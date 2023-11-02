import { StyleSheet } from 'react-native';

import { colors, font, sizes } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: sizes.large,
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
  jobTitleBox: {
    marginTop: sizes.small,
  },
  jobTitle: {
    fontSize: sizes.large,
    color: colors.primary,
    fontFamily: font.bold,
    textAlign: 'center',
  },
  companyInfoBox: {
    marginTop: sizes.small / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyName: {
    fontSize: sizes.medium - 2,
    color: colors.primary,
    fontFamily: font.medium,
  },
  locationBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: colors.gray,
  },
  locationName: {
    fontSize: sizes.medium - 2,
    color: colors.gray,
    fontFamily: font.regular,
    marginLeft: 2,
  },
});

export default styles;
