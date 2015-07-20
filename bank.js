/**
 * Created by shanshan on 7/17/15.
 */
var BankApp={};//class
//var CustomerId=0;
var index=0;



BankApp.UserProfiles = function UserProfiles(username, password){
    this.Username=username;
    this.Password=password;
    this.CustomerId = index;
    //CustomerId++;
    //index++;

}

BankApp.UserInfo= function UserInfo(firstName, lastName, email, gender, mobile, customerId){
    this.FirstName=firstName;
    this.LastName=lastName;
    this.Email=email;
    this.Gender=gender;
    this.Mobile=mobile;
    this.UserInfoId=customerId;

}

BankApp.Account= function Account(account, customerId){
    this.Account=account;
    this.AccountId=customerId;
}

BankApp.AccountDetails= function AccountDetails(accountNum, accountType, balance){
    this.AccountNum=accountNum;
    this.AccountType=accountType;
    this.Balance=balance;
}


BankApp.BankAdmin= function BankAdmin(){
    var userProfiles=[];
    var customerInfos=[];
    var accounts=[];


    function init(){
        var Admin = new BankApp.UserProfiles("Admin", "Admin",0);
        userProfiles.push(Admin);
        var AdminInfo=new BankApp.UserInfo("Shanshan", "Gao", "xiaosszoe@gmail.com", "F", "2152904505",index);
        customerInfos.push(AdminInfo);
        index++;
    }
    //init();

    if(localStorage["userProfiles"]==null||localStorage["userProfiles"]==undefined){
        init();
        console.log("ssss");
        //var userprofiles = getCustomers();
        localStorage["userProfiles"]=JSON.stringify(userProfiles);
        //var userInfos = getCustomerInfos();
        localStorage["userInfos"]=JSON.stringify(customerInfos);
    }else{
        userProfiles=JSON.parse(localStorage["userProfiles"]);
        customerInfos=JSON.parse(localStorage["userInfos"]);
        index=userProfiles.length;
    }

    this.addNew=function(userProfile){
        userProfiles.push(userProfile);
        var info = new BankApp.UserInfo("","","","","",index);
        customerInfos.push(info);
        index++;
        localStorage["userProfiles"]=JSON.stringify(userProfiles);
        localStorage["userInfos"]=JSON.stringify(customerInfos);

    }


    this.deleteItem = function(customerId){
        var userProfile=null;
        for(var i=0;i<userProfiles.length;i++){
            if(userProfiles[i].CustomerId==customerId){
                userProfile=userProfiles[i];
                var index = userProfiles.indexOf(userProfile);
                userProfiles.splice(index,1);
                break;
            }
        }
        localStorage["userProfiles"]=JSON.stringify(userProfile);

    }


    this.createChecking=function(checking, customerId){
        var checkingAccount = new BankApp.Account(checking, customerId);
        accounts.push(checkingAccount);
        localStorage["accounts"]=JSON.stringify(accounts);

    }

    this.createSaving=function(saving, customerId){
        var savingAccount = new BankApp.Account(saving, customerId);
        accounts.push(savingAccount);
        localStorage["accounts"]=JSON.stringify(accounts);
    }

    this.getCustomers = function(){
        return userProfiles;
    }

    this.getCustomerInfos=function(){
        return customerInfos;
    }

    this.getAccounts=function(){
        return accounts;
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
