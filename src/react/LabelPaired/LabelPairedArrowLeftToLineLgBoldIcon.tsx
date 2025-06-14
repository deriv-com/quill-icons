import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineLgBoldIcon = (
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
      <path d='M.25 22.063V8.938C.25 8.43.64 8 1.188 8a.95.95 0 0 1 .937.938v13.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937m5.273-7.227 5.313-5c.39-.352.976-.352 1.328.039s.352.977-.039 1.328l-3.594 3.36h8.281a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938H8.53l3.594 3.398c.39.352.39.937.04 1.328-.352.39-.938.39-1.33.04l-5.312-5c-.195-.196-.273-.43-.273-.704 0-.234.078-.508.273-.664' />
    </g>
    <defs>
      <clipPath id='8aaddd64d03eb30fd9f3a46354d217fd__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineLgBoldIcon);
export default ForwardRef;
