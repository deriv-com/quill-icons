import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.594 16.5H.75q-.703-.046-.75-.75.047-.703.75-.75h1.172q1.03-3.329 3.75-5.39Q8.39 7.545 12 7.5h2.297q.703.046.75.75-.047.703-.75.75H12q-3 .047-5.25 1.688Q4.5 12.328 3.516 15h9.234q.703.047.75.75-.047.704-.75.75H3.14a8.1 8.1 0 0 0 0 3h9.61q.703.046.75.75-.047.704-.75.75H3.516q.984 2.672 3.234 4.313T12 27h2.297q.703.046.75.75-.047.704-.75.75H12q-3.61-.046-6.328-2.11-2.72-2.061-3.75-5.39H.75q-.703-.046-.75-.75.047-.704.75-.75h.844a12 12 0 0 1 0-3' />
    </g>
    <defs>
      <clipPath id='4e8c25ad583bbea938f6cd45d0cdf187__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignXlRegularIcon);
export default ForwardRef;
