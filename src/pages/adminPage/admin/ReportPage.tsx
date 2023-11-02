import { useState } from 'react';
import styled from 'styled-components';
import { StMain } from '../../../components/Stmain';
import reportsData from './reports.json';

const ReportPage = () => {
  const [reportData, setReportData] = useState(reportsData);

  const handleDeleteReport = (reportId) => {
    const updatedData = reportData.filter((report) => report.reviewId !== reportId);
    setReportData(updatedData);
  };

  return (
    <StMain>
    <Container>
      <Title>신고내역조회</Title>

      <ReportDataContainer>
      {reportData.map((report) => (
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
              <button onClick={() => handleDeleteReport(report.reviewId)}>삭제</button>
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
  width: 50%;
  margin: 0 auto;
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
  border-radius: 5px;
`;

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border:1px solid red;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateAndActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto; /* 왼쪽 여백을 최대로 확보하여 오른쪽 끝으로 이동 */
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
  border: 1px solid blue;
  width: 100%;
  height: 50px;
  margin: 0 20px;
  display: flex;
`;

const ReportDataContainer = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid #e0e0e0;
  overflow-x: auto;
`;