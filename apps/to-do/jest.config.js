module.exports = {
  name: 'to-do',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/to-do',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
