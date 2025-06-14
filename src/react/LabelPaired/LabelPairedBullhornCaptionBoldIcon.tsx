import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornCaptionBoldIcon = (
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
      <path d='m10.125 5.234-.258.258a7.3 7.3 0 0 1-4.992 2.133v3.023c1.875.024 3.656.797 4.992 2.133l.258.258zM3.75 6.5h.938A6.17 6.17 0 0 0 9.07 4.695l.89-.89c.47-.47 1.29-.14 1.29.539v3.375c.422.21.75.773.75 1.406 0 .656-.328 1.219-.75 1.43v3.375c0 .68-.82 1.008-1.29.539l-.89-.89c-1.125-1.126-2.625-1.782-4.195-1.806v2.415c0 .726-.61 1.312-1.312 1.312h-.75A1.31 1.31 0 0 1 1.5 14.188V11.75a1.48 1.48 0 0 1-1.5-1.5V8c0-.82.656-1.5 1.5-1.5zm-1.125 5.25v2.438c0 .117.07.187.188.187h.75c.093 0 .187-.07.187-.187V11.75zM1.5 7.625A.385.385 0 0 0 1.125 8v2.25c0 .21.164.375.375.375h2.25v-3z' />
    </g>
    <defs>
      <clipPath id='216b7dbfae1d3f6ed653b2d21da5c1d4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornCaptionBoldIcon);
export default ForwardRef;
