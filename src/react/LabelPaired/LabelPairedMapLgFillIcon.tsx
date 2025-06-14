import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapLgFillIcon = (
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
      <path d='m15.25 24.133-7.5-2.149V6.906l7.5 2.149zm1.25-.078V8.977l4.96-1.993c.587-.234 1.29.196 1.29.86V20.93c0 .39-.234.742-.625.86zM.836 9.25 6.5 6.984v15.079l-5 1.992a.916.916 0 0 1-1.25-.86V10.11c0-.39.234-.742.586-.859' />
    </g>
    <defs>
      <clipPath id='63e3ce7120205d73bf964cb15db839b5__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapLgFillIcon);
export default ForwardRef;
