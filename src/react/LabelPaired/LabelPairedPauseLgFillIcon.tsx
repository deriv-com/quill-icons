import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 8h1.25c1.016 0 1.875.86 1.875 1.875v11.25C5.25 22.18 4.39 23 3.375 23h-1.25A1.85 1.85 0 0 1 .25 21.125V9.875C.25 8.859 1.07 8 2.125 8m7.5 0h1.25c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875h-1.25a1.85 1.85 0 0 1-1.875-1.875V9.875C7.75 8.859 8.57 8 9.625 8' />
    </g>
    <defs>
      <clipPath id='296852056af9490e25b286ec2f054bba__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgFillIcon);
export default ForwardRef;
