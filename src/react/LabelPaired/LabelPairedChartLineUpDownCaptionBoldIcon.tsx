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
      <path d='M.563 4.25a.57.57 0 0 1 .562.563v8.25c0 .328.234.562.563.562h9.75a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-9.75A1.68 1.68 0 0 1 0 13.063v-8.25c0-.305.234-.563.563-.563m8.25 1.875a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.874c.141 0 .282.07.399.164a.67.67 0 0 1 .164.399v1.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562v-.516L7.148 9.898c-.234.235-.585.235-.796 0L4.875 8.422 3.398 9.898c-.234.235-.586.235-.796 0a.513.513 0 0 1 0-.773L4.477 7.25c.21-.234.562-.234.796 0L6.75 8.727l2.578-2.602zm0 6.375a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h.515l-1.101-1.102.796-.796 1.102 1.101v-.515c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v1.874c0 .165-.07.305-.164.399a.55.55 0 0 1-.399.164z' />
    </g>
    <defs>
      <clipPath id='bec403993935b4223cc39b58420b8f7b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownCaptionBoldIcon);
export default ForwardRef;
