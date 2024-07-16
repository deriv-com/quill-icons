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
      <path d='M13.5 3.5a.57.57 0 0 1 .563.563v10.875a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562V4.063c0-.305.234-.563.562-.563m-3 2.25a.57.57 0 0 1 .563.563v8.625a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562V6.313c0-.305.234-.563.562-.563M7.5 8a.57.57 0 0 1 .563.563v6.374a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.562V8.561c0-.304.234-.562.562-.562m-3 2.25a.57.57 0 0 1 .563.563v4.124a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.562v-4.126c0-.304.234-.562.562-.562m-3 2.25a.57.57 0 0 1 .563.563v1.874a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.562v-1.876c0-.304.234-.562.562-.562' />
    </g>
    <defs>
      <clipPath id='5a36737b8518c158593132721d1390e4__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionBoldIcon);
export default ForwardRef;
