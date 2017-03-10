# QuizTwo
group project quiz app


Created three databases….two databases dedicated to questions/answers…just throwing some options for us.  Another option to get Q&A is to use an api…..

schema.sql

had issues adding the date stamp….so I changed it from’

date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
to

join_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

the “date” was giving me an error message…could just be a Mac thing

schema_answer_one.sql
this is a schema that creates a Q&A db where there is one question that has one answer

schema_answer_two.sql

this is a schema that creates a Q&A db where there is multiples questions can share one answer.  Ex: Which band does Mick Jagger sing in? Which band does Keith Richards sing in? same answer: Rolling Stones

All DataBases

I added :
1: a drop database on the first line….this will delete any database any database with the same name….BEWARE!

2: added a DESCRIBE daisy chain in each schema.sql so you can check the tables…..

