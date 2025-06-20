import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonCaptionRegularIcon = (
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
      <path d='M4.453 5.07A4.505 4.505 0 0 0 .75 9.5c0 2.508 1.992 4.5 4.477 4.5a4.66 4.66 0 0 0 2.203-.562c-2.485-.211-4.453-2.32-4.453-4.876 0-1.359.562-2.601 1.476-3.492M6 4.578a.335.335 0 0 1-.164.399 4.116 4.116 0 0 0 2.016 7.71c.234 0 .468 0 .703-.046.164-.024.328.046.398.187.07.164.047.328-.07.445a5.21 5.21 0 0 1-3.656 1.477C2.344 14.75 0 12.406 0 9.5c0-2.883 2.344-5.25 5.227-5.25.14 0 .304.023.445.023.164.024.305.141.328.305' />
    </g>
    <defs>
      <clipPath id='4afd0313c62e7f44cbfa12b8ac8b98b2__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonCaptionRegularIcon);
export default ForwardRef;
