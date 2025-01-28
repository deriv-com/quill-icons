import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareLgFillIcon = (
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
      <path d='M14 14.25h-1.836C10.406 14.25 9 15.695 9 17.453c0 .86.39 1.328.742 1.563.274.195.508.468.508.82a.7.7 0 0 1-.703.703H9.43a.7.7 0 0 1-.274-.078c-.703-.313-3.906-1.914-3.906-5.586 0-3.086 2.5-5.625 5.625-5.625H14V6.867c0-.742.586-1.367 1.328-1.367.352 0 .664.156.899.352l5.43 4.882c.273.274.468.625.468 1.016 0 .43-.195.781-.469 1.055l-5.43 4.883c-.234.234-.546.312-.859.312h-.117c-.703 0-1.25-.547-1.25-1.25zm-10.625-5a.64.64 0 0 0-.625.625v12.5c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625V20.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v1.875a3.11 3.11 0 0 1-3.125 3.125h-12.5C1.617 25.5.25 24.133.25 22.375v-12.5A3.11 3.11 0 0 1 3.375 6.75H5.25c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25z' />
    </g>
    <defs>
      <clipPath id='7bb8eddf26fa3161bbafa98ec7f6347f__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareLgFillIcon);
export default ForwardRef;
