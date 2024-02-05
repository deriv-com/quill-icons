import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankLgBoldIcon = (
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
      <path d='m10.469 5.617 8.828 4.883q.664.39.703 1.172 0 .547-.39.937-.391.39-.938.391H1.328q-.546 0-.937-.39Q0 12.218 0 11.671q.039-.782.703-1.172l8.828-4.883a1 1 0 0 1 .938 0m-1.563 5.508a1.24 1.24 0 0 1-.156-.625q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .351-.156.625h5.469L10 7.492l-6.562 3.633zM2.5 14.25h1.875v6.25h2.5v-6.25H8.75v6.25h2.5v-6.25h1.875v6.25h2.5v-6.25H17.5v6.25h.313q.858.078.937.938-.078.858-.937.937H2.5q-.86-.079-.937-.937.078-.86.937-.938zm-1.25 9.375h17.813q.858.078.937.938-.078.858-.937.937H1.25q-.86-.079-.937-.937.078-.86.937-.938' />
    </g>
    <defs>
      <clipPath id='b075581d81199372ff4b461517bfa876__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankLgBoldIcon);
export default ForwardRef;
