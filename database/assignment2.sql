--data for table `account`
INSERT INTO public.account(account_firstname,account_lastname,account_email,account_password)
VALUES('Tony','Stark','tony@starkent.com','Iam1ronM@n');

--Account_type in account table  changed to Admin from default account_type.
UPDATE  public.account
SET account_type ='Admin'
WHERE account_email ='tony@starkent.com';

--delete Tony data to the table called account.
DELETE FROM public.account
WHERE account_email ='tony@starkent.com';

--update of the GM Hummer record description.
UPDATE public.inventory
SET inv_description =REPLACE(inv_description,'small interiors','a huge interior')
WHERE inv_id ='10';

--data join
SELECT inv_make,inv_model,classification.classification_name
FROM public.inventory
INNER JOIN public.classification ON inventory.classification_id =classification.classification_id
WHERE classification.classification_name ='Sport';

--changes of images in inverstory table.
UPDATE public.inventory
SET 
    inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');