import image from 'assets/feedback.svg';
import s from 'Components/Header/Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <h1>Feel free to drop us your feedback.</h1>

      <img
        src={image}
        alt="A woman is sitting on the floor and working on a laptop (vector illustration)"
      />
    </header>
  );
};

export default Header;
