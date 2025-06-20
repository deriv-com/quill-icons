import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftMdBoldIcon = (
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
      <path d='M1.25 11a.72.72 0 0 1-.75-.75v-4.5A.74.74 0 0 1 1.25 5a.76.76 0 0 1 .75.75v2.531l.625-.75C3.906 6 5.813 5 8 5c3.844 0 7 3.156 7 7 0 3.875-3.156 7-7 7-1.594 0-3.031-.5-4.219-1.375-.312-.25-.406-.719-.156-1.062a.75.75 0 0 1 1.063-.157A5.47 5.47 0 0 0 8 17.5c3.031 0 5.5-2.437 5.5-5.5 0-3.031-2.469-5.5-5.5-5.5-1.719 0-3.219.781-4.25 2l-.844 1H5.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75z' />
    </g>
    <defs>
      <clipPath id='455b4ba10b9c565c19486aefd6a920f8__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftMdBoldIcon);
export default ForwardRef;
