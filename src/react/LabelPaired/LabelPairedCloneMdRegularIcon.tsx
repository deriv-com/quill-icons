import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneMdRegularIcon = (
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
      <path d='M2 19h7c.531 0 1-.437 1-1v-2h1v2c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-7c0-1.094.875-2 2-2h2v1H2c-.562 0-1 .469-1 1v7c0 .563.438 1 1 1m5-5h7c.531 0 1-.437 1-1V6c0-.531-.469-1-1-1H7c-.562 0-1 .469-1 1v7c0 .563.438 1 1 1m-2-1V6c0-1.094.875-2 2-2h7c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H7c-1.125 0-2-.875-2-2' />
    </g>
    <defs>
      <clipPath id='774aa9c3e1a4f5dcf4078a1f482cdcf1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneMdRegularIcon);
export default ForwardRef;
