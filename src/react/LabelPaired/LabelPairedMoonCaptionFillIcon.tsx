import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonCaptionFillIcon = (
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
      <path d='M5.227 4.25v.023h.445c.164.024.305.141.328.305a.335.335 0 0 1-.164.399 4.116 4.116 0 0 0 2.016 7.71c.234 0 .468 0 .703-.046.164-.024.328.046.398.187.07.164.047.328-.07.445a5.21 5.21 0 0 1-3.656 1.477C2.344 14.75 0 12.406 0 9.5c0-2.883 2.344-5.25 5.227-5.25' />
    </g>
    <defs>
      <clipPath id='7ae98da1250b484a724f7b732cc0ff36__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonCaptionFillIcon);
export default ForwardRef;
