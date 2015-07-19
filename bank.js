/**
 * Created by shanshan on 7/17/15.
 */
var BankApp={};//class
var CustomerId=0;
//var index=0;



BankApp.UserProfiles = function UserProfiles(username, password){
    this.Username=username;
    this.Password=password;
    CustomerId++;
    //index++;

}

BankApp.UserInfo= function UserInfo(firstName, lastName, email, gender, mobile, customerId){
    this.FirstName=firstName;
    this.LastName=lastName;
    this.Email=email;
    this.Gender=gender;
    this.Mobile=mobile;
    CustomerId=customerId;

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
        var Admin = new BankApp.UserProfiles("Admin", "Admin",0);
        BankApp.get
        userProfiles.push(Admin);

    }
    init();

    this.addNew=function(userProfile){
        userProfiles.push(userProfile);

        //var userInfo = new BankApp.UserInfo("","","","","",index);
        //customerInfos.push(userInfo);
        // I love you baby!!!!!!!!!
        // I love you!
        //customerInfos.push(customerInfo);
    }

    this.getInfo= function(customerId){
        for(var i=0;i<customerInfos.length;i++){
            console.log(customerInfos.length);
            if(customerInfos[i].CustomerId==customerId){
                return customerInfos[i];
            }
        }
    }

    this.updateInfo= function (customerId, userInfo){
        var count=0;
        for(var i=0; i <customerInfos.length;i++){
            if(customerInfos[i].CustomerId==customerId) {
                customerInfos[i] = userInfo;
                break;
            }
        }
        //if(count==customerInfos.length-1){
        //    customerInfos.push(userInfo);
        //}

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
    }

    this.createAccounts=function(checking, saving){
        accountDetails.push(checking);
        accountDetails.push(saving);

    }
    this.getCustomers = function(){
        return userProfiles;
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
