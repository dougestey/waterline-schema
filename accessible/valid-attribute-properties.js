//  ██╗   ██╗ █████╗ ██╗     ██╗██████╗
//  ██║   ██║██╔══██╗██║     ██║██╔══██╗
//  ██║   ██║███████║██║     ██║██║  ██║
//  ╚██╗ ██╔╝██╔══██║██║     ██║██║  ██║
//   ╚████╔╝ ██║  ██║███████╗██║██████╔╝
//    ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝╚═════╝
//
//  ██████╗ ██████╗  ██████╗ ██████╗ ███████╗██████╗ ████████╗██╗███████╗███████╗
//  ██╔══██╗██╔══██╗██╔═══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║██╔════╝██╔════╝
//  ██████╔╝██████╔╝██║   ██║██████╔╝█████╗  ██████╔╝   ██║   ██║█████╗  ███████╗
//  ██╔═══╝ ██╔══██╗██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗   ██║   ██║██╔══╝  ╚════██║
//  ██║     ██║  ██║╚██████╔╝██║     ███████╗██║  ██║   ██║   ██║███████╗███████║
//  ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚══════╝╚══════╝
//
module.exports = [
  // Basic semantics:
  'type',
  'defaultsTo',
  'required',
  'allowNull',
  'autoUpdatedAt',
  'autoCreatedAt',

  // Auto-migrations:
  'autoMigrations',

  // High-level validation rules:
  'validations',

  // Associations:
  'through',
  'collection',
  'model',
  'via',
  'dominant',

  // Adapter:
  'columnName',
  'meta',

  // At-rest encryption:
  'encrypt',

  // Advisory
  'description',
  'moreInfoUrl',
  'example',
  'protect',
  
  // Monkey-patch: https://github.com/mdconaway/sails-ember-rest/issues/6
  'includeIn',
];
