import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.758 14.258q-.258.234-.516 0-.234-.258 0-.516L5.461 9.5 1.242 5.258q-.234-.258 0-.516.258-.234.516 0l4.5 4.5q.234.258 0 .516zm4.5 0q-.258.234-.516 0-.234-.258 0-.516L9.961 9.5 5.742 5.258q-.234-.258 0-.516.258-.234.516 0l4.5 4.5q.234.258 0 .516z' />
    </g>
    <defs>
      <clipPath id='d5b19c32852937f2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightCaptionRegularIcon);
export default ForwardRef;
