import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.375 5.75v7.5q.023.352.375.375h4.852L6.32 14.75H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25v-7.5q.024-.632.445-1.055.422-.421 1.055-.445h5.766q.609 0 1.054.445l1.735 1.735-.797.797-1.735-1.735-.023-.023v2.343q-.047.516-.562.563h-4.5q-.516-.047-.563-.562V5.374H1.75q-.352.023-.375.375m8.93.68q.445.445.445 1.078V9.03l-1.125 1.125V7.508q0-.165-.117-.281zM3.25 5.375V7.25h3.375V5.375zM4 11q.024-.843.75-1.29.75-.42 1.5 0 .726.446.75 1.29-.024.844-.75 1.29-.75.42-1.5 0Q4.024 11.843 4 11m9.14-1.969.329.328q.28.305.281.657 0 .374-.281.68l-.68.679-1.664-1.664.68-.68q.305-.28.656-.281.374 0 .68.281m-5.578 4.242 3.024-3.023 1.664 1.664-3.023 3.024a.9.9 0 0 1-.352.21l-1.406.352a.41.41 0 0 1-.352-.117A.41.41 0 0 1 7 15.03l.352-1.406a.9.9 0 0 1 .21-.352' />
    </g>
    <defs>
      <clipPath id='9d219739fb469af463be329415067a36__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenCaptionBoldIcon);
export default ForwardRef;
