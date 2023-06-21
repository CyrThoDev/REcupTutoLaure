const AbstractManager = require("./AbstractManager");

class TutoAdminManager extends AbstractManager {
  constructor() {
    super({ table: "tutorials" });
  }

  findAll() {
    return this.database.query(
      `select f.title as ftitle ,t.name, t.target, t.explanation, i.src,i.alt, q.title as qtitle, quest.content as qcontent, a.content as acontent from formations as f inner join tutorials as t on t.formation_id=f.id inner join images as i on t.image_id=i.id inner join quizz as q on t.quizz_id=q.id inner join questions as quest on quest.quizz_id=q.id inner join answers as a on a.question_id=quest.id  `
    );
  }

  // findAllConcat() {
  //   return this.database.query(
  //     `select t.id, t.name, t.target, t.explanation, q.title, JSON_ARRAYAGG(JSON_OBJECT('id', quest.id, 'content', quest.content)) as questions from formations as f inner join tutorials as t on formation_id=f.id inner join quizz as q on t.quizz_id=q.id inner join questions as quest on quest.quizz_id=q.id `
  //   );
  // }

  find(id) {
    return this.database.query(
      `select t.id,f.title,t.name, t.target, t.explanation, i.src,i.alt, q.title,  quest.content, a.content from formations as f inner join tutorials as t on t.formation_id=f.id inner join images as i on t.image_id=i.id inner join quizz as q on t.quizz_id=q.id inner join questions as quest on quest.quizz_id=q.id inner join answers as a on a.question_id=quest.id  where t.id = ?`,
      [id]
    );
  }

  //   insert(item) {
  //     return this.database.query(`insert into ${this.table} (title) values (?)`, [
  //       items.title,npm run dev
  //     ]);
  //   }

  //   update(item) {
  //     return this.database.query(
  //       `update ${this.table} set title = ? where id = ?`,
  //       [items.title, items.id]
  //     );
  //   }
}

module.exports = TutoAdminManager;
