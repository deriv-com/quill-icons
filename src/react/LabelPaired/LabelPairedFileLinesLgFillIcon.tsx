import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileLinesLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 5.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zm-5.625 10a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h6.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625zm0 2.5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h6.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625zm0 2.5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h6.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625z' />
    </g>
    <defs>
      <clipPath id='93ea88ab4485e8e5c425b05e92381fc6__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileLinesLgFillIcon);
export default ForwardRef;
