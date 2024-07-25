import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowsXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.406v7.125h8.578V9.234zm0 15.235v-7.032h8.578v8.203zm9.516 1.312V18.61H21V28.5zm0-17.86L21 7.5v10.031H9.516z' />
    </g>
    <defs>
      <clipPath id='58c96f56d50a5993f223c3bc718a9c7c__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowsXlIcon);
export default ForwardRef;
