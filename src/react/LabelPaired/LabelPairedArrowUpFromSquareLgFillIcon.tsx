import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareLgFillIcon = (
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
      <path d='m10.86 5.89 3.75 3.75c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L11.25 9.797V18c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.797l-1.64 1.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0M2.5 9.876v12.5c0 .352.273.625.625.625h13.75a.64.64 0 0 0 .625-.625v-12.5c0-.312-.312-.625-.625-.625h-.312c-.704 0-1.25-.547-1.25-1.25 0-.664.546-1.25 1.25-1.25h.312A3.134 3.134 0 0 1 20 9.875v12.5a3.11 3.11 0 0 1-3.125 3.125H3.125C1.367 25.5 0 24.133 0 22.375v-12.5A3.11 3.11 0 0 1 3.125 6.75h.313c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.313a.64.64 0 0 0-.625.625' />
    </g>
    <defs>
      <clipPath id='6383162726dfbe97db4c6de07c71e729__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareLgFillIcon);
export default ForwardRef;
