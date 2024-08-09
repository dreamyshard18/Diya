const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  const lock = m.contract("Diya", [
    "0x968D2a0946323051a0B803f5eEEA94d9De383874",
  ]);

  return { lock };
});
