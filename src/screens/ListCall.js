import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import { Status } from "../utils/Status";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AirbnbRating } from "react-native-ratings";
export default function ListCall() {
  const data = [
    {
      date: new Date().toLocaleDateString(),
      title: "teste",
      desc: "descrição",
      rating: null,
      status: Status.StatusLabels.finished,
      statusColor: Status.StatusColor.finished,
    },
    {
      date: new Date().toLocaleDateString(),
      title: "teste",
      desc: "descrição",
      status: Status.StatusLabels.canceled,
      rating: 1,
      statusColor: Status.StatusColor.canceled,
    },
  ];
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de chamados</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View key={index} style={[styles.card, styles.shadowProp]}>
            <View style={styles.row}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              {(item.status == Status.StatusLabels.finished &&
                item.rating != undefined) ||
                (item.rating != null && (
                  <View
                    style={[
                      styles.rounded,
                      {
                        backgroundColor: item.statusColor,
                      },
                    ]}
                  ></View>
                )) || (
                  <TouchableOpacity
                    style={styles.passButton}
                    onPress={() => setOpenModal(true)}
                  >
                    <MaterialCommunityIcons
                      color={"#b4c0ce"}
                      name="star-half-full"
                      size={25}
                    />
                  </TouchableOpacity>
                )}
            </View>
            <View>
              <Text>{item.status}</Text>
            </View>
            <Text style={styles.cardDesc}>{item.desc}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
            <AirbnbRating
              defaultRating={item.rating || 0}
              size={12}
              isDisabled={true}
              reviewSize={0}
              reviews={[]}
            />
          </View>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        presentationStyle={"overFullScreen"}
        supportedOrientations={["landscape", "portrait"]}
        onRequestClose={() => {
          setOpenModal(false);
        }}
      >
        <View style={[styles.modalContainer, styles.shadowProp]}>
          <Text>Como você avalia o chamado?</Text>
          <AirbnbRating
            size={20}
            reviewSize={20}
            reviews={["Pessimo", "Ruim", "Mediano", "Bom", "Excelente"]}
          />
          <Button title="Confirmar avaliação" 
            onPress={()=>{
              setOpenModal(false);
              
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4BBFE4",
  },
  card: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    shadowColor: "#52006A",
  },
  cardTitle: {
    fontSize: 20,
  },
  cardDesc: {
    fontSize: 15,
    marginVertical: 10,
  },
  cardDate: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  rounded: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 100,
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 200,
    width: 300,
    top: "30%",
    left: "10%",
  },
  modalTitle: {},
});
