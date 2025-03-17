

export default function checkIfLvledUp({ chara, setChara}) {
    if (chara.exp > 4) {
      setChara((prevChara) => ({
        ...prevChara,
        exp: 0,
        lvl:prevChara.lvl+1,
      }));
      return alert("leveled Up!!!")
    }
    return setChara((prevChara) => ({
      ...prevChara,
      exp: chara.exp + 1,
    }));
  }