import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.578 14.25H.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.977c1.054-3.594 4.414-6.25 8.398-6.25h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H10.25c-3.281 0-6.055 2.11-7.11 5h7.735c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H2.828c-.078.43-.078.86-.078 1.25 0 .43.04.86.078 1.25h8.047c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.141a7.54 7.54 0 0 0 7.109 5h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H10.25c-3.984 0-7.344-2.617-8.398-6.25H.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.703c-.078-.39-.078-.82-.078-1.25 0-.39 0-.82.078-1.25' />
    </g>
    <defs>
      <clipPath id='74bc9aa8aa6a24506ccb830e472544f3__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignLgRegularIcon);
export default ForwardRef;
