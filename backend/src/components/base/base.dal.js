class Base {
  constructor(Model) {
    this.model = Model;
  }

  create(newDocument) {
    return new Promise((resolve, reject) => {
      if (newDocument) {
        this.model.create(newDocument)
          .then(created => resolve(created))
          .catch(error => reject(error));
      } else {
        reject(new Error('New item must be defined'));
      }
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.model.find()
        .then((allFound) => {
          resolve(allFound);
        })
        .catch(() => {
          const notFoundError = new Error('Item not found');
          reject(notFoundError);
        });
    });
  }

  aggregate(newDocument) {
    const stringQuery = newDocument;
    return new Promise((resolve, reject) => {
      this.model.aggregate(stringQuery)
        .then((allFound) => {
          resolve(allFound);
        })
        .catch(() => {
          const notFoundError = new Error('Item not found');
          reject(notFoundError);
        });
    });
  }

  findOneById(documentId) {
    return new Promise((resolve, reject) => {
      this.model.findById(documentId)
        .then((found) => {
          resolve(found);
        })
        .catch(() => {
          const notFoundError = new Error('Item not found');
          reject(notFoundError);
        });
    });
  }

  deleteOne(documentId) {
    return new Promise((resolve, reject) => {
      this.model.findOneAndRemove({
        _id: documentId,
      })
        .then((deleted) => {
          resolve(deleted);
        })
        .catch(() => {
          const notFoundError = new Error('Item not deleted');
          reject(notFoundError);
        });
    });
  }

  updateOne(documentId, newDocument) {
    return new Promise((resolve, reject) => {
      this.model.update({
        _id: documentId,
      }, {
        $set: newDocument,
      })
        .then((updated) => {
          resolve(updated);
        })
        .catch(() => {
          reject(new Error('Item Not Updated'));
        });
    });
  }

  findOne(query) {
    return new Promise((resolve, reject) => {
      this.model.findOne(query)
        .then((old) => {
          resolve(old);
        })
        .catch(() => {
          reject(new Error('Item Not Found'));
        });
    });
  }
}

export default Base;
