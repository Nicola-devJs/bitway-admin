import { useAppDispatch } from "../../redux/hooks";
import { actions } from "../../redux/slices/user";

export const useSetSnackbar = () => {
  const dispatch = useAppDispatch();

  const onSuccessNotification = (text: string) => {
    dispatch(actions.addSuccessNotification(text));
  };

  const onErrorNotification = (text: string) => {
    dispatch(actions.addErrorNotification(text));
  };

  return { onSuccessNotification, onErrorNotification };
};
