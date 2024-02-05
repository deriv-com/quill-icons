import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 5.75v7.5q.023.352.375.375h7.5q.352-.023.375-.375V7.508q0-.165-.117-.281l.797-.797q.445.445.445 1.078v5.742a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25v-7.5q.024-.632.445-1.055.422-.421 1.055-.445h5.766q.609 0 1.054.445l1.735 1.735-.797.797-1.735-1.735-.023-.023v2.343q-.047.516-.562.563h-4.5q-.516-.047-.563-.562V5.374H1.75q-.352.023-.375.375m1.875-.375V7.25h3.375V5.375zM4 11q.024-.843.75-1.29.75-.42 1.5 0 .726.446.75 1.29-.024.844-.75 1.29-.75.42-1.5 0Q4.024 11.843 4 11' />
    </g>
    <defs>
      <clipPath id='470296b0299dcaaa0389a7f99e4200b7__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskCaptionBoldIcon);
export default ForwardRef;
