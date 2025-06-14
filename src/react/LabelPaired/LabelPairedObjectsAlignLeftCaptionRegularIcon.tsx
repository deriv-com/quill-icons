import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftCaptionRegularIcon = (
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
      <path d='M0 3.875C0 3.688.164 3.5.375 3.5c.188 0 .375.188.375.375v11.25c0 .21-.187.375-.375.375A.37.37 0 0 1 0 15.125zm3.75 3.75c0 .21.164.375.375.375h6.75a.385.385 0 0 0 .375-.375v-1.5a.4.4 0 0 0-.375-.375h-6.75a.385.385 0 0 0-.375.375zM3 6.125C3 5.515 3.492 5 4.125 5h6.75C11.485 5 12 5.516 12 6.125v1.5c0 .633-.516 1.125-1.125 1.125h-6.75A1.11 1.11 0 0 1 3 7.625zm.75 6.75c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375v-1.5A.4.4 0 0 0 7.875 11h-3.75a.385.385 0 0 0-.375.375zm-.75-1.5c0-.61.492-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v1.5C9 13.508 8.484 14 7.875 14h-3.75A1.11 1.11 0 0 1 3 12.875z' />
    </g>
    <defs>
      <clipPath id='3a488829bd5d6a1925f8b9887a35b39d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftCaptionRegularIcon);
export default ForwardRef;
