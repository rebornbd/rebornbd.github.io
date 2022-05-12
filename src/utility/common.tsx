import moment from "moment";


const getExperience = (startDate: string, endDate: string) => {
  const validEndDate = (endDate === "Present")
    ? moment(new Date())
    : endDate;

  const mStartDate = moment(startDate);
  const mEndDate = moment(validEndDate);

  const startMonth = (mStartDate.year()*12) + mStartDate.month();
  const endMonth = (mEndDate.year()*12) + mEndDate.month();
  const monthInterval = (endMonth - startMonth + 1);

  const yearsOfExperience = Math.floor(monthInterval / 12);
  const monthsOfExperience = monthInterval % 12;
  const experience = {
    year: yearsOfExperience,
    month: monthsOfExperience
  }
  
  return experience;
}


export {
  getExperience
};
