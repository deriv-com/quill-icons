import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5v.5c0 .563-.469 1-1 1H5c-.562 0-1-.437-1-1V5H3c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1h6c.531 0 1-.437 1-1V6c0-.531-.469-1-1-1zM7 5H5v.5h2zM1 6c0-1.094.875-2 2-2h6c1.094 0 2 .906 2 2v12c0 1.125-.906 2-2 2H3c-1.125 0-2-.875-2-2z' />
    </g>
    <defs>
      <clipPath id='e840ecd615c0cafc8da0f826cd659e4f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchMdRegularIcon);
export default ForwardRef;
