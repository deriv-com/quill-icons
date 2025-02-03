import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 12c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 10.5 12c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0 .438.281.75.75.75 1.281m-5 0c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 5.5 12c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0 .438.281.75.75.75 1.281M2 13.5a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75.531 0 1 .313 1.281.75.281.469.281 1.063 0 1.5-.281.469-.75.75-1.281.75' />
    </g>
    <defs>
      <clipPath id='2de46d0f3a8efdd124eea7d92bd0863c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisMdBoldIcon);
export default ForwardRef;
