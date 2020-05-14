'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Words', [{
      kalimat: 'simak rangkuman kabar mengenai surabaya dan sekitarnya dalam berita hari ini',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kalimat: 'sang sopir menceritakan detik-detik wanita penumpang taksi online meninggal di mobil',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kalimat: 'ia menepikan dan menghentikan laju mobilnya di bahu jalan depan toko kelontong',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kalimat: 'menjalin hubungan cinta memang bukan perkara mudah bagi manusia.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kalimat: 'munculnya rasa nostalgia untuk mengenang masa-masa awal menjalin hubungan',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Words', null, {});
  }
};
