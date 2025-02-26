import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.625c-1.758 0-3.352.938-4.242 2.438a4.89 4.89 0 0 0 0 4.875A4.88 4.88 0 0 0 6 14.375a4.87 4.87 0 0 0 4.219-2.437 4.89 4.89 0 0 0 0-4.876C9.329 5.563 7.734 4.626 6 4.626M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-.797-7.664-.562.422a.56.56 0 0 1-.68-.89l.562-.423c.375-.28.82-.445 1.29-.422h.093c1.078.024 1.969.891 1.969 1.993 0 .539-.234 1.078-.633 1.453L5.72 11.375h1.968a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H4.313a.59.59 0 0 1-.54-.352.59.59 0 0 1 .141-.609L6.47 9.15a.93.93 0 0 0 .281-.633.88.88 0 0 0-.867-.868h-.07c-.235 0-.446.07-.61.188' />
    </g>
    <defs>
      <clipPath id='10975cb5872c69f69211dbecedf214e9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoCaptionBoldIcon);
export default ForwardRef;
