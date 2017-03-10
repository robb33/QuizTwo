-- called qaone database 
-- one question...one answer database
-- called qaone database 

DROP DATABASE IF EXISTS qatwo_db;
CREATE DATABASE qatwo_db;
USE qatwo_db;

CREATE TABLE questions (
  id INT NOT NULL auto_increment,
  question TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  id INT NOT NULL auto_increment,
  answer TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE question_answers (
  question_id INT NOT NULL,
  answer_id INT NOT NULL,
  CONSTRAINT fk_q_a_question_id FOREIGN KEY (question_id) REFERENCES questions (id),
  CONSTRAINT fk_q_a_answer_id FOREIGN KEY (answer_id) REFERENCES answers (id),
  PRIMARY KEY (question_id, answer_id)
);

--***************************************************

-- show all the tables
-- describe questions; describe answers; describe question_answers; 



