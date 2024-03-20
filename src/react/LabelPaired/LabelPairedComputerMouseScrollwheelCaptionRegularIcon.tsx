import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 11.75v-4.5c0-1.64-1.36-3-3-3h-1.5c-1.664 0-3 1.36-3 3v4.5c0 1.664 1.336 3 3 3h1.5c1.64 0 3-1.336 3-3M0 7.25A3.746 3.746 0 0 1 3.75 3.5h1.5A3.76 3.76 0 0 1 9 7.25v4.5a3.746 3.746 0 0 1-3.75 3.75h-1.5A3.73 3.73 0 0 1 0 11.75zm4.875-1.125v1.5c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-1.5c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='e911cbbc0d71367560a971eddfa0ed10__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelCaptionRegularIcon);
export default ForwardRef;
