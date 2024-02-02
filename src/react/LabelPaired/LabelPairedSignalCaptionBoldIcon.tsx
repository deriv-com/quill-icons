import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalCaptionBoldIcon = (
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
      <path d='M13.5 3.5q.515.047.563.563v10.875q-.048.514-.563.562-.516-.047-.562-.562V4.063q.045-.516.562-.563m-3 2.25q.515.047.563.563v8.625q-.048.514-.563.562-.516-.047-.562-.562V6.313q.045-.516.562-.563M7.5 8q.515.047.563.563v6.374q-.048.516-.563.563-.516-.047-.562-.562V8.561Q6.983 8.049 7.5 8m-3 2.25q.516.047.563.563v4.124q-.048.516-.563.563-.516-.047-.562-.562v-4.126q.045-.514.562-.562m-3 2.25q.516.047.563.563v1.874q-.048.516-.563.563-.516-.047-.562-.562v-1.876q.045-.514.562-.562' />
    </g>
    <defs>
      <clipPath id='66e0bb796b1e7267__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionBoldIcon);
export default ForwardRef;
