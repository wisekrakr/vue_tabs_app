import moment from "moment";

const formatDate = date => {
  return moment(date).format("YYYY-MM-DD");
};

const formatText = text => {
  text.split("\n").map(t => {
    return { t };
  });
};

export default { formatDate, formatText };
