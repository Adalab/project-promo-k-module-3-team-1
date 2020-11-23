const ShareButton = (props) => {
  return (
    <div className="js-form-card js-form">
      <form className="create-card hover js-button-created">
        <i className="far fa-address-card created-card__button-icon"></i>
        <input
          type="button"
          className="create-card__button button__created-title"
          value="Crear tarjeta"
        />
      </form>
    </div>
  );
};
export default ShareButton;
