
pragma solidity 0.4.24;
 
/**
 * @title Lockable Token
 * @author info@remiit.io
 */
contract Lockable {
    bool public tokenTransfer;
    address public owner;

    /**
     * @dev They can transfer even if tokenTranser flag is false.
     */
    mapping(address => bool) public unlockAddress;

    /**
     * @dev They cannot transfer even if tokenTransfer flag is true.
     */
    mapping(address => bool) public lockAddress;

    event Locked(address lockAddress, bool status);
    event Unlocked(address unlockedAddress, bool status);

    /**
     * @dev check whether can tranfer tokens or not.
     */
    modifier isTokenTransfer {
        if(!tokenTransfer) {
            require(unlockAddress[msg.sender]);
        }
        _;
    }

    /**
     * @dev check whether registered in lockAddress or not
     */
    modifier checkLock {
        require(!lockAddress[msg.sender]);
        _;
    }

    modifier isOwner
    {
        require(owner == msg.sender);
        _;
    }

    constructor()
    public
    {
        tokenTransfer = false;
        owner = msg.sender;
    }

    /**
     * @dev add or remove in lockAddress(blacklist)
     */
    function setLockAddress(address target, bool status)
    external
    isOwner
    {
        require(owner != target);
        lockAddress[target] = status;
        emit Locked(target, status);
    }

    /**
     * @dev add or remove in unlockAddress(whitelist)
     */
    function setUnlockAddress(address target, bool status)
    external
    isOwner
    {
        unlockAddress[target] = status;
        emit Unlocked(target, status);
    }
}