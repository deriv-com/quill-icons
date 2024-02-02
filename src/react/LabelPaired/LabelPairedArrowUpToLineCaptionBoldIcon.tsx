import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineCaptionBoldIcon = (
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
      <path d='M.563 4.25h7.875q.514.047.562.563-.047.514-.562.562H.561Q.048 5.328 0 4.813q.047-.516.563-.563m4.359 3.188h-.024l3 3.187q.329.399-.023.773-.399.329-.773-.023l-2.04-2.133v4.945q-.045.516-.562.563-.516-.047-.562-.562V9.242l-2.04 2.156q-.374.33-.773.024-.351-.399-.023-.797l3-3.187A.51.51 0 0 1 4.5 7.25q.234 0 .422.188' />
    </g>
    <defs>
      <clipPath id='e2b71654a3a763fa68db57ecc54b82e2__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionBoldIcon);
export default ForwardRef;
