import { router } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";


export function useBackButton(handler:any) {
    // Frustration isolated! Yay! 🎉
    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handler);
      return () => {
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handler 
        );
      };
    }, []);
  }
