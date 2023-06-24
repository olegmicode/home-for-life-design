import { Font } from "@react-pdf/renderer";
import ReDocument from "./common/Document";
import SummaryPage from "./pages/SummaryPage";
import RoomPage from "./pages/RoomPage";
import RePage from "./common/Page";

// Create Document Component
const ReportPDF = ({ data }) => {
  const { rooms } = data;

  return (
    <ReDocument wrap>
      <RePage data={data}>
        <SummaryPage data={data} />
        {rooms &&
          rooms.map((room, i) => (
            <RoomPage
              key={room.roomName + room.location}
              room={room}
              roomNumber={i + 1}
            />
          ))}
      </RePage>
    </ReDocument>
  );
};

export default ReportPDF;
