import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-xs px-4 py-2.5 md:px-6 md:py-3.5 font-semibold tracking-wide uppercase transition-colors duration-300 border-2 border-stone-300 rounded-full text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed ',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
