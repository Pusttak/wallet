import { useGetUserInformationQuery } from '../../redux/authSlice';

export function IsLoggedIn() {
  const { data } = useGetUserInformationQuery();

  if (!data) {
    return;
  }
}
