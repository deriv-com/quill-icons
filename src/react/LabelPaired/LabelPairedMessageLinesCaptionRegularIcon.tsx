import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesCaptionRegularIcon = (
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
      <path d='M4.5 13.25v1.125l2.297-1.71a.74.74 0 0 1 .445-.165H10.5c.398 0 .75-.328.75-.75V5a.77.77 0 0 0-.75-.75h-9A.755.755 0 0 0 .75 5v6.75c0 .422.328.75.75.75h2.25c.398 0 .75.352.75.75m-3-9.75h9c.82 0 1.5.68 1.5 1.5v6.75c0 .844-.68 1.5-1.5 1.5H7.242l-2.906 2.18c-.117.093-.258.093-.399.047a.39.39 0 0 1-.187-.352V13.25H1.5a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5m1.875 3.375h5.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-5.25A.37.37 0 0 1 3 7.25c0-.187.164-.375.375-.375m0 2.25h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3A.37.37 0 0 1 3 9.5c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='56e14c00637c4d441cb5a6db723b283b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesCaptionRegularIcon);
export default ForwardRef;
