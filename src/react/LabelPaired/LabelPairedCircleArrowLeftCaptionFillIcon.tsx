import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowLeftCaptionFillIcon = (
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
      <path d='M12 9.5a6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18M5.414 6.477 2.79 9.125a.513.513 0 0 0 0 .773l2.625 2.625c.211.235.563.235.774 0 .234-.21.234-.562 0-.796l-1.665-1.665h4.29a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.562h-4.29l1.665-1.665c.234-.21.234-.562 0-.796a.55.55 0 0 0-.774 0' />
    </g>
    <defs>
      <clipPath id='aecf8d49f8dec9fa6362666ac0e3b02d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowLeftCaptionFillIcon);
export default ForwardRef;
