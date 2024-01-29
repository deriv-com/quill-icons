import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePenCircleRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m12.969-3.633q-.469-.351-.899 0l-.82.86 1.563 1.562.82-.86q.351-.429 0-.859zm-5.82 4.961a.5.5 0 0 0-.196.274l-.469 1.914 1.914-.47a.6.6 0 0 0 .274-.155l3.242-3.243-1.562-1.562-3.243 3.242zm4.023-5.82q.585-.547 1.328-.547t1.328.547l.703.664q.547.585.547 1.328t-.547 1.328l-4.96 4.922q-.352.39-.86.508l-2.93.742a.56.56 0 0 1-.586-.195q-.234-.235-.156-.586l.703-2.93q.157-.468.508-.86z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenCircleRegularIcon);
export default ForwardRef;
