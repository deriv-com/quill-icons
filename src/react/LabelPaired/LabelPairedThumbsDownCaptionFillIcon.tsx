import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownCaptionFillIcon = (
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
      <path d='M7.336 14.75A1.156 1.156 0 0 1 6 13.86l-.047-.282c-.14-.773-.586-1.476-1.195-1.969l-.164-.14A2.2 2.2 0 0 1 3.75 9.71V7.11c0-.75.375-1.454.984-1.876l.914-.586a2.17 2.17 0 0 1 1.243-.398h2.297c.609 0 1.124.516 1.124 1.125a.8.8 0 0 1-.046.258 1.104 1.104 0 0 1 .632 1.64c.516.118.915.563.915 1.102 0 .375-.165.68-.422.89.351.188.609.563.609.985 0 .633-.516 1.125-1.125 1.125H7.5c.305.563.54 1.148.656 1.781l.07.258a1.156 1.156 0 0 1-.89 1.336M.75 12.5a.74.74 0 0 1-.75-.75V6.5c0-.398.328-.75.75-.75h1.5c.398 0 .75.352.75.75v5.25c0 .422-.352.75-.75.75z' />
    </g>
    <defs>
      <clipPath id='9d22ecb950bd0d1a07358e06cf98171f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownCaptionFillIcon);
export default ForwardRef;
