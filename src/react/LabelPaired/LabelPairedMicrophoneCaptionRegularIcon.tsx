import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneCaptionRegularIcon = (
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
      <path d='M6 5.75c0-.82-.68-1.5-1.5-1.5-.844 0-1.5.68-1.5 1.5V9.5c0 .844.656 1.5 1.5 1.5.82 0 1.5-.656 1.5-1.5zm-3.75 0a2.25 2.25 0 0 1 4.5 0V9.5a2.25 2.25 0 0 1-4.5 0zM1.5 8.375V9.5c0 1.664 1.336 3 3 3 1.64 0 3-1.336 3-3V8.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375V9.5c0 1.945-1.5 3.563-3.375 3.75v1.5h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.5v-1.5C2.227 13.063.75 11.445.75 9.5V8.375C.75 8.188.914 8 1.125 8c.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='1696b1f68c31dd24c7973e0012e83def__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneCaptionRegularIcon);
export default ForwardRef;
