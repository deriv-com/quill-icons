import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.875 4.625h-7a.85.85 0 0 0-.629.246A.85.85 0 0 0 1 5.5V16q0 .383.246.629a.85.85 0 0 0 .629.246h6.344q.41.491.93.848a1.4 1.4 0 0 1-.274.027h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52h7q.738.027 1.23.52.493.492.52 1.23v3.691q-.465.11-.875.329V5.5a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246m-7 3.063q.027-.411.438-.438h6.124q.411.027.438.438-.027.41-.437.437H2.311q-.41-.027-.437-.437m.438 2.187h5.25q.41.027.437.438-.027.41-.437.437h-5.25q-.411-.027-.438-.437.027-.411.438-.438m0 2.625h3.5q.41.027.437.438-.027.41-.437.437h-3.5q-.411-.027-.438-.437.027-.411.438-.438m9.625 4.375q.82 0 1.53-.41a3 3 0 0 0 1.122-1.121q.41-.711.41-1.531t-.41-1.532a3 3 0 0 0-1.121-1.12 3 3 0 0 0-1.531-.411q-.82 0-1.532.41a3 3 0 0 0-1.12 1.121q-.411.711-.411 1.531t.41 1.532q.41.71 1.121 1.12t1.531.411m0-7q1.066 0 1.968.52.903.519 1.45 1.449.519.93.519 1.969 0 1.038-.52 1.968a3.95 3.95 0 0 1-1.449 1.45 3.9 3.9 0 0 1-1.969.519q-1.066 0-1.968-.52a3.95 3.95 0 0 1-1.45-1.449A4 4 0 0 1 8 13.812q0-1.038.52-1.968a3.95 3.95 0 0 1 1.449-1.45 3.9 3.9 0 0 1 1.969-.519m1.23 2.762q.3-.274.602 0 .273.3 0 .601l-1.97 1.969q-.3.273-.6 0l-1.094-1.094q-.274-.3 0-.601.3-.274.601 0l.793.765z' />
    </g>
    <defs>
      <clipPath id='d5ff7d73571d320f8d128bd7b7739c1d__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckSmRegularIcon);
export default ForwardRef;
