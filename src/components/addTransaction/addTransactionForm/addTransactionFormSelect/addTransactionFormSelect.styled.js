export const selectStyles = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    width: '100%',
    outline: 'none',
    border: 'none',
    marginBottom: '40px',
    '@media screen and (max-width:767px)': {
      width: '280px',
    },
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid var(--disabled-grey-text-color)',
    transition: 'border 250ms linear',
    boxShadow: 'none',
    borderRadius: '0',
    cursor: 'pointer',
    ':hover': {
      borderBottom: '1px solid var(--accent-color-blue)',
    },
    ':focus': {
      borderBottom: '1px solid var(--accent-color-blue)',
    },
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px 0px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: '20px',
    overflow: 'hidden',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = '#fff';
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? color
          ? '#ff6596'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'pointer',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color
          : undefined,
      },
      ':hover': {
        color: 'var(--accent-color-red)',
        backgroundColor: 'white',
      },
      transition: 'color 250ms linear, background-color 250ms linear',
      fontSize: '18px',
      fontWeight: '400',
    };
  },

  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: '#bdbdbd',
    fontSize: '18px',
  }),
};
