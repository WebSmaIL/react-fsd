import * as vscode from "vscode";
import { CONFIG_DATA, SEGMENTS_KEYS } from "./config";
import { getFileExtension, validateData } from "./helpers";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "react-fsd" is now active!');
  const EXTENSION_NAME = "react-fsd";

  let disposable = vscode.commands.registerCommand(
    `${EXTENSION_NAME}.create_${EXTENSION_NAME}_folder`,
    async (clickContext) => {
      const config = vscode.workspace.getConfiguration(EXTENSION_NAME);
      const EXCEPTION_KEYS: string[] = config.get("exceptionKeys") || [];
      const LANGUAGE_TYPE: "javascript" | "typescript" =
        config.get("languageSelector") || "typescript";

      const folderName = await vscode.window.showInputBox({
        prompt: "Enter a slice name",
        validateInput(value) {
          for (const iterator of validateData) {
            if (iterator.validate(value)) {
              return iterator.message;
            }
          }
          return null;
        },
      });

      if (folderName && clickContext.path) {
        const selectedItems = await vscode.window.showQuickPick(
          SEGMENTS_KEYS.filter((el) => !EXCEPTION_KEYS.includes(el.label)),
          {
            canPickMany: true,
            placeHolder: 'Select the "keys" of the segments you want to create',
          }
        );

        if (selectedItems?.length || EXCEPTION_KEYS.length) {
          const labels = selectedItems?.map((item) => item.label);

          let uri = vscode.Uri.file(clickContext.path + `/${folderName}`);
          vscode.workspace.fs.createDirectory(uri);

          CONFIG_DATA.forEach((config) => {
            if (
              !config.key ||
              labels?.includes(config.key) ||
              EXCEPTION_KEYS.includes(config.key)
            ) {
              const fileExtension = getFileExtension(
                LANGUAGE_TYPE,
                config.fileExtension
              );

              const uri = vscode.Uri.file(
                clickContext.path +
                  `/${folderName}` +
                  config.path +
                  fileExtension
              );
              vscode.workspace.fs.writeFile(
                uri,
                Buffer.from(
                  config.content?.replaceAll("DEFAULT_NAME", folderName) || ""
                )
              );
            }
          });
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
