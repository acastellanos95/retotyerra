// import logo from './logo.svg';
import { useEffect, useState } from "react";
import ImportImagesInput from "./components/Images";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import InputBedrooms from "./components/InputBedrooms";
import InputPrice from "./components/InputPrice";
import InputBathrooms from "./components/InputBathrooms";
import InputFloors from "./components/InputFloors";
import InputYearBuilt from "./components/InputYearBuilt";
import InputMeterSquared from "./components/InputMeterSquared";
import HasBasement from "./components/hasBasement";
import IsRenovated from "./components/isRenovated";
import HasWaterfront from "./components/HasWaterfront";
import RangeViews from "./components/RangeViews";
import RangeCondition from "./components/RangeCondition";
import RangeGrade from "./components/RangeGrade";
import InputYearRenovated from "./components/InputYearRenovated";
import InputLocation from "./components/InputLocation";
import * as tf from "@tensorflow/tfjs";

const normalize = (tensor) =>
  tf.div(
    tf.sub(tensor, tf.min(tensor)),
    tf.sub(tf.max(tensor), tf.min(tensor))
  );

function App() {
  const [model, setModel] = useState();
  // const [input, setInput] = useState([]);
  const [arrayPredictProperties, setArrayPredictProperties] = useState({
    bedrooms: 1, // 0 ya
    bathrooms: 1, // 1 ya
    sqft_living: 1, // 2 ya
    sqft_lot: 1, // 3 sqft_lot: ya
    floors: 1, // 4 ya
    waterfront: 0, // 5  This feature determines whether a house has a view to waterfront 0 means no 1 means yes. ya
    view: 0, // 6 índice (0-4) de las vistas. ya
    condition: 1, // 7  índice (1-5) del estado de la vivienda. ya
    grade: 1, // 8 índice (1-13) de la calidad de la construcción y diseño. ya
    sqft_above: 0, // 9 área de la parte que está por encima del nivel del suelo (en pies cuadrados). ya
    sqft_basement: 0, // 10  área del sótano (en pies cuadrados). ya
    yr_built: 1900, // 11 año de construcción. ya
    yr_renovated: 0, // 12 año de la última reforma. ya
    lat: 0, // 13 latitud
    long: 0, // 14 longitud
    sqft_living15: 0, // 15 Living room area in 2015(implies-- some renovations)ya
    sqft_lot15: 0, // 16 slotSize area in 2015(implies-- some renovations)ya
  });
  const [price, setPrice] = useState(0);
  const [hasBasement, setHasBasement] = useState(false);
  const [isRenovated, setIsRenovated] = useState(false);
  const [hasWaterfront, setHasWaterfront] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(0);

  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url);
      setModel(model);
      // console.log("model loaded");
    } catch (err) {
      // console.log("load error");
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeForm(e) {
    // console.log(e);
    let arr_price_predict = [
      arrayPredictProperties.bedrooms,
      arrayPredictProperties.bathrooms,
      arrayPredictProperties.sqft_living,
      arrayPredictProperties.sqft_lot,
      arrayPredictProperties.floors,
      arrayPredictProperties.waterfront,
      arrayPredictProperties.view,
      arrayPredictProperties.condition,
      arrayPredictProperties.grade,
      arrayPredictProperties.sqft_above,
      arrayPredictProperties.sqft_basement,
      arrayPredictProperties.yr_built,
      arrayPredictProperties.yr_renovated,
      arrayPredictProperties.lat,
      arrayPredictProperties.long,
      arrayPredictProperties.sqft_living15,
      arrayPredictProperties.sqft_lot15,
      10.0,
      2014,
    ];

    let arr_prueba = [
      3.0,
      1.0,
      1180.0,
      5650.0,
      1.0,
      0.0,
      0.0,
      3.0,
      7.0,
      1180.0,
      0.0,
      1955.0,
      0.0,
      47.5112,
      -122.257,
      340.0,
      5650.0,
      10.0,
      2014.0,
    ];

    const tensor_input = normalize(tf.tensor2d(arr_price_predict, [1, 19]));

    console.log(tensor_input.toString());

    let debug_price = setPredictedPrice(model.predict(tensor_input).dataSync());
    console.log(debug_price);
    console.log(arr_price_predict);
  }

  useEffect(() => {
    tf.ready().then(() => {
      // console.log("TF ready");
      loadModel(
        "https://aqueous-peak-24226.herokuapp.com/modeltfjs/model.json"
      );
    });
  });

  return (
    <div>
      <div className="title">
        <h1>
          Formulario en React con analíticas de un modelo deep learning v 0.0.1
          alpha
        </h1>
      </div>
      <hr />
      <div className="subtitle">
        <h3>Sube las características de tu inmueble</h3>
      </div>
      <form onSubmit={handleSubmit} onChange={handleChangeForm}>
        <Container fluid={false}>
          <Row>
            <Col md="2" className="checkboxes">
              <HasBasement
                setProperties={setArrayPredictProperties}
                hasBasement={hasBasement}
                setHasBasement={setHasBasement}
              />
              <IsRenovated
                setProperties={setArrayPredictProperties}
                isRenovated={isRenovated}
                setIsRenovated={setIsRenovated}
              />
              <HasWaterfront
                setProperties={setArrayPredictProperties}
                hasWaterfront={hasWaterfront}
                setHasWaterfront={setHasWaterfront}
              />
            </Col>
            <Col md="6" className="inputs">
              <ImportImagesInput />
              <InputPrice price={price} setPrice={setPrice} />
              <InputBedrooms
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <InputBathrooms
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <InputFloors
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <InputYearBuilt
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <RangeViews
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <RangeCondition
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <RangeGrade
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <InputMeterSquared
                label="Pies cuadrados de construcción(antes de la renovación)"
                name="sqft_living"
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              <InputMeterSquared
                label="Pies cuadrados de terreno"
                name="sqft_lot"
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
              {hasBasement && (
                <InputMeterSquared
                  label="Pies cuadrados del sótano"
                  name="sqft_basement"
                  properties={arrayPredictProperties}
                  setProperties={setArrayPredictProperties}
                />
              )}
              {hasBasement && (
                <InputMeterSquared
                  label="Pies cuadrados de los niveles superiores al piso"
                  name="sqft_above"
                  properties={arrayPredictProperties}
                  setProperties={setArrayPredictProperties}
                />
              )}
              {isRenovated && (
                <InputYearRenovated
                  properties={arrayPredictProperties}
                  setProperties={setArrayPredictProperties}
                />
              )}
              {isRenovated && (
                <InputMeterSquared
                  label="Pies cuadrados de la construcción después de la renovación"
                  name="sqft_living15"
                  properties={arrayPredictProperties}
                  setProperties={setArrayPredictProperties}
                />
              )}
              {isRenovated && (
                <InputMeterSquared
                  label="Pies cuadrados del lote despues de la renovación(si hubo)"
                  name="sqft_lot15"
                  properties={arrayPredictProperties}
                  setProperties={setArrayPredictProperties}
                />
              )}
              <InputLocation
                properties={arrayPredictProperties}
                setProperties={setArrayPredictProperties}
              />
            </Col>
            <Col md="4" className="analytics">
              <h2>Precio:</h2>
              <h3>{price}</h3>
              <h2>Precio estimado:</h2>
              <h3>
                {isNaN(predictedPrice)
                  ? "Modelo no tiene respuesta"
                  : predictedPrice}
              </h3>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default App;
