const useStyles = (theme?: any) => ({
  filterBlock: {
    position: 'relative'
  },
  filterToggle: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
    boxShadow: '0px 0px 5px grey',
    padding: '2px 5px',
    borderRadius: '5px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  expandedFilterBlock: {
    backgroundColor: '#f8f8fa',
    width: '250px',
    height: '100px',
    position: 'absolute',
    zIndex: 2,
    boxShadow: '0px 0px 5px #d7d7d7',
    top: '42px'
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px',
    fontSize: '14px',
    textTransform: 'capitalize'
  }
});

export default useStyles;
