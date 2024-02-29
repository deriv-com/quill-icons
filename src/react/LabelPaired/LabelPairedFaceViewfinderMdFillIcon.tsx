import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 4h2.5q.687.063.75.75-.063.687-.75.75h-2.5q-.22.03-.25.25v2.5q-.063.687-.75.75-.687-.063-.75-.75v-2.5Q.031 5 .5 4.5 1 4.031 1.75 4m10 0h2.5q.75.031 1.25.5.47.5.5 1.25v2.5q-.063.687-.75.75-.687-.063-.75-.75v-2.5q-.03-.22-.25-.25h-2.5q-.687-.063-.75-.75.063-.687.75-.75M1.5 15.75v2.5q.03.22.25.25h2.5q.687.063.75.75-.063.687-.75.75h-2.5Q1 19.97.5 19.5.031 19 0 18.25v-2.5q.063-.687.75-.75.687.063.75.75m14.5 0v2.5q-.03.75-.5 1.25-.5.47-1.25.5h-2.5q-.687-.063-.75-.75.063-.687.75-.75h2.5q.22-.03.25-.25v-2.5q.063-.687.75-.75.687.063.75.75M3 12q0-1.344.656-2.5A5.2 5.2 0 0 1 5.5 7.656 5.1 5.1 0 0 1 8 7q1.312 0 2.5.656A5.2 5.2 0 0 1 12.344 9.5Q13 10.656 13 12t-.656 2.5a5.2 5.2 0 0 1-1.844 1.844A5.1 5.1 0 0 1 8 17a5.1 5.1 0 0 1-2.5-.656A5.2 5.2 0 0 1 3.656 14.5 5 5 0 0 1 3 12m4-1.25q-.063-.687-.75-.75-.687.063-.75.75.063.687.75.75.687-.063.75-.75m2.75.75q.687-.063.75-.75-.063-.687-.75-.75-.687.063-.75.75.063.687.75.75m-4.437 1.656q-.314.345-.032.688Q6.376 14.969 8 15q1.625-.03 2.719-1.156.28-.345-.031-.688-.345-.312-.688 0-.78.813-2 .844-1.188-.03-1.969-.844-.375-.312-.718-.031z' />
    </g>
    <defs>
      <clipPath id='2587682299f3344cea1d7b05ae17d1f8__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderMdFillIcon);
export default ForwardRef;
