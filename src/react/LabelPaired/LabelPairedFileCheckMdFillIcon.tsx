import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCheckMdFillIcon = (
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
      <path d='M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zm1.531 8.781H9.5c.313-.281.313-.75 0-1.062a.736.736 0 0 0-1.031 0l-3.5 3.5L3.5 13.75a.684.684 0 0 0-1.031 0 .684.684 0 0 0 0 1.031l2 2c.281.313.75.313 1.062 0z' />
    </g>
    <defs>
      <clipPath id='f662b52c59a48143e88b60dfaf818f69__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCheckMdFillIcon);
export default ForwardRef;
