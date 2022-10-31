/**
 * @file Implements Account Type enum used by User model
 */
var AccountType;
(function (AccountType) {
    AccountType["Personal"] = "PERSONAL";
    AccountType["Academic"] = "ACADEMIC";
    AccountType["Professional"] = "PROFESSIONAL";
})(AccountType || (AccountType = {}));
export default AccountType;
