const axios = require("axios");

var kafka = require("kafka-node"),
  Producer = kafka.Producer,
  KeyedMessage = kafka.KeyedMessage,
  client = new kafka.KafkaClient(),
  producer = new Producer(client),
  km = new KeyedMessage("key", "message"),
  payloads = [{ topic: "test", messages: "hello", partition: 0 }];

const getCityBikeInfo = () => {
  axios
    .get("https://api.citybik.es/v2/networks/citycycle")
    .then(function(response) {
      console.log(JSON.stringify(response.data.network.stations[0]));
    })
    .catch(function(error) {
      console.log(error);
    });
};

setInterval(getCityBikeInfo, 5000);