import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownCaptionBoldIcon = (
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
      <path d='M.563 4.25q.514.047.562.563v8.25q.047.514.563.562h9.75q.514.047.562.563-.047.514-.562.562h-9.75q-.727-.024-1.196-.492-.468-.47-.492-1.195v-8.25q.047-.516.563-.563m8.25 1.875q-.516-.047-.563-.562.047-.516.563-.563h1.874q.236 0 .399.164t.164.399v1.875q-.047.514-.562.562-.516-.047-.563-.562v-.516L7.148 9.898q-.397.33-.796 0L4.875 8.422 3.398 9.898q-.397.33-.796 0-.33-.397 0-.796l1.875-1.875q.397-.33.796 0L6.75 8.703l2.578-2.578zm0 6.375q-.516-.047-.563-.562.047-.516.563-.563h.515l-1.101-1.102.796-.796 1.102 1.101v-.515q.047-.516.563-.563.514.047.562.563v1.874q0 .236-.164.399a.54.54 0 0 1-.399.164z' />
    </g>
    <defs>
      <clipPath id='7b41d5fb33b12485__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownCaptionBoldIcon);
export default ForwardRef;
