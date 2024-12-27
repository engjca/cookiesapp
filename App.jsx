import React, { Component } from "react";
import { 
  SafeAreaView, 
  View, 
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "Good luck.",
      img: require("./src/biscoito.png"),
      open: false
    }
    this.openCookie = this.openCookie.bind(this);
    this.phraseList = [
      "It takes courage to grow up and become who you really are.",
      "Nothing is impossible. The word itself says 'I'm possible!'",
      "Champions keep playing until they get it right.",
      "Try to be a rainbow in someone's cloud.",
      "Give light and people will find the way."
    ];
  }

  openCookie(){
    let number = Math.floor(Math.random() * this.phraseList.length);
    this.setState({
      phrase: this.phraseList[number],
      img: require("./src/biscoitoAberto.png"),
      open: true
    });
  }

  render() {
    return(
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View alignItems="center">
          <View style={{ flex: 1 }}>
            <Text style={ styles.titleText }>{ 'Fortune\nCookie' }</Text>
          </View>

          <View style={{ flex: 3, alignItems: "center" }}>
            <Image source={ this.state.img } style={ styles.img } />
            <Text style={ styles.phraseText }>"{ this.state.phrase }"</Text>
          </View>

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <TouchableOpacity style={ styles.buttonCookie } onPress={ this.state.open === true ? null : this.openCookie }>
                <View style={ styles.buttonArea }>
                  <Text style={ styles.buttonText }>{ this.state.open === true ? "Opened" : "Open Cookie" }</Text>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  titleText:{
    fontSize: 25,
    fontWeight: "bold",
    color: "orange",
    textAlign: "center",
    marginTop: 20
  },
  img:{
    width: 250,
    height: 250
  },
  phraseText:{
    fontSize: 25,
    fontWeight: 900,
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  buttonCookie:{
    width: 200,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20
  },
  buttonArea:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText:{
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default App;