// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol" ;
import "@openzeppelin/contracts/access/Ownable.sol";

contract CrucibleTest is  ERC20, Ownable {
    constructor() ERC20("Crucible Test", "TEST") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

