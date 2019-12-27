const axios = require("axios");

var kafka = require("kafka-node"),
  Producer = kafka.Producer,
  client = new kafka.KafkaClient(),
  producer = new Producer(client)

const getCityBikeInfo = () => {
  axios
    .get("https://api.citybik.es/v2/networks/citi-bike-nyc")
    .then(function(response) {
      console.log(JSON.stringify(response.data));
      producer.send(
        [{ topic: "citibike-nyc", messages: JSON.stringify(response.data), partition: 0 }],
        function(err, data) {
          console.log(data);
        }
      );
    })
    .catch(function(error) {
      console.log(error);
    });
};

getCityBikeInfo()
// setInterval(getCityBikeInfo, 5000);
