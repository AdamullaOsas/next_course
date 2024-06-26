import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult/NoResult";
import Pagination from "@/components/shared/Pagination/Pagination";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { getQuestionsByTagId } from "@/lib/actions/tag.actions";
import { URLProps } from "@/types";
import React from "react";

const Page = async ({ params, searchParams }: URLProps) => {
    const result = await getQuestionsByTagId({
        tagId: params.id,
        page: searchParams.page ? +searchParams.page : 1,
        searchQuery: searchParams.q,
    });
    return (
        <>
            <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1>

            <div className="mt-11 w-full">
                <LocalSearch
                    route={`/tags/${params.id}`}
                    iconPosition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search tag questions"
                    otherClasses="flex-1"
                />
            </div>
            <HomeFilters />
            <div className="mt-10 flex w-full flex-col gap-6">
                {result.questions.length > 0 ? (
                    result.questions.map((question: any) => (
                        <QuestionCard
                            key={question._id}
                            _id={question._id}
                            title={question.title}
                            tags={question.tags}
                            author={question.author}
                            answers={question.answers}
                            views={question.views}
                            upvotes={question.upvotes}
                            createdAt={question.createdAt}
                        />
                    ))
                ) : (
                    <NoResult
                        title="There's no tag question saved to show"
                        description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
                        link="/ask-question"
                        linkTitle="Ask a Question"
                    />
                )}
            </div>
            <div className="mt-10">
                <Pagination
                    pageNumber={searchParams.page ? +searchParams.page : 1}
                    isNext={result.isNext}
                />
            </div>
        </>
    );
};

export default Page;
