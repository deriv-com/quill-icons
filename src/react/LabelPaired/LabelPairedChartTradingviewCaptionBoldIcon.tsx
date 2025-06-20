import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTradingviewCaptionBoldIcon = (
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
      <path d='M2.625 3.5a.57.57 0 0 1 .563.563v9.96c0 .211.14.352.351.352h8.625c.328 0 .563.258.563.563a.54.54 0 0 1-.563.562H3.117a1.05 1.05 0 0 1-1.054-1.055V4.063c0-.305.234-.563.562-.563m9.938 4.688c.234.21.234.562 0 .796l-3.657 3.657a.934.934 0 0 1-1.336 0l-.82-.844-1.477 1.476c-.234.235-.585.235-.796 0-.235-.21-.235-.562 0-.796l1.593-1.594a.934.934 0 0 1 1.336 0l.844.844 3.516-3.54c.234-.234.586-.234.797 0M8.508 5.539c0 .281-.258.516-.54.516-.304 0-.562-.235-.562-.516s.258-.516.563-.516c.281 0 .539.235.539.516M8.93 5h.82L8.648 8h-.82zM5.25 5h1.898v3h-.726V5.68H5.25z' />
    </g>
    <defs>
      <clipPath id='3442307348f1524f4066cee360542625__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTradingviewCaptionBoldIcon);
export default ForwardRef;
