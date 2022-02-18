import create from "zustand";

type NotificationsState = {
  isShown: boolean;
  isCreated: boolean;
  isEdited: boolean;
  isDeleted: boolean;
  closeNotification: () => void;
  createNotification: () => void;
  editNotification: () => void;
  deleteNotification: () => void;
};

export const useNotificationState = create<NotificationsState>((set) => ({
  isShown: false,
  isCreated: false,
  isEdited: false,
  isDeleted: false,
  closeNotification: () =>
    set({
      isShown: false,
      isCreated: false,
      isDeleted: false,
      isEdited: false,
    }),
  createNotification: () =>
    set({ isShown: true, isCreated: true, isEdited: false, isDeleted: false }),
  editNotification: () =>
    set({ isShown: true, isEdited: true, isCreated: false, isDeleted: false }),
  deleteNotification: () =>
    set({ isShown: true, isDeleted: true, isCreated: false, isEdited: false }),
}));
