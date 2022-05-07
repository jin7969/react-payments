import PropTypes from 'prop-types';

function Card({ card }) {
  return (
    <div className="card-box">
      <div className={`empty-card bg-${card.theme}`}>
        <div className="card-top">
          <span className="card-text">{card.company}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{`${card.firstCardNumber} ${card.secondCardNumber}`}</span>
            <input
              className="card-text-dot"
              type="password"
              value={card.thirdCardNumber}
              disabled
            />
            <input
              className="card-text-dot"
              type="password"
              value={card.fourthCardNumber}
              disabled
            />
          </div>
        </div>
        <div className="card-bottom__info">
          <span className="card-text name-wrap">{card.ownerName || 'NAME'}</span>
          <span className="card-text">{`${card.expireMonth || 'MM'}/${
            card.expireYear || 'YY'
          }`}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    company: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    firstCardNumber: PropTypes.string.isRequired,
    secondCardNumber: PropTypes.string.isRequired,
    thirdCardNumber: PropTypes.string.isRequired,
    fourthCardNumber: PropTypes.string.isRequired,
    expireMonth: PropTypes.string.isRequired,
    expireYear: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    securityCode: PropTypes.string.isRequired,
    firstPassword: PropTypes.string,
    secondPassword: PropTypes.string,
  }).isRequired,
};

export default Card;
