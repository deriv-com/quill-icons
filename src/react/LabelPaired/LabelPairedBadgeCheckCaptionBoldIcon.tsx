import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckCaptionBoldIcon = (
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
      <path d='M4.688 5.422a.58.58 0 0 1-.657.281 1.5 1.5 0 0 0-1.5.352A1.46 1.46 0 0 0 2.18 7.53a.614.614 0 0 1-.282.68A1.43 1.43 0 0 0 1.125 9.5c0 .586.305 1.078.773 1.313.235.14.352.398.282.656a1.46 1.46 0 0 0 .375 1.476c.398.399.96.54 1.476.375a.57.57 0 0 1 .657.282c.257.468.75.773 1.312.773s1.055-.305 1.29-.773a.614.614 0 0 1 .679-.282c.492.164 1.078.024 1.476-.375.399-.398.516-.96.352-1.476a.57.57 0 0 1 .281-.656c.469-.258.797-.75.797-1.313s-.328-1.055-.797-1.29a.614.614 0 0 1-.281-.679 1.46 1.46 0 0 0-.352-1.476 1.46 1.46 0 0 0-1.476-.352.614.614 0 0 1-.68-.281A1.45 1.45 0 0 0 6 4.625c-.586 0-1.078.328-1.312.797M6 3.5c.82 0 1.57.398 2.063 1.031.773-.117 1.57.14 2.18.727.585.61.82 1.406.726 2.18A2.62 2.62 0 0 1 12 9.5c0 .844-.398 1.594-1.031 2.063a2.56 2.56 0 0 1-.727 2.18 2.6 2.6 0 0 1-2.18.75A2.67 2.67 0 0 1 6 15.5a2.6 2.6 0 0 1-2.062-1.008c-.774.094-1.594-.14-2.18-.726a2.6 2.6 0 0 1-.75-2.18A2.68 2.68 0 0 1 0 9.5c0-.82.398-1.57 1.008-2.062-.094-.774.14-1.57.726-2.18a2.66 2.66 0 0 1 2.18-.727A2.63 2.63 0 0 1 6 3.5m2.648 4.898-3 3c-.234.235-.585.235-.796 0l-1.5-1.5a.513.513 0 0 1 0-.773c.21-.234.562-.234.796 0l1.102 1.102 2.602-2.602c.21-.234.562-.234.796 0 .211.21.211.563 0 .773' />
    </g>
    <defs>
      <clipPath id='0315337ade535e31ac66d441696258a0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckCaptionBoldIcon);
export default ForwardRef;
