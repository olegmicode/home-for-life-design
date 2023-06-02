import React, { useMemo } from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import useHtmlToText from "../../../hooks/useHtmlToText";

const RoomPage = ({ room }) => {
  const {
    roomRecommendations,
    preassessmentNotes,
    postassessmentNotes,
    roomPhotos,
  } = room;
  const preassessmentNotesText = useHtmlToText(preassessmentNotes);
  const postassessmentNotesText = useHtmlToText(postassessmentNotes);
  const styles = useMemo(
    () => ({
      wrapper: {
        fontSize: 12,
        paddingRight: 15,
        marginBottom: 40,
      },
      roomSect: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 26,
        },
        title: {
          fontSize: 14,
          marginBottom: 7,
        },
        description: {
          marginBottom: 10,
        },
        table: {
          display: "table",
          width: "auto",
          borderStyle: "solid",
          color: "#333333",
          borderWidth: 1,
          borderRightWidth: 0,
          borderBottomWidth: 0,
        },
        tableHeaderRow: {
          margin: "auto",
          flexDirection: "row",
          backgroundColor: "#efefef",
        },
        tableRow: {
          margin: "auto",
          flexDirection: "row",
        },
        tableHeaderCol1: {
          width: "40%",
          borderStyle: "solid",
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderRightColor: "#888888",
        },
        tableHeaderCol2: {
          width: "30%",
          borderStyle: "solid",
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
          borderRightColor: "#888888",
        },
        tableHeaderCol2Inner: {
          wrapper: {
            flexDirection: "row",
            borderStyle: "solid",
            borderWidth: 0,
            borderTopWidth: 1,
            borderTopColor: "#888888",
          },
          cell1: {
            width: "42%",
            borderStyle: "solid",
            borderWidth: 0,
            borderRightWidth: 1,
            paddingTop: 3,
            paddingBottom: 3,
            borderRightColor: "#888888",
          },
          cell2: {
            width: "58%",
            borderWidth: 0,
            paddingTop: 3,
            paddingBottom: 3,
          },
        },
        tableCol1: {
          width: "40%",
          borderStyle: "solid",
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
        },
        tableCol2: {
          width: "12.5%",
          borderStyle: "solid",
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
        },
        tableCol3: {
          width: "17.5%",
          borderStyle: "solid",
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
        },
        tableCell: {
          margin: "auto",
          fontSize: 10,
          width: "100%",
          textAlign: "center",
          textTransform: "capitalize",
        },
      },
      recommendations: {
        wrapper: {
          fontSize: 12,
          marginBottom: 40,
        },
        title: {
          fontSize: 14,
          marginBottom: 7,
        },
        assertiveDevices: {
          marginLeft: 20,
        },
        content: {
          left: 30,
        },
      },
      initalAssessment: {
        wrapper: {
          fontSize: 12,
          marginBottom: 40,
        },
        title: {
          fontSize: 14,
          marginBottom: 7,
        },
        content: {},
      },
      followupAssessment: {
        wrapper: {
          fontSize: 12,
          marginBottom: 40,
        },
        title: {
          fontSize: 14,
          marginBottom: 7,
        },
        content: {},
      },
      photos: {
        wrapper: {
          fontSize: 12,
          marginBottom: 40,
        },
        title: {
          fontSize: 14,
          marginBottom: 7,
        },
        content: {},
        roomPhotos: {
          wrapper: {},
          image: {
            marginVertical: 10,
            marginHorizontal: 50,
          },
        },
      },
    }),
    []
  );
  console.log("[roomPhotos]", roomPhotos);
  return (
    <View style={styles.wrapper} break>
      {/* Room and Scoring Summary */}
      <View style={styles.roomSect.wrapper}>
        <Text style={styles.roomSect.title}>
          Home Recommendations Based Upon Findings:
        </Text>

        <View style={styles.roomSect.table}>
          <View style={styles.roomSect.tableHeaderRow}>
            <View style={styles.roomSect.tableHeaderCol1}></View>
            <View style={styles.roomSect.tableHeaderCol2}>
              <Text style={styles.roomSect.tableCell}>Initial Assessment</Text>
              <View style={styles.roomSect.tableHeaderCol2Inner.wrapper}>
                <View style={styles.roomSect.tableHeaderCol2Inner.cell1}>
                  <Text style={styles.roomSect.tableCell}>Safety Rating</Text>
                </View>
                <View style={styles.roomSect.tableHeaderCol2Inner.cell2}>
                  <Text style={styles.roomSect.tableCell}>
                    Accessibility Rating
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.roomSect.tableHeaderCol2}>
              <Text style={styles.roomSect.tableCell}>
                Follow-Up Assessment
              </Text>
              <View style={styles.roomSect.tableHeaderCol2Inner.wrapper}>
                <View style={styles.roomSect.tableHeaderCol2Inner.cell1}>
                  <Text style={styles.roomSect.tableCell}>Safety Rating</Text>
                </View>
                <View style={styles.roomSect.tableHeaderCol2Inner.cell2}>
                  <Text style={styles.roomSect.tableCell}>
                    Accessibility Rating
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            key={room.roomName + room.location}
            style={styles.roomSect.tableRow}
          >
            <View style={styles.roomSect.tableCol1}>
              <Text style={styles.roomSect.tableCell}>
                {room.roomName}: {room.location}
              </Text>
            </View>
            <View style={styles.roomSect.tableCol2}>
              <Text style={styles.roomSect.tableCell}>
                {room.roomPreassessmentSafetyScore || "N/A"}
              </Text>
            </View>
            <View style={styles.roomSect.tableCol3}>
              <Text style={styles.roomSect.tableCell}>
                {room.roomPreassessmentAccessibilityScore || "N/A"}
              </Text>
            </View>
            <View style={styles.roomSect.tableCol2}>
              <Text style={styles.roomSect.tableCell}>
                {room.roomPostassessmentSafetyScore || "N/A"}
              </Text>
            </View>
            <View style={styles.roomSect.tableCol3}>
              <Text style={styles.roomSect.tableCell}>
                {room.roomPostassessmentAccessibilityScore || "N/A"}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.recommendations.wrapper}>
        <Text style={styles.recommendations.title}>Room Recommendations:</Text>
        <View style={styles.recommendations.content}>
          {roomRecommendations.map((recommend) => (
            <Text key={recommend.name}>
              •{"  "}
              {recommend.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.initalAssessment.wrapper}>
        <Text style={styles.initalAssessment.title}>
          Initial Assessment Notes:
        </Text>
        <View style={styles.initalAssessment.content}>
          {preassessmentNotesText}
        </View>
      </View>
      <View style={styles.followupAssessment.wrapper}>
        <Text style={styles.followupAssessment.title}>
          Follow-up Assessment Notes:
        </Text>
        <View style={styles.followupAssessment.content}>
          {postassessmentNotesText}
        </View>
      </View>
      <View style={styles.photos.wrapper}>
        <Text style={styles.photos.title}>Photos</Text>
        <View style={styles.photos.content}>
          <Text>
            To view full size photos, click on the report link in footer
          </Text>
          <View style={styles.photos.roomPhotos.wrapper}>
            {roomPhotos.map(({ fileName }) => (
              <Image
                key={fileName}
                src={fileName}
                style={styles.photos.roomPhotos.image}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoomPage;
