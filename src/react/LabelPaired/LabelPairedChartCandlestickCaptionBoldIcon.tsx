import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickCaptionBoldIcon = (
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
      <path d='M1.125 4.813v8.25q.047.514.563.562h9.75q.514.047.562.563-.047.514-.562.562h-9.75q-.727-.024-1.196-.492-.468-.47-.492-1.195v-8.25q.047-.516.563-.563.514.047.562.563M7.5 4.625V5.75a.73.73 0 0 1 .54.21q.21.212.21.54v2.25a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21v1.125q-.023.352-.375.375-.352-.023-.375-.375V9.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V6.5a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21V4.625q.023-.352.375-.375.352.023.375.375M9 8.75a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21V6.875q.023-.352.375-.375.352.023.375.375V8a.73.73 0 0 1 .54.21q.21.212.21.54v1.5a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21v1.125q-.023.352-.375.375-.352-.023-.375-.375V11a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54zM3.75 6.5V5.375q.023-.352.375-.375.352.023.375.375V6.5a.73.73 0 0 1 .54.21q.21.212.21.54v3a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21v1.125q-.023.352-.375.375-.352-.023-.375-.375V11a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54v-3a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21' />
    </g>
    <defs>
      <clipPath id='6c3ea3b61d34c3d900791dd8bf20cb63__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickCaptionBoldIcon);
export default ForwardRef;
