import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.625 25.5c-.656 0-1.125-.469-1.125-1.125v-11.25c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v8.578l10.828-10.875a1.103 1.103 0 0 1 1.547 0c.469.469.469 1.172 0 1.594L5.297 23.25h8.578c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125z' />
    </g>
    <defs>
      <clipPath id='c12bace90933e85a537e9da239f834a3__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlBoldIcon);
export default ForwardRef;
