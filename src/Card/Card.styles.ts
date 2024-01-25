const useStyles = (theme?: any) => ({
  card: {
    width: "300px",
    backgroundColor: "white",
    borderRadius: "10px",
    // height: '100px',
    padding: "15px",
    display: "grid",
    rowGap: "10px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    height: "25px",
    fontSize: "14px",
    color: "grey",
    fontWeight: 400,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "rgb(58 60 65)",
    display: 'flex',
    columnGap: '10px',
    // alignItems: 'baseline'
  },
  cardFooter: {
    display: "flex",
    columnGap: "8px",
  },
  cardTag: {
    border: "solid 1px #e3e3e3a1",
    padding: "2px 5px",
    borderRadius: "5px",
    fontSize: "11px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "grey",
  },
  cardExtra: {},
  cardUserStatusActive: {
    backgroundColor: "green",
  },
  tagStatus: {
    width: "8px",
    height: "8px",
    backgroundColor: "grey",
    borderRadius: "50%",
    marginRight: "5px",
  },
});

export default useStyles;
