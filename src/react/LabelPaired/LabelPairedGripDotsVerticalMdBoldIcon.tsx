import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 8c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1m0 5c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1m1 4c0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1m3-9c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1m1 4c0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1m-1 6c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1' />
    </g>
    <defs>
      <clipPath id='25a6b5abb8c579b849d1951d7c718952__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalMdBoldIcon);
export default ForwardRef;
