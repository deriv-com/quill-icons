import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.531 5.219v.031l5.25 5.5q.438.531 0 1.031-.562.438-1.062 0L6.75 7.625V18.25q-.063.687-.75.75-.687-.063-.75-.75V7.625L1.281 11.75q-.5.47-1.062.031-.438-.5 0-1.062l5.25-5.5A.72.72 0 0 1 6 5q.312 0 .531.219' />
    </g>
    <defs>
      <clipPath id='479b1bf8c69c1f13__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpMdBoldIcon);
export default ForwardRef;
