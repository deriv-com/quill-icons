import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneLgBoldIcon = (
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
      <path d='M2.5 23.625h8.75a.64.64 0 0 0 .625-.625v-2.5h1.875V23c0 1.406-1.133 2.5-2.5 2.5H2.5A2.47 2.47 0 0 1 0 23v-8.75c0-1.367 1.094-2.5 2.5-2.5H5v1.875H2.5a.64.64 0 0 0-.625.625V23c0 .352.273.625.625.625m6.25-6.25h8.75a.64.64 0 0 0 .625-.625V8c0-.312-.312-.625-.625-.625H8.75A.64.64 0 0 0 8.125 8v8.75c0 .352.273.625.625.625m-2.5-.625V8c0-1.367 1.094-2.5 2.5-2.5h8.75C18.867 5.5 20 6.633 20 8v8.75c0 1.406-1.133 2.5-2.5 2.5H8.75a2.47 2.47 0 0 1-2.5-2.5' />
    </g>
    <defs>
      <clipPath id='c22ddc50e10ebfebc460ca994e227229__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneLgBoldIcon);
export default ForwardRef;
