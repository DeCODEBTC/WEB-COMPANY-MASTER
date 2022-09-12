interface UseAccessToken {
  getAccessToken: () => string;
  setAccessToken: (token: string) => void;
}

const useAccessToken = (): UseAccessToken => {
  return {
    getAccessToken: () => localStorage.getItem("access-token") ?? "",
    setAccessToken: (token: string) => {
      if (token) {
        localStorage.setItem("access-token", token);
      } else {
        localStorage.removeItem("access-token");
      }
    },
  };
};

export default useAccessToken;
