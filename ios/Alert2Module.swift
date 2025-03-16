import ExpoModulesCore
import UIKit

enum ButtonStyle: String, Enumerable {
  case `default`
  case destructive
  case cancel
}

struct Button: Record {
  @Field
  var text: String = "utf8"

  @Field
  var style: ButtonStyle = .default
}

enum UserInterfaceStyle: String, Enumerable {
  case light
  case dark
}
struct Option: Record {
  @Field
  var userInterfaceStyle: UserInterfaceStyle = .light
}

public class Alert2Module: Module {
  public func definition() -> ModuleDefinition {
    Name("Alert2")

    AsyncFunction("alert") { (title: String, message: String, buttons: [Button], option: Option, promise: Promise) in
      DispatchQueue.main.async {
        let scenes = UIApplication.shared.connectedScenes
        let windowScene = scenes.first as? UIWindowScene

        if let rootViewController = windowScene?.windows.filter({($0.isKeyWindow)}).first?.rootViewController {
          let alert = UIAlertController(
            title: title,
            message: message,
            preferredStyle: .alert
          )

          if option.userInterfaceStyle == .dark {
            alert.overrideUserInterfaceStyle = .dark
          } else {
            alert.overrideUserInterfaceStyle = .light
          }

          for buttonIndex in buttons.indices {
            let button = buttons[buttonIndex]
            let style: UIAlertAction.Style
            if button.style == .destructive {
              style = .destructive
            } else if button.style == .cancel {
              style = .cancel
            } else {
              style = .default
            }
            alert.addAction(UIAlertAction(title: button.text, style: style) { action in
              promise.resolve(buttonIndex)
            })
          }
          rootViewController.present(alert, animated: true, completion: nil)
        }
      }
    }

    Function("prompt") { (title: String, message: String) in
      DispatchQueue.main.async {
        if let rootViewController = UIApplication.shared.keyWindow?.rootViewController {
          let alertController = UIAlertController(
            title: title,
            message: message,
            preferredStyle: .alert
          )
          alertController.addTextField { textField in
            textField.placeholder = "Enter something..."
          }
          alertController.addAction(UIAlertAction(title: "Cancel", style: .cancel))
          alertController.addAction(UIAlertAction(title: "OK", style: .default) { _ in
            let userInput = alertController.textFields?.first?.text
          })
          rootViewController.present(alertController, animated: true, completion: nil)
        }
      }
    }
  }
}
