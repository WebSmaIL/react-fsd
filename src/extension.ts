import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "react-fsd" is now active!');

  let disposable = vscode.commands.registerCommand(
    "react-fsd.helloWorld",
    (clickContext) => {
      // TODO: need to add config in extension
      // const config = vscode.workspace
      //   .getConfiguration("react-fsd-configuration")
      //   .get("config");

      const input = vscode.window.showInputBox({
        prompt: "Enter a folder name",
        validateInput(value) {
          if (value === "") {
            return "Folder name cannot be empty";
          }
          return null;
        },
      });

      input.then((folderName: string | undefined) => {
        if (folderName && clickContext.path) {
          let uri = vscode.Uri.file(clickContext.path + `/${folderName}`);
          vscode.workspace.fs.createDirectory(uri);

          let fileUri = vscode.Uri.file(
            clickContext.path + `/${folderName}/index.ts`
          );
          vscode.workspace.fs.writeFile(
            fileUri,
            Buffer.from(`export {default as ${folderName}} from './ui';`)
          );
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
