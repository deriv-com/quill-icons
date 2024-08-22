import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v1.25H.25zm0 2.5h17.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23zM4 14.25c0 .352.273.625.625.625h8.75A.64.64 0 0 0 14 14.25c0-.312-.312-.625-.625-.625h-8.75A.64.64 0 0 0 4 14.25M4 18c0 .352.273.625.625.625h8.75A.64.64 0 0 0 14 18c0-.312-.312-.625-.625-.625h-8.75A.64.64 0 0 0 4 18m0 3.75c0 .352.273.625.625.625h3.75A.64.64 0 0 0 9 21.75c0-.312-.312-.625-.625-.625h-3.75A.64.64 0 0 0 4 21.75' />
    </g>
    <defs>
      <clipPath id='81cbb5aa764281f56b27adde2db22084__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadLgFillIcon);
export default ForwardRef;
