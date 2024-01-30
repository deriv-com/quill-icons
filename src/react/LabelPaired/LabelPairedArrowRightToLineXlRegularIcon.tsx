import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21 9.75v16.5q-.046.704-.75.75-.704-.046-.75-.75V9.75q.046-.703.75-.75.704.047.75.75m-4.734 8.766-6 6q-.516.468-1.032 0-.468-.516 0-1.032l4.688-4.734H.75Q.047 18.704 0 18q.047-.704.75-.75h13.172l-4.688-4.734q-.468-.516 0-1.032.516-.468 1.032 0l6 6q.468.516 0 1.032' />
    </g>
    <defs>
      <clipPath id='e8a8196d865063d7d9f66342c84ed27c__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineXlRegularIcon);
export default ForwardRef;
