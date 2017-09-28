public with Sharing class LDSAccountListViewController {
    
    @AuraEnabled
    public static List<Account> findAccounts(){
        List<Account> accList = new List<Account>();
        accList=[select id, name,owner.name,type,AccountNumber,AnnualRevenue,Phone from Account order by lastModifiedDate DESC Limit 10];
        return accList;
    }

}