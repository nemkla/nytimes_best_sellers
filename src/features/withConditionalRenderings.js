import React from "react";
import { compose } from "recompose";
const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props) ? null : <Component {...props} />;

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (
  props
) =>
  conditionalRenderingFn(props) ? (
    <EitherComponent />
  ) : (
    <Component {...props} />
  );

const LoadingIndicator = () => <p>Loading ...</p>;
const ErrorMessage = () => <p>Oops, something went wrong ...</p>;
const EmptyMessage = () => <p>No Data Available ...</p>;

const isLoadingConditionFunction = (props) => props.isLoading;
const isErrorConditionFunction = (props) => props.isError;
const isNullConditionFunction = (props) => !props.data;
const isEmptyConditionFunction = (props) => !props.data.length;

const withConditionalRenderings = compose(
  withEither(isLoadingConditionFunction, LoadingIndicator),
  withEither(isErrorConditionFunction, ErrorMessage),
  withMaybe(isNullConditionFunction),
  withEither(isEmptyConditionFunction, EmptyMessage)
);

export default withConditionalRenderings;
