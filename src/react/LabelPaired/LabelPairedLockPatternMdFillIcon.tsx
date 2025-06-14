import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6c0-1.094.875-2 2-2a2.01 2.01 0 0 1 1.719 1H8.25c.344-.594 1-1 1.75-1a2.01 2.01 0 0 1 1.719 1h2.531c.344-.594 1-1 1.75-1 1.094 0 2 .906 2 2 0 1.125-.906 2-2 2-.187 0-.375 0-.531-.062L11.906 11.5c.063.156.094.344.094.5 0 1.125-.906 2-2 2-.187 0-.375 0-.531-.062L6.406 17H8.25c.344-.594 1-1 1.75-1a2.01 2.01 0 0 1 1.719 1h2.531c.344-.594 1-1 1.719-1 1.125 0 2 .906 2 2 0 1.125-.875 2-2 2a1.95 1.95 0 0 1-1.719-1h-2.531c-.344.625-1 1-1.75 1a1.95 1.95 0 0 1-1.719-1H5.719c-.344.625-1 1-1.719 1-1.125 0-2-.875-2-2 0-1.094.875-2 2-2 .156 0 .344.031.5.094l3.563-3.563A1.5 1.5 0 0 1 7.969 12c0-1.094.906-2 2-2 .187 0 .375.031.531.094L13.563 7h-1.844c-.344.625-1 1-1.75 1A1.95 1.95 0 0 1 8.25 7H5.719c-.344.625-1 1-1.719 1-1.125 0-2-.875-2-2m0 6c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75 0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 2 12m12 0c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75 0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0A2.02 2.02 0 0 0 14 12' />
    </g>
    <defs>
      <clipPath id='5a006d7a80d92256e047cafa90215e94__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternMdFillIcon);
export default ForwardRef;
