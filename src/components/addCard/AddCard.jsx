import { useState, useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { CardsContext } from '../../store/cards';
import { CARD_COMPANY_LIST } from '../../constants';
import AddCardForm from './cardForm/AddCardForm';
import Card from '../card/Card';
import CardCompany from './CardCompany';

function AddCard() {
  const { setCards } = useContext(CardsContext);
  const [modalVisible, handleModal] = useReducer((visible) => !visible, true);
  const [card, setCard] = useState({
    company: '',
    theme: '',
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expireMonth: '',
    expireYear: '',
    ownerName: '',
    securityCode: '',
    firstPassword: '',
    secondPassword: '',
  });

  const updateCard = (name, value) => {
    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  };

  const addCardList = () => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const handleCompany = (company, theme) => {
    setCard((prevCardInfo) => ({
      ...prevCardInfo,
      company,
      theme,
    }));
    handleModal();
  };

  return (
    <>
      <div className="header-wrapper">
        <Link to="/react-payments">
          <div className="back-button" />
        </Link>
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card card={card} />
      <AddCardForm card={card} updateCard={updateCard} addCardList={addCardList} />
      {modalVisible && (
        <div className="modal-dimmed">
          <div className="modal">
            <div className="flex-wrap">
              {CARD_COMPANY_LIST.map(({ company, theme }) => (
                <CardCompany
                  key={uuid()}
                  company={company}
                  theme={theme}
                  handleCompany={handleCompany}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCard;
