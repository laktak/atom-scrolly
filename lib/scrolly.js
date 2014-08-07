
function getEd()
{
  var view=atom.workspaceView.getActiveView();
  return view?view.getEditor():null;
}

module.exports =
{
  activate: function(state)
  {
    atom.workspaceView.command("scrolly:up", (function(that)
    {
      return function()
      {
        var view=atom.workspaceView.getActiveView();
        var row=view.getFirstVisibleScreenRow();
        view.scrollToScreenPosition([row+1,0])
      };
    })(this));
    atom.workspaceView.command("scrolly:down", (function(view)
    {
      return function()
      {
        var view=atom.workspaceView.getActiveView();
        var row=view.getLastVisibleScreenRow();
        for (var i=5; i>-5; i--)
        {
          view.scrollToScreenPosition([row-i,0])
          if (view.getLastVisibleScreenRow()>row) break;
        }
      };
    })(this));
  },
};
