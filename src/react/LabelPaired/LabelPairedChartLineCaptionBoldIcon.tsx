import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 4.813v8.25c0 .328.234.562.563.562h9.75a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-9.75A1.68 1.68 0 0 1 0 13.063v-8.25c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563m9.96 2.648-3.21 3.187a.513.513 0 0 1-.773 0L5.25 8.797l-1.852 1.851c-.234.235-.586.235-.796 0a.513.513 0 0 1 0-.773l2.25-2.25c.093-.117.234-.164.398-.164.14 0 .281.047.398.164L7.5 9.477l2.79-2.79c.21-.234.562-.234.796 0a.55.55 0 0 1 0 .774' />
    </g>
    <defs>
      <clipPath id='78711fc56a8a7e31911ff20296d93b08__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionBoldIcon);
export default ForwardRef;
