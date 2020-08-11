import React from "react";
import { connect } from "react-redux";
import withConditionalRenderings from "../features/withConditionalRenderings";
import { TOPSTORIES } from "../constants/stateKeys";

function TopStories({ topStories, fetchState }) {
  console.log("Render: TopStories");

  const { isLoading, isError } = fetchState;
  const StoryList = () => <div>StoryList</div>;
  const TopStoriesWithConditionalRendering = withConditionalRenderings(
    StoryList
  );

  return (
    <>
      <TopStoriesWithConditionalRendering
        {...topStories}
        isLoading={isLoading[TOPSTORIES]}
        isError={isError[TOPSTORIES]}
      />
    </>
  );
}

const mapStateToProps = ({ topStoriesState, fetchState }) => ({
  topStories: topStoriesState,
  fetchState: fetchState,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopStories);
