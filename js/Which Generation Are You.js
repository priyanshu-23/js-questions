function generation(x,y) {
    const generations = {
      "-3": ["great grandfather", "great grandmother"],
      "-2": ["grandfather", "grandmother"],
      "-1": ["father", "mother"],
       0: ["me!", "me!"],
       1: ["son", "daughter"],
       2: ["grandson",  "granddaughter"],
       3: ["great grandson",  "great granddaughter"]
    }
    return generations[x][y === "m" ? 0 : 1]
  }