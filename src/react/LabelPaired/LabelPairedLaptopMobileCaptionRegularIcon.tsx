import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileCaptionRegularIcon = (
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
      <path d='M3 4.25a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v5.25h6V11H.797q.234.703 1.008.75H8.25v.75H1.805q-.774-.023-1.266-.516Q.024 11.47 0 10.695q.047-.398.445-.445H1.5V5q.024-.632.445-1.055Q2.368 3.524 3 3.5h7.5q.633.024 1.055.445.421.423.445 1.055v.75h-.75V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm6.75 3.375v6.75q.023.352.375.375h3.75q.352-.023.375-.375v-6.75q-.023-.352-.375-.375h-3.75q-.352.023-.375.375m-.75 0q.024-.468.328-.797.329-.304.797-.328h3.75q.469.024.797.328.304.328.328.797v6.75a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-3.75a1.22 1.22 0 0 1-.797-.328A1.22 1.22 0 0 1 9 14.375z' />
    </g>
    <defs>
      <clipPath id='bb07acde70bea0003c0a8972f73050dc__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileCaptionRegularIcon);
export default ForwardRef;
