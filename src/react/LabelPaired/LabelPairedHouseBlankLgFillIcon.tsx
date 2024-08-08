import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.71 15.5c0 .703-.585 1.25-1.25 1.25h-1.25l.04 6.25c0 1.406-1.094 2.54-2.5 2.54H5.25a2.49 2.49 0 0 1-2.5-2.5v-6.29H1.5c-.703 0-1.25-.547-1.25-1.25 0-.352.117-.664.39-.937l10-8.75c.274-.274.587-.313.86-.313s.586.078.82.273l9.961 8.79c.313.273.469.585.43.937' />
    </g>
    <defs>
      <clipPath id='bdfeaeb1fa49f1f2478cf8c1972323f4__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankLgFillIcon);
export default ForwardRef;
