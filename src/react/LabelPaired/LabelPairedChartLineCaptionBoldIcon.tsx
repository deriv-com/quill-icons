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
      <path d='M1.125 4.813v8.25q.047.514.563.562h9.75q.514.047.562.563-.047.514-.562.562h-9.75q-.727-.024-1.196-.492-.468-.47-.492-1.195v-8.25q.047-.516.563-.563.514.047.562.563m9.96 2.648-3.187 3.187q-.397.33-.796 0L5.25 8.797l-1.852 1.851q-.397.33-.796 0-.33-.397 0-.796l2.25-2.25a.54.54 0 0 1 .398-.165q.235 0 .398.165L7.5 9.453l2.79-2.789q.397-.328.796 0 .328.399 0 .797' />
    </g>
    <defs>
      <clipPath id='6f239a2edeeaa1aa7ef540124fddbd41__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionBoldIcon);
export default ForwardRef;
