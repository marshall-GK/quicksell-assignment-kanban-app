const useStyles = (theme?: any) => ({
  productCardContainer: {
    display: 'grid',
    gridTemplateColumns: '100px 132px 50px',
    columnGap: '10px',
    backgroundColor: '#0a0c10',
    width: '300px',
    borderRadius: '10px',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px',
  },
  productImageContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    
    // position: 'relative',
    '& div': {
      zIndex: '4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'aliceblue',
      // position: 'absolute',
    },
    '& div:nth-child(2)': {
      marginLeft: '-17px',
      zIndex: '3'
    },
    '& div:nth-child(3)': {
      marginTop: '-10px',
      zIndex: '2'
    },
    '& div:nth-child(4)': {
      marginLeft: '-17px',
      marginTop: '-10px',
      zIndex: '1'
    },
  },
  errorImage: {
    border: 'solid 1px white',
    padding: '5px',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    boxShadow: '0px 0px 5px white',
  }
});

export default useStyles;
