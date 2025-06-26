import "./index.scss";

const DarkMode = ( { isDark, setIsDark } ) => {

  return (
      <label className="switch">
        <input checked={isDark} onChange={() => {setIsDark(!isDark)}} type="checkbox"></input>
        <span className="slider round"></span>
      </label>
  )
};

export default DarkMode;
