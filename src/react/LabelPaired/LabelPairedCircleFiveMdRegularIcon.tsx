import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveMdRegularIcon = (
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
      <path d='M8 5a7.2 7.2 0 0 0-3.5.938A7.2 7.2 0 0 0 1.938 8.5a7 7 0 0 0 0 7A7.2 7.2 0 0 0 4.5 18.063 7.2 7.2 0 0 0 8 19a7.2 7.2 0 0 0 3.5-.937 7.2 7.2 0 0 0 2.563-2.563 7 7 0 0 0 0-7A7.2 7.2 0 0 0 11.5 5.938 7.2 7.2 0 0 0 8 5m0 15q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20M6.5 8H10q.47.031.5.5-.03.47-.5.5H6.906l-.531 2.063 2.5.25q.937.125 1.531.75.563.656.594 1.593-.03 1-.687 1.656-.657.657-1.657.688H7.281q-1.374-.03-2.156-1.125l-.031-.094q-.219-.406.125-.687.406-.219.687.125l.063.094q.468.656 1.312.687h1.375q.563 0 .938-.406.406-.375.406-.938 0-.531-.344-.906t-.875-.437L5.687 12a.48.48 0 0 1-.343-.219.47.47 0 0 1-.063-.406l.75-3Q6.125 8.031 6.5 8' />
    </g>
    <defs>
      <clipPath id='fe0a5c6723cee228__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveMdRegularIcon);
export default ForwardRef;
