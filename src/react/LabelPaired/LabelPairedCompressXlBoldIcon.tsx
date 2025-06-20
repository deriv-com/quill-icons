import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressXlBoldIcon = (
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
      <path d='M7.5 8.625v5.25A1.11 1.11 0 0 1 6.375 15h-5.25C.469 15 0 14.531 0 13.875c0-.61.469-1.125 1.125-1.125H5.25V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M1.125 21h5.25c.61 0 1.125.516 1.125 1.125v5.25A1.11 1.11 0 0 1 6.375 28.5c-.656 0-1.125-.469-1.125-1.125V23.25H1.125C.469 23.25 0 22.781 0 22.125 0 21.515.469 21 1.125 21M15.75 8.625v4.125h4.125c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 19.875 15h-5.25c-.656 0-1.125-.469-1.125-1.125v-5.25c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M14.625 21h5.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H15.75v4.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-5.25c0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='a548cc8329480ba175d8cd72b1550cb5__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressXlBoldIcon);
export default ForwardRef;
