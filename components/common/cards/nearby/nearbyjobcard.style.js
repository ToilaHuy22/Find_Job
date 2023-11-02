import { StyleSheet } from 'react-native';

import { colors, shadows, sizes } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: sizes.medium,
    borderRadius: sizes.small,
    backgroundColor: '#FFF',
    ...shadows.medium,
    shadowColor: colors.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: sizes.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logImage: {
    width: '70%',
    height: '70%',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: sizes.medium,
  },
  jobName: {
    fontSize: sizes.medium,
    fontFamily: 'DMBold',
    color: colors.primary,
  },
  jobType: {
    fontSize: sizes.small + 2,
    fontFamily: 'DMRegular',
    color: colors.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
});

export default styles;
