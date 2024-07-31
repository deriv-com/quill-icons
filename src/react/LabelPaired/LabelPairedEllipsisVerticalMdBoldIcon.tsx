import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={24}
    viewBox='0 0 4 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 15.5c.531 0 1 .313 1.281.75.281.469.281 1.063 0 1.5-.281.469-.75.75-1.281.75a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75m0-5c.531 0 1 .313 1.281.75.281.469.281 1.063 0 1.5-.281.469-.75.75-1.281.75a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75M3.5 7c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 .5 7c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0 .438.281.75.75.75 1.281' />
    </g>
    <defs>
      <clipPath id='b7a3a2c38ee18b849fb74fe5dac3ca94__a'>
        <path d='M0 0h4v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalMdBoldIcon);
export default ForwardRef;
