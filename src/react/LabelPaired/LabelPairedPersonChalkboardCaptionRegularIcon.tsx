import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.938 4.813c0 .328.234.562.562.562a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563.555.555 0 0 0-.562.563m1.874 0A1.313 1.313 0 0 1 3.843 5.96c-.421-.234-.655-.656-.655-1.149 0-.468.234-.89.656-1.125a1.313 1.313 0 0 1 1.969 1.126M4.196 7.25c-.164 0-.304.047-.445.094V11h1.5V7.25zm-.445 7.875c0 .21-.187.375-.375.375A.37.37 0 0 1 3 15.125V8.258l-1.172 2.18a.385.385 0 0 1-.516.164c-.187-.118-.257-.329-.164-.516l1.383-2.578c.328-.61.961-1.008 1.664-1.008H7.5V4.625c0-.61.492-1.125 1.125-1.125h5.25c.61 0 1.125.516 1.125 1.125v5.25c0 .633-.516 1.125-1.125 1.125h-5.25A1.11 1.11 0 0 1 7.5 9.875V8h.75v1.875c0 .21.164.375.375.375h5.25a.385.385 0 0 0 .375-.375v-5.25a.4.4 0 0 0-.375-.375h-5.25a.385.385 0 0 0-.375.375V6.5h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H6v7.875c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11.75h-1.5z' />
    </g>
    <defs>
      <clipPath id='0f08251bcde1ddfd8777ba65466d19db__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardCaptionRegularIcon);
export default ForwardRef;
