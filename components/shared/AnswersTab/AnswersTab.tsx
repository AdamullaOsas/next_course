import AnswerCard from "@/components/cards/AnswerCard";
import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";

interface Props extends SearchParamsProps {
    userId: string;
    clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
    const result = await getUserAnswers({
        userId,
        page: 1,
    });

    return (
        <>
            {result.answers.map((item) => (
                <AnswerCard
                    key={item._id}
                    clerkId={clerkId}
                    _id={item._id}
                    question={item.question}
                    author={item.author}
                    upvotes={item.upvotes.length}
                    createdAt={item.createdAt}
                />
            ))}
        </>
    );
};

export default AnswersTab;