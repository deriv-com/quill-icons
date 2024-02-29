import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarCaptionRegularIcon = (
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
      <path d='M6 4.25a5.4 5.4 0 0 0-2.625.703 5.4 5.4 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.4 5.4 0 0 0 1.922 1.922A5.4 5.4 0 0 0 6 14.75a5.4 5.4 0 0 0 2.625-.703 5.4 5.4 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.4 5.4 0 0 0-1.922-1.922A5.4 5.4 0 0 0 6 4.25M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797m.328-9.352.867 1.711 1.899.282q.21.046.304.257a.47.47 0 0 1-.093.399l-1.383 1.336.328 1.875a.39.39 0 0 1-.164.375.36.36 0 0 1-.375.023L6 11.516l-1.687.89a.4.4 0 0 1-.399-.023.39.39 0 0 1-.164-.375l.328-1.875-1.36-1.36a.34.34 0 0 1-.093-.375.36.36 0 0 1 .281-.257l1.899-.282.867-1.71A.33.33 0 0 1 6 5.936q.235 0 .328.211m-.937 2.227a.43.43 0 0 1-.282.21l-1.336.188.961.961a.38.38 0 0 1 .118.329l-.235 1.335 1.196-.632a.35.35 0 0 1 .351 0l1.219.632-.235-1.335a.41.41 0 0 1 .094-.329l.985-.96-1.336-.188q-.212-.047-.282-.211L6 7.156z' />
    </g>
    <defs>
      <clipPath id='919ccbf076726d93e0d8aa58862e980d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarCaptionRegularIcon);
export default ForwardRef;
