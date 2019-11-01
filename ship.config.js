module.exports = {
    updateChangelog: false,
    beforeCommitChanges: ({ exec, dir }) => {
      console.log('beforeCommitChanges', dir)
      exec(`npx lerna-changelog`)
    },
    publishCommand: () => 'echo dummy publish!'
  }