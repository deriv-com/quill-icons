import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.25c0-.957.766-1.75 1.75-1.75h14c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75zm8.75 0v7h7v-7zM5.117 8.563a.57.57 0 0 0-.492-.329.58.58 0 0 0-.52.329L2.355 12.5c-.109.273 0 .602.274.738.3.11.601 0 .738-.273l.246-.574H5.61l.246.574c.137.273.465.383.739.273a.585.585 0 0 0 .273-.738zm-.492 1.585.52 1.149h-1.04zM12.5 8.234c.3 0 .547.246.547.547v.11h1.641c.3 0 .546.246.546.547 0 .3-.246.546-.546.546h-.055l-.055.137c-.246.656-.601 1.285-1.094 1.777.028.028.055.028.082.055l.52.3a.596.596 0 0 1 .191.767.596.596 0 0 1-.765.19l-.492-.327c-.137-.055-.247-.137-.383-.219a4.3 4.3 0 0 1-.93.52l-.082.054a.584.584 0 0 1-.738-.273.587.587 0 0 1 .3-.738l.083-.028c.19-.082.355-.191.52-.273l-.33-.328a.56.56 0 0 1 0-.793c.192-.22.548-.22.767 0l.382.41h.028q.492-.534.82-1.23h-2.926a.55.55 0 0 1-.547-.547c0-.301.246-.547.547-.547h1.422v-.11c0-.3.246-.547.547-.547' />
    </g>
    <defs>
      <clipPath id='9bc0f84b82804cc0a7b36e5e3484a058__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageSmFillIcon);
export default ForwardRef;
