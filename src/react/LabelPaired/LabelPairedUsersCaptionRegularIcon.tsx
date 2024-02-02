import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersCaptionRegularIcon = (
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
      <path d='M2.25 5.375q.024.633.563.984.562.282 1.124 0 .54-.351.563-.984a1.17 1.17 0 0 0-.562-.984 1.2 1.2 0 0 0-1.126 0q-.538.351-.562.984m3 0q-.024 1.055-.937 1.617-.937.516-1.875 0-.915-.562-.938-1.617.024-1.054.938-1.617.937-.516 1.874 0 .915.563.938 1.617M7.5 7.25q-.843.024-1.29.75-.42.75 0 1.5.447.726 1.29.75.844-.024 1.29-.75.42-.75 0-1.5-.446-.726-1.29-.75m0 3.75q-.609 0-1.125-.305A2.255 2.255 0 0 1 5.25 8.75a2.26 2.26 0 0 1 1.125-1.945A2.17 2.17 0 0 1 7.5 6.5q.609 0 1.125.305.516.304.82.82.305.54.305 1.125a2.26 2.26 0 0 1-1.125 1.945A2.17 2.17 0 0 1 7.5 11m-1.383 1.5a2.4 2.4 0 0 0-1.64.656q-.657.633-.727 1.594h7.5q-.071-.96-.727-1.594-.68-.633-1.64-.656zm0-.75h2.766q1.313.024 2.203.914T12 14.867q-.047.586-.633.633H3.633q-.586-.047-.633-.633.023-1.313.914-2.203.89-.89 2.203-.914M12 4.25q-.633.024-.984.563-.282.563 0 1.125.351.538.984.562.633-.024.984-.562.282-.562 0-1.125A1.17 1.17 0 0 0 12 4.25m0 3q-1.054-.024-1.617-.937-.516-.937 0-1.875.563-.915 1.617-.938 1.054.024 1.617.938.516.938 0 1.875-.562.913-1.617.937m.375 1.5H10.5q0-.399-.094-.75h1.969q1.125.024 1.852.773.75.727.773 1.852-.023.352-.375.375-.352-.023-.375-.375-.023-.797-.54-1.336-.538-.515-1.335-.539m-7.875 0H2.625q-.797.023-1.336.54-.515.538-.539 1.335-.023.352-.375.375-.352-.023-.375-.375Q.024 9.5.773 8.773 1.5 8.023 2.625 8h1.969a3 3 0 0 0-.094.75' />
    </g>
    <defs>
      <clipPath id='5d9ac5a0bb869df7__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersCaptionRegularIcon);
export default ForwardRef;
