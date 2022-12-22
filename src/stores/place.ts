import { ref } from "vue";
import { defineStore } from "pinia";

export const usePlaceStore = defineStore("place", () => {
  async function createPlace() {}

  async function updatePlace(id: string) {}

  async function removePlace(id: string) {}

  async function getPlaceList() {}

  return { createPlace, updatePlace, removePlace, getPlaceList };
});
