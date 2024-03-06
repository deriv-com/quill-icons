import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 4.813q.047-.516.563-.563h6q.375.024.515.352.141.351-.117.609L3.719 8.562h.937q1.313.023 2.18.915.89.866.914 2.18-.024 1.31-.914 2.179-.867.89-2.18.914H2.523a2.23 2.23 0 0 1-1.265-.375 2.46 2.46 0 0 1-.914-.96L.32 13.32q-.188-.492.235-.75.492-.188.75.235l.047.093q.398.704 1.171.727h2.133q.845-.023 1.383-.586.562-.54.586-1.383-.023-.843-.586-1.383-.54-.563-1.383-.585H2.313q-.375-.024-.516-.352-.141-.351.117-.61l3.492-3.351H.813Q.297 5.328.25 4.813' />
    </g>
    <defs>
      <clipPath id='17726528fc3951c459acffb5b5645609__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeCaptionBoldIcon);
export default ForwardRef;
