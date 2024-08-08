import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownCaptionBoldIcon = (
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
      <path d='m12.648 12.336-2.25 2.25c-.234.234-.585.234-.796 0l-2.25-2.25a.513.513 0 0 1 0-.774c.21-.234.562-.234.796 0l1.29 1.29v-8.04c0-.304.234-.562.562-.562a.57.57 0 0 1 .563.563v8.039l1.289-1.29c.21-.234.562-.234.796 0a.55.55 0 0 1 0 .774m-8.25-7.922 2.227 2.25c.234.234.234.586 0 .797-.21.234-.562.234-.797 0L4.54 6.17v8.017a.54.54 0 0 1-.562.562.555.555 0 0 1-.563-.562V6.172L2.125 7.46a.513.513 0 0 1-.773 0c-.235-.211-.235-.563 0-.797l2.25-2.25c.21-.21.562-.21.796 0' />
    </g>
    <defs>
      <clipPath id='6279208b155fb2ffbfb1a14f8431cd60__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownCaptionBoldIcon);
export default ForwardRef;
