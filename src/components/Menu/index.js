const Menu = ({ data, onClick, expanse }) => {
  return (
    <div
      className={expanse ? "menu" : "menu-collapse"}
      onClick={() => onClick(data.id)}
    >
      <div className={"menu-content"}>
        {!expanse && <div className="icon">+</div>}
        {expanse && <div className="icon">-</div>}
        <div className="content-text">
          <h2>{data.title}</h2>
          {expanse && <div>{data.text}</div>}
        </div>
      </div>
    </div>
  );
};

export default Menu;
