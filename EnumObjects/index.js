var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
console.log(Roles.User);
console.log(Roles.Admin);
console.log(Roles.SuperAdmin);
var RolesCons = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(RolesCons.User);
console.log(RolesCons.Admin);
console.log(RolesCons.SuperAdmin);
