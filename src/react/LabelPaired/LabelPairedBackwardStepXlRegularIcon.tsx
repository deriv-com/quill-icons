import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9.75v6.375l8.344-6.797c.234-.187.515-.328.844-.328.703 0 1.312.61 1.312 1.313v15.421c0 .703-.61 1.266-1.312 1.266q-.493 0-.844-.281L3 19.922v6.328c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V9.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75m9 .984L3.047 18 12 25.313z' />
    </g>
    <defs>
      <clipPath id='d745e79f199c9c0b429328f49b436cd9__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlRegularIcon);
export default ForwardRef;
