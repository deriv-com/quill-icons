import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.875 6.125a2.32 2.32 0 0 0-3.281 0l-6 6a3.716 3.716 0 0 0 0 5.281 3.716 3.716 0 0 0 5.281 0l4.75-4.75a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719l-4.75 4.75c-1.844 1.844-4.875 1.844-6.719 0-1.844-1.875-1.844-4.875 0-6.719l6-6a3.377 3.377 0 0 1 4.719 0 3.377 3.377 0 0 1 0 4.719l-5.75 5.75c-.875.875-2.344.781-3.125-.187a2.1 2.1 0 0 1 .156-2.782l4.75-4.75a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719l-4.75 4.75c-.407.375-.438 1-.094 1.438.406.5 1.188.562 1.625.093l5.75-5.75a2.32 2.32 0 0 0 0-3.281' />
    </g>
    <defs>
      <clipPath id='dab0ce2aa91fa42638078986a2aa9ff0__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipMdRegularIcon);
export default ForwardRef;
