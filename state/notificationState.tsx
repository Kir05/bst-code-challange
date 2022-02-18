import create from "zustand";

type NotificationsState = {
  isShown: boolean;
  isCreated: boolean;
  isDeleted: boolean;
  closeNotification: () => void;
  createNotification: () => void;
  deleteNotification: () => void;
};

export const useNotificationState = create<NotificationsState>((set) => ({
  isShown: false,
  isCreated: false,
  isDeleted: false,
  closeNotification: () =>
    set({ isShown: false, isCreated: false, isDeleted: false }),
  createNotification: () => set({ isShown: true, isCreated: true }),
  deleteNotification: () => set({ isShown: true, isDeleted: true }),
}));
