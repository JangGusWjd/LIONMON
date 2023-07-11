import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CheckPassword from "./CheckPassword";
import CheckApplySingle from "./CheckApplySingle";
const CheckApplyZip = () => {
  const { jobListId } = useParams();

  const [selectedRecruitTitle, setSelectedRecruitTitle] = useState(null);

  useEffect(() => {
    fetchJobTitle();
    // fetch recruit title using jobListId if needed
    // setSelectedRecruitTitle(recruitTitle);
  }, []);

  const fetchJobTitle = async () => {
    try {
      const response = await axios.get(
        `http://49.247.33.67:8080/recruit/${jobListId}`
      );
      setSelectedRecruitTitle(response.data.recruitTitle);
    } catch (error) {
      console.error("채용 제목 불러오기 실패", error);
    }
  };

  return (
    <div>
      {jobListId && (
        <CheckPassword
          jobListId={jobListId}
          recruitTitle={selectedRecruitTitle}
        />
      )}
    </div>
  );
};

export default CheckApplyZip;
