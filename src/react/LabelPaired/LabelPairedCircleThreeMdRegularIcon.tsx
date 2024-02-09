import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeMdRegularIcon = (
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
      <path d='M8 5a7.2 7.2 0 0 0-3.5.938A7.2 7.2 0 0 0 1.938 8.5a7 7 0 0 0 0 7A7.2 7.2 0 0 0 4.5 18.063 7.2 7.2 0 0 0 8 19a7.2 7.2 0 0 0 3.5-.937 7.2 7.2 0 0 0 2.563-2.563 7 7 0 0 0 0-7A7.2 7.2 0 0 0 11.5 5.938 7.2 7.2 0 0 0 8 5m0 15q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20M5.5 8H10q.344.03.469.313.093.343-.156.562L7.842 11h.626q1.094 0 1.781.719.72.719.75 1.781-.03 1.062-.75 1.781-.687.688-1.75.719H7.375Q6 15.97 5.188 14.906l-.094-.094q-.25-.405.093-.718.406-.219.72.125l.062.094A1.69 1.69 0 0 0 7.375 15H8.5q.624 0 1.063-.437A1.63 1.63 0 0 0 10 13.5q-.031-.656-.437-1.062A1.45 1.45 0 0 0 8.5 12h-2q-.344-.03-.469-.312-.093-.344.157-.563L8.656 9H5.5q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='ee6eba70eafb4698987ab934c4246800__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeMdRegularIcon);
export default ForwardRef;
