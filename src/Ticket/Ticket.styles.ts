const useStyles = (theme?: any) => ({
  cardWrapper: {
    display: "flex",
    columnGap: "30px",
  },
  cardBlock: {
    display: "grid",
    rowGap: "30px",
    alignContent: "baseline",
    minWidth: '300px'
  },
  userTicketsBlock: {
    display: "grid",
    rowGap: "10px",
    textAlign: "left",
  },
  navBar: {
    height: "60px",
    background: "#0000",
    display: 'flex',
    alignItems: 'center',
    padding: '0px 50px',
  },
  mainCardWrapper: {
    backgroundColor: "#f4f5f8",
    padding: "30px 50px",
    minHeight: 'calc(100vh - 127px)'
  },
  cardBlockTitle: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "max-content max-content",
    columnGap: "10px",
    justifyContent: "space-between",
  },
  cardTitle: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "25px max-content 10px",
    columnGap: "10px",
    fontWeight: '600'
  },
  cardActions: {
    display: 'flex',
    columnGap: '10px',
    alignItems: 'center',
    "& span": {
      border: "0px",
      background: "#f4f5f8",
      cursor: 'pointer'
    },
  },
});

export default useStyles;
