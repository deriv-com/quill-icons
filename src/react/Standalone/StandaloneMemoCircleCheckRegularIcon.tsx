import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMemoCircleCheckRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M17.25 7.75h-10C6.547 7.75 6 8.336 6 9v15c0 .703.547 1.25 1.25 1.25h9.063c.39.469.82.898 1.289 1.25H7.25a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h10c1.367 0 2.5 1.133 2.5 2.5v5.273c-.469.118-.86.274-1.25.508V9c0-.664-.586-1.25-1.25-1.25m-10 4.375c0-.312.273-.625.625-.625h8.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.75a.617.617 0 0 1-.625-.625m.625 3.125h7.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-7.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m0 3.75h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m13.75 6.25c1.563 0 2.969-.82 3.75-2.187.82-1.329.82-3.008 0-4.375-.781-1.329-2.187-2.188-3.75-2.188-1.602 0-3.008.86-3.79 2.188-.82 1.367-.82 3.046 0 4.375.782 1.367 2.188 2.187 3.79 2.187m0-10c1.992 0 3.828 1.094 4.844 2.813 1.015 1.757 1.015 3.906 0 5.625a5.58 5.58 0 0 1-4.844 2.812 5.6 5.6 0 0 1-4.883-2.812c-1.015-1.72-1.015-3.868 0-5.625 1.016-1.72 2.852-2.813 4.883-2.813m1.719 3.945a.66.66 0 0 1 .898 0 .66.66 0 0 1 0 .899l-2.812 2.812a.66.66 0 0 1-.899 0l-1.562-1.562a.66.66 0 0 1 0-.899.66.66 0 0 1 .898 0L21 21.578z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMemoCircleCheckRegularIcon);
export default ForwardRef;
