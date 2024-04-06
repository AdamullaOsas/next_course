import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/api/webhooks(.*)",
        "/question/:id",
        "/tags",
        "/tags/:id",
        "/profile/:id",
        "/community",
        "/jobs",
        "/.well-known/vercel/flags",
    ],
    ignoredRoutes: ["/api/webhooks(.*)", "/api/chatgpt"],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
