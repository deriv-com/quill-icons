import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 27.75h11.531a9 9 0 0 0 1.875 1.922c-.422.234-.937.328-1.406.328H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11v2.437l-2.25.938V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75v18c0 .422.328.75.75.75m16.828-11.156c.235-.094.563-.094.797 0l5.625 2.25c.469.187.75.61.75 1.031 0 3-1.219 7.922-6.328 10.078-.281.094-.61.094-.89 0-5.11-2.156-6.282-7.078-6.282-10.078 0-.422.281-.844.703-1.031zm4.875 4.031-4.453-1.781v8.812c3.188-1.547 4.266-4.64 4.453-7.031' />
    </g>
    <defs>
      <clipPath id='7065542195220bf6909f675c1da996b1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldXlBoldIcon);
export default ForwardRef;
