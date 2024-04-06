import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/api/webhook",
        "question/:id",
        "/tags",
        "/tags/:id",
        "/profile/:id",
        "/community",
        "/jobs",
        "/.well-known/vercel/flags",
    ],
    ignoredRoutes: [
        "/api/webhook",
        "/api/chatgpt",
        "/.well-known/vercel/flags",
    ],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
