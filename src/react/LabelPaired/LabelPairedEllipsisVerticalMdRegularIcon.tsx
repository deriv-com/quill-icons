import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalMdRegularIcon = (
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
      <path d='M2 16c.531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1m0-5c.531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1m1-4c0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1' />
    </g>
    <defs>
      <clipPath id='ac3ce841521606938833f81d2fcd00e5__a'>
        <path d='M0 0h4v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalMdRegularIcon);
export default ForwardRef;
