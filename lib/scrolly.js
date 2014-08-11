
module.exports =
{
  activate: function(state)
  {
    atom.workspaceView.command("scrolly:up", (function(that)
    {
      return function()
      {
        var view=atom.workspaceView.getActiveView();
        view.scrollTop(view.scrollTop()-view.lineHeight)
      };
    })(this));
    atom.workspaceView.command("scrolly:down", (function(view)
    {
      return function()
      {
        var view=atom.workspaceView.getActiveView();
        view.scrollTop(view.scrollTop()+view.lineHeight)
      };
    })(this));
  },
};
