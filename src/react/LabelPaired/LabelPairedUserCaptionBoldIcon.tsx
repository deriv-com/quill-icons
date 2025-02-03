import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.375 6.5c0-.656-.375-1.266-.937-1.617a1.91 1.91 0 0 0-1.875 0c-.586.351-.938.96-.938 1.617 0 .68.352 1.29.938 1.64.562.329 1.289.329 1.875 0 .562-.35.937-.96.937-1.64M2.5 6.5c0-1.055.563-2.04 1.5-2.578a2.99 2.99 0 0 1 3 0c.914.539 1.5 1.523 1.5 2.578A3.03 3.03 0 0 1 7 9.102c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.5 6.5m-1.102 7.875h8.18a3.06 3.06 0 0 0-3.023-2.625H4.422a3.06 3.06 0 0 0-3.024 2.625M.25 14.82a4.17 4.17 0 0 1 4.172-4.195h2.133a4.19 4.19 0 0 1 4.195 4.195c0 .375-.328.68-.703.68H.93a.68.68 0 0 1-.68-.68' />
    </g>
    <defs>
      <clipPath id='aba8d9acb4bc2c26230fc224ee4cb3a5__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCaptionBoldIcon);
export default ForwardRef;
