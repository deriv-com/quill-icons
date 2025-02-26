import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.5 5.5h6.25c.664 0 1.25.586 1.25 1.25V13c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.797l-7.89 7.851a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757L15.703 8H12.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25M3.125 6.75H7.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H3.125a.64.64 0 0 0-.625.625v12.5c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625V18c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v4.375a3.11 3.11 0 0 1-3.125 3.125h-12.5C1.367 25.5 0 24.133 0 22.375v-12.5A3.11 3.11 0 0 1 3.125 6.75' />
    </g>
    <defs>
      <clipPath id='8d47c93338ec4dc13b09e1f7a9dcf244__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareLgFillIcon);
export default ForwardRef;
