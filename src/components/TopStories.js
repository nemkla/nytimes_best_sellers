import React from "react";
import { Query, Mutation, Subscription } from '@apollo/client/react/components'; //depricated
import { useQuery } from '@apollo/client' //use them
import { TOPSTORIES_QUERY } from "../constants/queries"

const TopStories = (client) => {
  console.log("Render: TopStories");

  const { loading, error, data } = useQuery(TOPSTORIES_QUERY);

  const StoryList = ({ stories, refetch }) => {
    if (!stories) return
    return (
      <>
        {Object.keys(stories).map( key => <div>{stories[key].title}</div> )}
        <button onClick={refetch} type="submit" >refetch</button>
      </>
    )
  }

  const LoadingIndicator = () => <p>Loading ...</p>;
  const ErrorMessage = () => <p>Oops, something went wrong ...</p>;
  const EmptyMessage = () => <p>No Data Available ...</p>;

  return (
    <>
    <Query query={TOPSTORIES_QUERY}>
      {({ loading, error, data, refetch }) => {
        if (loading) {
          return <LoadingIndicator />;
        }
        if (error) {
          return <ErrorMessage />;
        }
        if (data.stories.results.length === 0) {
          return <EmptyMessage />;
        }
        return data.stories.results && <StoryList stories = {data.stories.results} refetch={refetch} />

      }}
    </Query>
    </>
  );
}


export default TopStories;
