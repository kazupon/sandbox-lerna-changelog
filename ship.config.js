module.exports = {
  updateChangelog: false,
  beforeCommitChanges: ({ exec, dir }) => {
    console.log('---beforeCommitChanges', dir)
    console.log('------')
    exec(`npx lerna-changelog`)
  },
  publishCommand: () => 'echo dummy publish!'
}
