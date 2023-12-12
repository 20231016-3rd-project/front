import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StMain } from '../../../components/Stmain';
import axios from 'axios';

// report 객체의 타입 정의
interface Report {
  reviewId: number;
  memberProfilePicture: string;
  nickName: string;
  reportAt: string;
  reportContent: string;
  reviewProfilePicture: string;
  reviewAuthor: string;
}

const ReportPage: React.FC = () => {
  const [reportData, setReportData] = useState<any>([]);

  useEffect(() => {
    // API 호출을 위한 함수
    const fetchReports = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        // axios를 사용하여 API 엔드포인트로 GET 요청을 보냄
        const headers = {
          "X-AUTH-TOKEN": accessToken,
        };

        const response = await axios.get('http://3.38.32.91/sunflowerPlate/admin/review/', {
          headers
        });
        // 여기서 응답이 배열인지 확인합니다.
      if (Array.isArray(response.data)) {
        setReportData(response.data);
      } else {
        // 데이터가 배열이 아닌 경우, 오류를 처리하거나 빈 배열을 설정할 수 있습니다.
        console.error("Received data is not an array:", response.data);
        setReportData([]);
      }
    } catch (error) {
      console.error("Fetching reports failed: ", error);
      // 오류 발생 시 빈 배열을 설정하여 .map 함수 오류를 방지합니다.
      setReportData([]);
    }
  };

  fetchReports();
}, []);

const handleDelete = async (reviewId: number) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found');
    }

    const headers = {
      "X-AUTH-TOKEN": accessToken,
    };

    await axios.delete(`http://3.38.32.91/sunflowerPlate/admin/review/delete?reviewId=${reviewId}`, { headers });

    const filteredReports = reportData.filter((report: Report) => report.reviewId !== reviewId);
    setReportData(filteredReports);

    alert('리뷰가 삭제되었습니다');
  } catch (error) {
    console.error("Deleting the report failed: ", error);
    alert('리뷰 삭제에 실패했습니다');
  }
};

  return (
    <StMain>
    <Container>
      <Title>신고내역조회</Title>

      <ReportDataContainer>
      {reportData.map((report: Report) => (
        <ReportItem key={report.reviewId}>
          <ProfileSection>
            <ProfileImage src={report.memberProfilePicture} alt="신고한 사람 프로필" />
            <ProfileInfo>
              <div>신고 한 사람</div>
              <div>{report.nickName}</div>
            </ProfileInfo>
            <DateAndActions>
            <div>{report.reportAt}</div>
            <ButtonBox>
              <button>패스</button>
              <button onClick={() => handleDelete(report.reviewId)}>삭제</button>
            </ButtonBox>
          </DateAndActions>
          </ProfileSection>

          <ReportContent> 
            <p>{report.reportContent}</p>
          </ReportContent>

          <ProfileSection>
            <ProfileImage src={report.reviewProfilePicture} alt="신고 받은 사람 프로필" />
            <ProfileInfo>
              <div>신고 받은 사람</div>
              <div>{report.reviewAuthor}</div>
            </ProfileInfo>
          </ProfileSection>
        </ReportItem>
      ))}
      </ReportDataContainer>
    </Container>
    </StMain>
  );
};

export default ReportPage;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
`;

const Title = styled.div`
  border: 1px solid #e0e0e0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ReportItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  padding: 15px;
  margin-bottom: 20px;
`;

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid #e0e0e0;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateAndActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto; 
  margin-right: 10px;
`;

const ButtonBox = styled.div`
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
  }
  
  button:first-child {
    margin-right: 10px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  button:last-child {
    background-color: #f44336;
    color: white;
    cursor: pointer;
  }
`;

const ReportContent = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;

const ReportDataContainer = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid #e0e0e0;
  overflow-x: auto;
`;