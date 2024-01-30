import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.3 5.2 5.25 5.25q.274.3 0 .6-.3.274-.6 0L7 6.13 2.05 11.05q-.3.273-.6 0-.274-.3 0-.602L6.7 5.2q.3-.273.6 0m5.25 10.5q.274.3 0 .6-.3.274-.6 0L7 11.38 2.05 16.3q-.3.273-.6 0-.274-.3 0-.602l5.25-5.25q.3-.273.6 0z' />
    </g>
    <defs>
      <clipPath id='1388b2183955961af2e93a9dd053bd51__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpSmRegularIcon);
export default ForwardRef;
