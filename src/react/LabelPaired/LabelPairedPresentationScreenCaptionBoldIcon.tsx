import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenCaptionBoldIcon = (
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
      <path d='M.813 3.5h12.375q.514.047.562.563-.047.514-.562.562H.813Q.297 4.578.25 4.063q.047-.516.563-.563M1 5.375h1.125v5.063q.023.163.188.187h9.375q.163-.024.187-.187V5.375H13v5.063q-.023.562-.375.937-.375.352-.937.375H7.562v1.078l1.711 1.711q.33.399 0 .797-.397.328-.796 0L7 13.859l-1.477 1.477q-.397.328-.796 0-.33-.399 0-.797l1.71-1.71V11.75H2.314a1.4 1.4 0 0 1-.938-.375A1.4 1.4 0 0 1 1 10.438z' />
    </g>
    <defs>
      <clipPath id='ad07161b5b63e189efd9218ff0796da1__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenCaptionBoldIcon);
export default ForwardRef;
