import { useEffect, useState } from "react";
const BASE_URL = "http://deckofcardsapi.com/api";
import axios from "axios";

function Deck() {
  const [deck, setDeck] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const response = await axios.get(`${BASE_URL}/deck/new/`);
      setDeck({
        data: response.data,
        isLoading: false
      });
    }
    fetchDeck();
  }, []);

  function drawCard() {

  }


  if (deck.isLoading) return <i>Loading...</i>;


  return (
    <button onClick={drawCard}>Gimme a card.</button>
  );

}

export default Deck;