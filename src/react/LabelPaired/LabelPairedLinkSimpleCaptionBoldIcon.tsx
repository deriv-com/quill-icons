import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleCaptionBoldIcon = (
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
      <path d='M.25 9.5q.046-1.593 1.102-2.648Q2.407 5.797 4 5.75h1.688q.514.047.562.563-.047.514-.562.562H4q-1.125.024-1.852.773-.75.727-.773 1.852.024 1.125.773 1.852.727.75 1.852.773h1.688q.514.047.562.563-.047.514-.562.562H4q-1.593-.046-2.648-1.102Q.297 11.094.25 9.5m13.5 0q-.046 1.594-1.102 2.648Q11.594 13.203 10 13.25H8.313q-.516-.047-.563-.562.047-.516.563-.563H10q1.125-.024 1.852-.773.75-.727.773-1.852-.024-1.125-.773-1.852-.727-.75-1.852-.773H8.313q-.516-.047-.563-.562.047-.516.563-.563H10q1.594.046 2.648 1.102Q13.703 7.906 13.75 9.5m-9.187-.562h4.875q.514.045.562.562-.047.515-.562.563H4.562Q4.048 10.015 4 9.5q.047-.516.563-.562' />
    </g>
    <defs>
      <clipPath id='9ebddc19baab029797f206ea57fa94f9__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleCaptionBoldIcon);
export default ForwardRef;
