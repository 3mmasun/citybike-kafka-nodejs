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
      const station = response.data.network.stations[0];
      console.log(JSON.stringify(station));
      producer.send(
        [{ topic: "test", messages: JSON.stringify(station), partition: 0 }],
        function(err, data) {
          console.log(data);
        }
      );
    })
    .catch(function(error) {
      console.log(error);
    });
};

setInterval(getCityBikeInfo, 5000);
