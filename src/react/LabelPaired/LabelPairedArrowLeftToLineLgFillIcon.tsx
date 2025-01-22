import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 9.25C.25 8.586.797 8 1.5 8c.664 0 1.25.586 1.25 1.25v12.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25zm5.352 7.148a1.205 1.205 0 0 1 0-1.757l5-5a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757L9.508 14.25H16.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H9.508l2.851 2.89c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0z' />
    </g>
    <defs>
      <clipPath id='54f84de0262a6bd39667ebc42b661b0b__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineLgFillIcon);
export default ForwardRef;
