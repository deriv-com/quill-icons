import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseLgBoldIcon = (
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
      <path d='M6.875 7.688V9.25h6.25V7.688a.336.336 0 0 0-.312-.313H7.187a.31.31 0 0 0-.312.313M5 9.25V7.688C5 6.516 5.977 5.5 7.188 5.5h5.625C13.984 5.5 15 6.516 15 7.688V9.25h2.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-10c0-1.367 1.094-2.5 2.5-2.5zm-3.125 8.125v4.375c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-4.375H12.5V18c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25v-.625zM7.5 15.5h10.625v-3.75c0-.312-.312-.625-.625-.625h-15a.64.64 0 0 0-.625.625v3.75z' />
    </g>
    <defs>
      <clipPath id='e27597f6d56d1f14a44dc9fb46e1fb9f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseLgBoldIcon);
export default ForwardRef;
