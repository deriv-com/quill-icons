import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankCaptionBoldIcon = (
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
      <path d='m7.352 3.64 6.187 5.25c.234.212.258.563.07.797a.584.584 0 0 1-.796.07l-.563-.491v4.359a1.866 1.866 0 0 1-1.875 1.875h-6.75a1.85 1.85 0 0 1-1.875-1.875v-4.36l-.586.493a.584.584 0 0 1-.797-.07.584.584 0 0 1 .07-.797l6.188-5.25a.6.6 0 0 1 .727 0m3.773 4.665L7 4.813 2.875 8.305v5.32c0 .422.328.75.75.75h6.75c.398 0 .75-.328.75-.75z' />
    </g>
    <defs>
      <clipPath id='a48c1c52dc3623cf5c9a85f64cb4fe84__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankCaptionBoldIcon);
export default ForwardRef;
