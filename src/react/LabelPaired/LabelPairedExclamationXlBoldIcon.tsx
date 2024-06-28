import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={36}
    viewBox='0 0 3 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.625 8.625v13.5A1.11 1.11 0 0 1 1.5 23.25c-.656 0-1.125-.469-1.125-1.125v-13.5C.375 8.015.844 7.5 1.5 7.5c.61 0 1.125.516 1.125 1.125M1.5 28.5A1.48 1.48 0 0 1 0 27c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5' />
    </g>
    <defs>
      <clipPath id='afe9128df5ff2f88e84be2e0b0f97512__a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlBoldIcon);
export default ForwardRef;
