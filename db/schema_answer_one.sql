-- called qaone database 
-- one question...one answer database
-- called qaone database 

DROP DATABASE IF EXISTS qaone_db;
CREATE DATABASE qaone_db;
USE qaone_db;

CREATE TABLE questions (
  id INT NOT NULL auto_increment,
  question TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  id INT NOT NULL auto_increment,
  answer TEXT,
  question_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_answers_question_id FOREIGN KEY (question_id) REFERENCES questions (id)
);


--***************************************************

-- show all the tables
-- describe questions; describe answers;




