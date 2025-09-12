import { createAuthClient } from "better-auth/client";

const { baseURL } = process.env;
const authClient = createAuthClient({ baseURL });

export default authClient;