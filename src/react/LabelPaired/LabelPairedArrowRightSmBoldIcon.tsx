import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.406 11.242-4.812 4.594c-.274.246-.684.246-.93-.027-.246-.274-.246-.684.027-.93l3.637-3.473H1.031a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h9.297L6.691 6.648a.653.653 0 0 1-.027-.93.653.653 0 0 1 .93-.027l4.812 4.594c.137.137.219.3.219.465a.68.68 0 0 1-.219.492' />
    </g>
    <defs>
      <clipPath id='e41074b93cd4cf322efef030fe74f63e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightSmBoldIcon);
export default ForwardRef;
