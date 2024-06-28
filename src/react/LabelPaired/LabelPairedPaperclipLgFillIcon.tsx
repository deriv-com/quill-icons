import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipLgFillIcon = (
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
      <path d='M14.469 8.781a2.5 2.5 0 0 0-3.477 0L3.805 15.97c-1.64 1.64-1.64 4.336 0 5.976s4.336 1.64 5.976 0l5.938-5.937c.43-.43 1.094-.43 1.523 0 .43.43.43 1.094 0 1.523l-5.937 5.938a6.366 6.366 0 0 1-9.024 0 6.366 6.366 0 0 1 0-9.024L9.47 7.258a4.55 4.55 0 0 1 6.523 0 4.55 4.55 0 0 1 0 6.523l-6.875 6.875a2.806 2.806 0 0 1-4.023 0 2.806 2.806 0 0 1 0-4.023l5.625-5.625c.43-.43 1.094-.43 1.523 0 .43.43.43 1.094 0 1.523l-5.625 5.625a.766.766 0 0 0 0 .977.766.766 0 0 0 .977 0l6.875-6.875a2.5 2.5 0 0 0 0-3.477' />
    </g>
    <defs>
      <clipPath id='4e042d2b7e977c7e062da512a5506c14__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipLgFillIcon);
export default ForwardRef;
