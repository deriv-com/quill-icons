import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.125 3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.398C7.75 4.461 9.25 6.055 9.25 8v.703c0 1.008.398 1.992 1.125 2.719l.07.07c.188.188.305.469.305.727a1.05 1.05 0 0 1-1.055 1.054H1.281C.695 13.25.25 12.805.25 12.22c0-.281.094-.54.305-.727l.047-.07A3.87 3.87 0 0 0 1.75 8.703V8a3.74 3.74 0 0 1 3.375-3.727zM5.5 5c-1.664 0-3 1.36-3 3v.703c0 1.219-.492 2.39-1.36 3.258l-.07.047a.4.4 0 0 0-.07.21.27.27 0 0 0 .281.282h8.414c.164 0 .305-.117.305-.281 0-.07-.047-.14-.094-.211l-.07-.047a4.63 4.63 0 0 1-1.36-3.281V8c0-1.64-1.335-3-3-3zm-.727 9.258a.76.76 0 0 0 .727.492.75.75 0 0 0 .703-.492c.07-.188.281-.305.469-.235s.305.282.234.493c-.21.586-.773.984-1.406.984a1.5 1.5 0 0 1-1.43-.984.393.393 0 0 1 .235-.493c.187-.07.398.047.468.235' />
    </g>
    <defs>
      <clipPath id='20e11b31582e600dfeb6e0fbe4183843__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellCaptionRegularIcon);
export default ForwardRef;
