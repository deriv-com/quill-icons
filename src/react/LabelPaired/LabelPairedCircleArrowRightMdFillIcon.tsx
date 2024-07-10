import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowRightMdFillIcon = (
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
      <path d='M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.781 4.031 3.5-3.5c.281-.281.281-.75 0-1.062L8.781 8C8.47 7.688 8 7.688 7.72 8a.684.684 0 0 0 0 1.031l2.218 2.219H4.25a.74.74 0 0 0-.75.75c0 .438.313.75.75.75l5.688.031L7.717 15a.684.684 0 0 0 0 1.031c.282.313.75.313 1.063 0' />
    </g>
    <defs>
      <clipPath id='355d69cd8230bc693b6608221744e86e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowRightMdFillIcon);
export default ForwardRef;
