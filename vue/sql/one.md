## 1.添加手机用户

```sql
insert into WP_POS_USERS(USER_ID,USER_NAME,USER_PWD,KHDM,CJR,CJRQ,UUID,YQY,QYR,QYRQ)
select khdm,khmc,'8888',khdm,'sa',GETDATE(),'',1,'sa',GETDATE() from KEHU
```