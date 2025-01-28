import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowLeftMdFillIcon = (
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
      <path d='M16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12M7.219 7.969l-3.5 3.531a.684.684 0 0 0 0 1.031l3.5 3.5a.684.684 0 0 0 1.031 0c.313-.281.313-.75 0-1.062L6.031 12.75h5.719a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H6.031L8.25 9.031c.313-.281.313-.75 0-1.062a.736.736 0 0 0-1.031 0' />
    </g>
    <defs>
      <clipPath id='18bce72ecb2e17391f2fa43b096bc65b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowLeftMdFillIcon);
export default ForwardRef;
