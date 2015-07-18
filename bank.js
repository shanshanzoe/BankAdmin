/**
 * Created by shanshan on 7/17/15.
 */
var BankApp={};//class
var CustomerId;


BankApp.UserProfiles = function UserProfiles(username, password, customerId){
    this.Username=username;
    this.Password=password;
    this.CustomerId=customerId;
}

BankApp.UserInfo= function UserInfo(firstName, lastName, email, gender, mobile){
    this.FirstName=firstName;
    this.LastName=lastName;
    this.Email=email;
    this.Gender=gender;
    this.Mobile=mobile;
}

BankApp.Accounts= function Accounts(saving, checking){
    this.Saving=saving;
    this.Checking=checking;
}

BankApp.AccountDetails= function AccountDetails(accountNum, accountType, balance){
    this.AccountNum=accountNum;
    this.AccountType=accountType;
    this.Balance=balance;
}


BankApp.BankAdmin= function BankAdmin(){
    var userProfiles=[];
    var customerInfos=[];
    var accountDetails=[];

    function init(){
        var managerAdmin = new UserProfiles("Admin", "Admin",0);
        userProfile.push(managerAdmin);
    }

    this.addNew=function(userProfile, customerInfo){
        userProfiles.push(userProfile);
        customerInfos.push(customerInfo);
    }

    this.createAccounts=function(checking, saving){
        accountDetails.push(checking);
        accountDetails.push(saving);

    }
}


BankApp.Customer = function Customer(){

    this.innerTransfer = function (){

    }

    this.outTransfer=function(){

    }

    this.viewTransaction=function(){

    }


BankApp.Common = function Common (){




}
}
