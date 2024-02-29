import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M23.813 26.719q-.47.515-1.032.093l-7.125-6.046q-.516-.516-.094-1.078.47-.47 1.032-.047l7.125 6.047q.515.468.093 1.03m-10.36-9.703 9.328-7.828q.563-.422 1.032.093.421.563-.094 1.031L9.797 22.079q.703 1.172.703 2.672-.047 2.25-1.547 3.703Q7.5 29.953 5.25 30 3 29.953 1.547 28.453.047 27 0 24.75q.047-2.25 1.547-3.703Q3 19.547 5.25 19.5q2.11.047 3.563 1.406L12.28 18l-3.469-2.906Q7.36 16.454 5.25 16.5 3 16.453 1.547 14.953.047 13.5 0 11.25.047 9 1.547 7.547 3 6.047 5.25 6q2.25.047 3.703 1.547Q10.453 9 10.5 11.25q0 1.5-.703 2.672zM5.25 15q2.109-.047 3.234-1.875 1.032-1.875 0-3.75Q7.36 7.547 5.25 7.5q-2.109.047-3.234 1.875-1.032 1.875 0 3.75Q3.14 14.953 5.25 15m0 6q-2.109.046-3.234 1.875-1.032 1.875 0 3.75Q3.14 28.454 5.25 28.5q2.109-.046 3.234-1.875 1.032-1.875 0-3.75Q7.36 21.046 5.25 21' />
    </g>
    <defs>
      <clipPath id='74764e98766b2cdeac0380334fa79a12__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsXlRegularIcon);
export default ForwardRef;
