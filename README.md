# Welcome to Truckup Calendar 👋

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start Project
    ios

   ```bash
    npm run ios
   ```
   
  - android

   ```bash
    npm run android
   ```

In the output, you'll find options to open the app in a
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

# Project Structure

This project follows the **Atomic Design** methodology to ensure a reusable and scalable structure. The structure is organized as follows:

- **Atoms (Elements):** Basic and indivisible components, such as box, text, and icons.
- **Molecules (Components):** Combinations of atoms that form simple functional blocks, such as iconButton.
- **Organisms (Container):** Complex sections of the interface, composed of molecules and atoms, that together form a complete functional area of the application.
- **Templates (Screen):** Page structures that combine organisms, providing layouts for different views of the application.

## State Management

We are using **Redux** for state management, ensuring a predictable and easy-to-debug architecture. This allows the application state to be managed centrally, facilitating code maintenance and scalability.

## Testing Facilitation with Expo

To facilitate testing and development, we are using **Expo**. Expo simplifies the setup and development process of React Native applications, providing powerful tools for testing and deployment.

## Light and Dark Mode Animation

The project includes an animation for light and dark mode, which is currently disabled to avoid bias in the analysis. However, a demonstration video of the animation is attached below.

https://drive.google.com/file/d/14btC2SWUOfiTqS9jlH4PJ_jHho0fAa8-/view?usp=sharing

## screenshots

<img src="https://github.com/Eduardo-Queiroz/truckup-calendar/assets/37419591/fc093856-c387-4f8f-9a10-4505f2c35531" alt="drawing" width="200"/>
<img src="https://github.com/Eduardo-Queiroz/truckup-calendar/assets/37419591/21dd33e0-70f1-46b7-b3dc-33bf7b09ce08" alt="drawing" width="200"/>
<img src="https://github.com/Eduardo-Queiroz/truckup-calendar/assets/37419591/1f68630e-58a0-48ff-91e0-d9bc62e8b151" alt="drawing" width="200"/>
<img src="https://github.com/Eduardo-Queiroz/truckup-calendar/assets/37419591/321850c4-59ff-4d5a-ad89-9f5ef24aaa8f" alt="drawing" width="200"/>

## record

standard behavior
https://drive.google.com/file/d/1sv4bSOP4NQk_4ovXH3qJsujTlRfv_m-t/view?usp=drive_link

light mode switch
https://drive.google.com/file/d/14btC2SWUOfiTqS9jlH4PJ_jHho0fAa8-/view?usp=sharing
