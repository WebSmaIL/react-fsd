import * as vscode from "vscode";
import { CONFIG_DATA } from "./config/CONFIG_DATA";
import { validateData } from "./helpers/validate";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "react-fsd" is now active!');

  let disposable = vscode.commands.registerCommand(
    "react-fsd.create_react-fsd_folder",
    (clickContext) => {
      // show input box
      const input: Thenable<string | undefined> = vscode.window.showInputBox({
        prompt: "Enter a folder name",
        validateInput(value) {
          for (const iterator of validateData) {
            if (iterator.validate(value)) {
              return iterator.message;
            }
          }
          return null;
        },
      });

      // create folder with segments
      input.then((folderName: string | undefined) => {
        if (folderName && clickContext.path) {
          let uri = vscode.Uri.file(clickContext.path + `/${folderName}`);
          vscode.workspace.fs.createDirectory(uri);

          CONFIG_DATA.forEach((config) => {
            const uri = vscode.Uri.file(
              clickContext.path + `/${folderName}` + config.path
            );
            vscode.workspace.fs.writeFile(
              uri,
              Buffer.from(
                config.content?.replaceAll("DEFAULT_NAME", folderName) || ""
              )
            );
          });
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
