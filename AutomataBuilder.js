class AutomataBuilder {
  lowerCaseCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  specialCharacters = ["-", "_", "."];

  at = ["@"];

  dot = ["."];

  alphabet = this.lowerCaseCharacters.concat(
    this.digits,
    this.specialCharacters,
    this.at,
    this.dot,
    this.domains
  );

  node1 = new AFDNode(
    "q1",
    true,
    false,
    [],
    Utils.transformPosition(100),
    Utils.transformPosition(210),
    this._context
  );
  node2 = new AFDNode(
    "q2",
    false,
    false,
    [],
    Utils.transformPosition(300),
    Utils.transformPosition(210),
    this._context
  );
  node3 = new AFDNode(
    "q3",
    false,
    false,
    [],
    Utils.transformPosition(500),
    Utils.transformPosition(210),
    this._context
  );
  node4 = new AFDNode(
    "q4",
    false,
    false,
    [],
    Utils.transformPosition(700),
    Utils.transformPosition(210),
    this._context
  );
  node5 = new AFDNode(
    "q5",
    false,
    false,
    [],
    Utils.transformPosition(550),
    Utils.transformPosition(400),
    this._context
  );
  node6 = new AFDNode(
    "q6",
    false,
    true,
    [],
    Utils.transformPosition(200),
    Utils.transformPosition(440),
    this._context
  );

  transition12 = new AFDTransition(
    this.node1,
    this.node2,
    this.lowerCaseCharacters,
    this._nodeRadius,
    this._context,
    10,
    -30,
    "[a-z]"
  );
  transition22 = new AFDTransition(
    this.node2,
    this.node2,
    this.lowerCaseCharacters.concat(this.digits, this.specialCharacters),
    this._nodeRadius,
    this._context,
    10,
    -90,
    "[a-z], [0-9], [-_.]"
  );
  transition23 = new AFDTransition(
    this.node2,
    this.node3,
    this.at,
    this._nodeRadius,
    this._context,
    10,
    -30,
    "[@]"
  );
  transition34 = new AFDTransition(
    this.node3,
    this.node4,
    this.lowerCaseCharacters,
    this._nodeRadius,
    this._context,
    10,
    -30,
    "[a-z]"
  );
  transition44 = new AFDTransition(
    this.node4,
    this.node4,
    this.lowerCaseCharacters,
    this._nodeRadius,
    this._context,
    10,
    -90,
    "[a-z]"
  );
  transition45 = new AFDTransition(
    this.node4,
    this.node5,
    this.dot,
    this._nodeRadius,
    this._context,
    15,
    25,
    "[.]"
  );
  transition56 = new AFDTransition(
    this.node5,
    this.node6,
    this.lowerCaseCharacters,
    this._nodeRadius,
    this._context,
    15,
    25,
    "[a-z]"
  );
  transition66 = new AFDTransition(
    this.node6,
    this.node6,
    this.lowerCaseCharacters,
    this._nodeRadius,
    this._context,
    15,
    -90,
    "[a-z]"
  );

  constructor(nodeRadius, context) {
    this._nodeRadius = nodeRadius;
    this._context = context;
    this._states = [
      this.node1,
      this.node2,
      this.node3,
      this.node4,
      this.node5,
      this.node6,
    ];

    this._transitions = [
      this.transition12,
      this.transition22,
      this.transition23,
      this.transition34,
      this.transition44,
      this.transition45,
      this.transition56,
      this.transition66,
    ];

    this.mapTransitions();
  }

  get states() {
    return this._states;
  }

  get transitions() {
    return this._transitions;
  }

  mapTransitions() {
    this.node1.transitions = [this._transitions[0]];
    this.node2.transitions = [this.transitions[1], this.transitions[2]];
    this.node3.transitions = [this.transitions[3]];
    this.node4.transitions = [this.transitions[4], this.transitions[5]];
    this.node5.transitions = [this.transitions[6]];
    this.node6.transitions = [this.transitions[7]];
  }
}
