import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineCaptionBoldIcon = (
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
      <path d='M10.75 5.563v7.875q-.047.514-.562.562-.516-.047-.563-.562V5.562q.047-.514.563-.562.514.047.562.563M7.563 9.922l.023-.024-3.188 3q-.42.329-.796-.023-.329-.399.023-.773l2.156-2.04H.813Q.297 10.018.25 9.5q.047-.516.563-.562H5.78l-2.156-2.04q-.351-.375-.023-.773.374-.351.773-.023l3.188 3a.51.51 0 0 1 .187.398.58.58 0 0 1-.187.422' />
    </g>
    <defs>
      <clipPath id='5b79349c7d7f37dcf68bb2de97693972__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionBoldIcon);
export default ForwardRef;
