import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.438 14.75H.561q-.514-.047-.562-.562.047-.516.563-.563h7.875q.514.047.562.563-.047.514-.562.562m-4.336-3.187v.023l-3-3.188q-.329-.42.023-.796.398-.329.797.023l2.016 2.156V4.812q.045-.514.562-.562.516.047.563.563V9.78l2.039-2.156q.375-.351.796-.023.33.375.024.773l-3 3.188a.58.58 0 0 1-.422.187.51.51 0 0 1-.398-.187' />
    </g>
    <defs>
      <clipPath id='8c6dc017ff213921eb47e2a342d68001__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineCaptionBoldIcon);
export default ForwardRef;
