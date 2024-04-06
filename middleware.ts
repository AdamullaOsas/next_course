import { authMiddleware } from "@clerk/nextjs";

// Extracted routes from the provided data
const routes = [
    "/",
    "/community",
    "/collection",
    "/jobs",
    "/tags",
    "/profile",
    "/ask-question",
];

export default authMiddleware({
    publicRoutes: [
        ...routes, // Add extracted routes to publicRoutes array
        "/api/webhook",
        "/question/:id",
        "/tags/:id",
        "/profile/:id",
        "/.well-known/vercel/flags",
    ],
    ignoredRoutes: [
        "/api/webhook",
        "/api/chatgpt",
        "/.well-known/vercel/flags",
        "/assets/images/dark-illustration.png",
        "/assets/images/dark-illustration.png%20",
    ],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
