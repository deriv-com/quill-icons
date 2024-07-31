import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageMdRegularIcon = (
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
      <path d='M2 6c-.562 0-1 .469-1 1v7.313l2.094-2.126a1.304 1.304 0 0 1 1.781 0L7 14.314l4.094-4.126a1.304 1.304 0 0 1 1.781 0L15 12.314V7c0-.531-.469-1-1-1zm-1 9.719V17c0 .563.438 1 1 1h1.281l3-3-2.125-2.094a.245.245 0 0 0-.343 0zm11.156-4.813a.245.245 0 0 0-.344 0L4.689 18H14c.531 0 1-.437 1-1v-3.281zM0 7c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm5 1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5m-2 0c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0 .438.281.75.75.75 1.281 0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 3 8.5' />
    </g>
    <defs>
      <clipPath id='17f05d0bf2744b75bd4d2fa2f9503380__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageMdRegularIcon);
export default ForwardRef;
