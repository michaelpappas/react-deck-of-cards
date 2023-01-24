import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const BASE_URL = "http://deckofcardsapi.com/api";

function Deck() {
  const [deck, setDeck] = useState({
    data: null,
  });

  const [drawnCards, setDrawnCards] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck() {
      const response = await axios.get(`${BASE_URL}/deck/new/`);
      setDeck({
        data: response.data,
      });
      setLoading(false);
    }
    fetchDeck();
  }, []);

  function handleClick() {
    drawCard();
    setLoading(true);
  }

  async function drawCard() {
    const response = await axios.get(
      `${BASE_URL}/deck/${deck.data.deck_id}/draw`
    );

    const drawnCards = response.data.cards;
    setDrawnCards((prev) => [...prev, drawnCards]);

    setDeck((prev) => ({ ...prev, remaining: response.data.remaining }));
    setLoading(false);
  }

  function renderDrawnCards(){
    console.log('drawnCard 0',drawnCards[0]);
    return (
      <div>
        {/* {drawnCards.map((card) => (
          <Card image={card.image} code={card.code} />
        ))} */}
      </div>
    )
  }
  if (loading) return <i>Loading...</i>;

  return (
    <div>
      <button onClick={handleClick}>Gimme a card.</button>
      <div>
        {renderDrawnCards()}
      </div>
    </div>
  );
}

export default Deck;
