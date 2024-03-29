import React, { useMemo } from "react";
import { Text, View } from "@react-pdf/renderer";
import useHtmlToText from "../../../hooks/useHtmlToText";

const StartPage = ({ data }) => {
  console.log("[data]", data);
  const {
    therapistName,
    partnerOrganizationName,
    partnerUserEmail,
    clientStreetName,
    clientHousingType,
    clientNumberFloors,
    clientIsVeteran,
    clientTenantType,
    clientHasHoa,
    clientLivesWith,
    clientInaccessibleAreas,
    clientAssitiveDevices,
    clientHeight,
    clientWeight,
    clientReferredBy,
    clientFallResultInInjury,
    clientFallResultInHospitalization,
    clientFallResultInRehab,
    clientFallLocation,
    clientFallRoomId,
    clientFallCause,
    clientFallCauseComments,
    concernList,
    rooms,
    clientNote,
    additionalClientRecommendations,
  } = data;
  const clientNoteText = useHtmlToText(clientNote);
  const additionalServiceText = useHtmlToText(additionalClientRecommendations);
  console.log("[concernList]", concernList);

  const titleStyles = useMemo(
    () => ({
      backgroundColor: "#6984c2",
      borderColor: "#5a70a3",
      fontSize: 16,
      marginBottom: 7,

      color: "#FFFFFF",
      paddingLeft: 8,
      paddingRight: 4,
      paddingTop: 4,
      paddingBottom: 0,
      display: "inline",
      marginRight: "auto",
      borderWidth: 2,
      fontWeight: 500,
    }),
    []
  );

  const styles = useMemo(
    () => ({
      hero: {
        fontSize: 12,
        paddingRight: 15,
        marginBottom: 40,
        marginTop: 20,
        textAlign: "center",
        title: {
          fontSize: 18,
          fontWeight: 900,
        },
        subtitle: {
          fontSize: 16,
          marginTop: 10,
          color: "#333333",
        },
      },
      generalInfo: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 26,
        },
        title: { ...titleStyles },
        table: {
          display: "table",
          width: "auto",
          borderStyle: "solid",
          borderWidth: 1,
          borderRightWidth: 0,
          borderBottomWidth: 0,
        },
        tableRow: {
          margin: "auto",
          flexDirection: "row",
        },
        tableCol: {
          width: "33.33%",
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
      specialConsiderations: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 40,
        },
        title: {
          ...titleStyles,
        },
        assertiveDevices: {
          marginLeft: 20,
        },
      },
      fallInfo: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 26,
        },
        title: {
          ...titleStyles,
        },
        table: {
          display: "table",
          width: "auto",
          borderStyle: "solid",
          borderWidth: 1,
          borderRightWidth: 0,
          borderBottomWidth: 0,
        },
        tableRow: {
          margin: "auto",
          flexDirection: "row",
        },
        tableCol: {
          width: "33.33%",
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
      concernList: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 26,
        },
        title: {
          ...titleStyles,
        },
        description: {
          marginBottom: 10,
        },
        table: {
          display: "table",
          width: "auto",
          borderStyle: "solid",
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
        tableCol1: {
          width: "15%",
          borderStyle: "solid",
          borderWidth: 1,
          borderLeftWidth: 0,
          borderTopWidth: 0,
        },
        tableCol2: {
          width: "85%",
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
      roomSummary: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 26,
        },
        title: {
          ...titleStyles,
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
      clientSummary: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 40,
        },
        title: {
          ...titleStyles,
        },
        assertiveDevices: {
          marginLeft: 20,
        },
      },
      additionalService: {
        wrapper: {
          fontSize: 12,
          paddingRight: 15,
          marginBottom: 40,
        },
        title: {
          ...titleStyles,
        },
        assertiveDevices: {
          marginLeft: 20,
        },
      },
    }),
    [titleStyles]
  );
  return (
    <View>
      {/* header1 information */}
      <View style={styles.hero}>
        <Text style={styles.hero.title}>
          {therapistName} of {partnerOrganizationName}
        </Text>
        <Text style={styles.hero.subtitle}>
          Client Information: {partnerUserEmail}
        </Text>
      </View>
      {/* general information */}
      <View style={styles.generalInfo.wrapper}>
        {/* <View
          style={{
            display: "block",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        > */}
        <Text style={styles.generalInfo.title}>General</Text>
        {/* </View> */}
        <View style={styles.generalInfo.table}>
          <View style={styles.generalInfo.tableRow}>
            <View style={styles.generalInfo.tableCol}>
              <Text style={styles.generalInfo.tableCell}>
                Street Name: {"\n"} {clientStreetName}
              </Text>
            </View>
            <View style={styles.generalInfo.tableCol}></View>
            <View style={styles.generalInfo.tableCol}></View>
          </View>
          <View style={styles.generalInfo.tableRow}>
            <View style={styles.generalInfo.tableCol}>
              <Text style={styles.generalInfo.tableCell}>
                Housing Type: {"\n"} {clientHousingType}
              </Text>
            </View>
            <View style={styles.generalInfo.tableCol}>
              <Text style={styles.generalInfo.tableCell}>
                Nbs Flrs: {"\n"} {clientNumberFloors}
              </Text>
            </View>
            <View style={styles.generalInfo.tableCol}>
              <Text style={styles.generalInfo.tableCell}>
                Is Veteran: {"\n"} {clientIsVeteran}
              </Text>
            </View>
          </View>
          <View style={styles.generalInfo.tableRow}>
            <View style={styles.generalInfo.tableCol}>
              <Text style={styles.generalInfo.tableCell}>
                Tenant Type: {"\n"} {clientTenantType}
              </Text>
            </View>
            <View style={styles.generalInfo.tableCol}>
              <Text style={styles.generalInfo.tableCell}>
                Has HOA: {"\n"} {clientHasHoa}
              </Text>
            </View>
            <View style={styles.generalInfo.tableCol}>
              <Text style={styles.generalInfo.tableCell}>
                Lives With: {"\n"} {clientLivesWith}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Special Considerations */}
      <View style={styles.specialConsiderations.wrapper}>
        <Text style={styles.specialConsiderations.title}>
          Special Considerations
        </Text>
        <Text>Inaccessible Areas: {clientInaccessibleAreas}</Text>
        <Text>Assistive Devices:</Text>
        <Text style={styles.specialConsiderations.assertiveDevices}>
          {clientAssitiveDevices}
        </Text>
        <Text>Height: {clientHeight}</Text>
        <Text>Weight: {clientWeight}</Text>
        <Text>Referred By: {clientReferredBy}</Text>
      </View>
      {/* Fall Information */}
      <View style={styles.fallInfo.wrapper}>
        <Text style={styles.fallInfo.title}>Fall Information</Text>
        <View style={styles.fallInfo.table}>
          <View style={styles.fallInfo.tableRow}>
            <View style={styles.fallInfo.tableCol}>
              <Text style={styles.fallInfo.tableCell}>
                Result in Injury? {"\n"} {clientFallResultInInjury || "No"}
              </Text>
            </View>
            <View style={styles.fallInfo.tableCol}>
              <Text style={styles.fallInfo.tableCell}>
                Result In Hospitalization? {"\n"}{" "}
                {clientFallResultInHospitalization || "No"}
              </Text>
            </View>
            <View style={styles.fallInfo.tableCol}>
              <Text style={styles.fallInfo.tableCell}>
                Fall Rehab: {"\n"} {clientFallResultInRehab || "No"}
              </Text>
            </View>
          </View>
          <View style={styles.fallInfo.tableRow}>
            <View style={styles.fallInfo.tableCol}>
              <Text style={styles.fallInfo.tableCell}>
                Where did fall Occur?
                {"\n"} {clientFallLocation || "N/a"}
              </Text>
            </View>
            <View style={styles.fallInfo.tableCol}>
              <Text style={styles.fallInfo.tableCell}>
                What Room? {"\n"} {clientFallRoomId || "N/a"}
              </Text>
            </View>
            <View style={styles.fallInfo.tableCol}>
              <Text style={styles.fallInfo.tableCell}>
                Cause of the Fall? {"\n"} {clientFallCause || "N/a"}
              </Text>
            </View>
          </View>
          <View style={styles.fallInfo.tableRow}>
            <View style={styles.fallInfo.tableCol}>
              <Text style={styles.fallInfo.tableCell}>
                Fall Notes: {"\n"} {clientFallCauseComments}
              </Text>
            </View>
            <View style={styles.fallInfo.tableCol}></View>
            <View style={styles.fallInfo.tableCol}></View>
          </View>
        </View>
      </View>
      {/* Concerns List */}
      {concernList && (
        <View style={styles.concernList.wrapper} wrap={false}>
          <Text style={styles.concernList.title}>Concerns List</Text>
          <View style={styles.concernList.table}>
            <View style={styles.concernList.tableHeaderRow}>
              <View style={styles.concernList.tableCol1}>
                <Text style={styles.concernList.tableCell}>Concern</Text>
              </View>
              <View style={styles.concernList.tableCol2}>
                <Text style={styles.concernList.tableCell}>Note</Text>
              </View>
            </View>
            {concernList.map((concern) => (
              <View
                key={concern.concernName}
                style={styles.concernList.tableRow}
              >
                <View style={styles.concernList.tableCol1}>
                  <Text style={styles.concernList.tableCell}>
                    {concern.concernName}
                  </Text>
                </View>
                <View style={styles.concernList.tableCol2}>
                  <Text style={styles.concernList.tableCell}>
                    {concern.concernNote}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Room and Scoring Summary */}
      <View style={styles.roomSummary.wrapper} wrap={false}>
        <Text style={styles.roomSummary.title}>Room and Scoring Summary</Text>
        <Text style={styles.roomSummary.description}>
          The following assessed rooms each indicate the Personal Safety Rating
          verbally given by the client and the Accessibility Rating of the
          environment scored by the Assessor.
        </Text>
        <View style={styles.roomSummary.table}>
          <View style={styles.roomSummary.tableHeaderRow}>
            <View style={styles.roomSummary.tableHeaderCol1}>
              <Text style={styles.roomSummary.tableCell}>Room Summary</Text>
            </View>
            <View style={styles.roomSummary.tableHeaderCol2}>
              <Text style={styles.roomSummary.tableCell}>
                Initial Assessment
              </Text>
              <View style={styles.roomSummary.tableHeaderCol2Inner.wrapper}>
                <View style={styles.roomSummary.tableHeaderCol2Inner.cell1}>
                  <Text style={styles.roomSummary.tableCell}>
                    Safety Rating
                  </Text>
                </View>
                <View style={styles.roomSummary.tableHeaderCol2Inner.cell2}>
                  <Text style={styles.roomSummary.tableCell}>
                    Accessibility Rating
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.roomSummary.tableHeaderCol2}>
              <Text style={styles.roomSummary.tableCell}>
                Follow-Up Assessment
              </Text>
              <View style={styles.roomSummary.tableHeaderCol2Inner.wrapper}>
                <View style={styles.roomSummary.tableHeaderCol2Inner.cell1}>
                  <Text style={styles.roomSummary.tableCell}>
                    Safety Rating
                  </Text>
                </View>
                <View style={styles.roomSummary.tableHeaderCol2Inner.cell2}>
                  <Text style={styles.roomSummary.tableCell}>
                    Accessibility Rating
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {rooms &&
            rooms.map((room) => (
              <View
                key={room.roomName + room.location}
                style={styles.roomSummary.tableRow}
              >
                <View style={styles.roomSummary.tableCol1}>
                  <Text style={styles.roomSummary.tableCell}>
                    {room.roomName}: {room.location}
                  </Text>
                </View>
                <View style={styles.roomSummary.tableCol2}>
                  <Text style={styles.roomSummary.tableCell}>
                    {room.roomPreassessmentSafetyScore
                      ? `${room.roomPreassessmentSafetyScore} %`
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.roomSummary.tableCol3}>
                  <Text style={styles.roomSummary.tableCell}>
                    {room.roomPreassessmentAccessibilityScore
                      ? `${room.roomPreassessmentAccessibilityScore} %`
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.roomSummary.tableCol2}>
                  <Text style={styles.roomSummary.tableCell}>
                    {room.roomPostassessmentSafetyScore
                      ? `${room.roomPostassessmentSafetyScore} %`
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.roomSummary.tableCol3}>
                  <Text style={styles.roomSummary.tableCell}>
                    {room.roomPostassessmentAccessibilityScore
                      ? `${room.roomPostassessmentAccessibilityScore} %`
                      : "N/A"}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </View>
      <View style={styles.clientSummary.wrapper}>
        <Text style={styles.clientSummary.title}>Client Summary</Text>
        <Text> {clientNoteText}</Text>
      </View>
      <View style={styles.clientSummary.wrapper}>
        <Text style={styles.clientSummary.title}>
          Additional Services Recommendations
        </Text>
        <Text> {additionalServiceText}</Text>
      </View>
    </View>
  );
};

export default StartPage;
