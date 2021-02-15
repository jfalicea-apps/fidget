create database fidgetTracker; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullname text,
    email text,
    user_key text
);

CREATE TABLE fidget (
    id SERIAL PRIMARY KEY,
    fidgetText text,
    fidgetBtnValue text,
    fidgetTransactionId text,
    fidgetNotes text, 
    timestamp timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    userkey text
);


-- fuck you. 