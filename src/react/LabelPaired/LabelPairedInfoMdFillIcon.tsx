import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={24}
    viewBox='0 0 6 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6.5c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0 .438.281.75.75.75 1.281 0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 1.5 6.5M0 11c0-.531.438-1 1-1h2c.531 0 1 .469 1 1v7h1c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h1v-6H1c-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='f2102ce13de1a0b31f3c537cedd0acbd__a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoMdFillIcon);
export default ForwardRef;
