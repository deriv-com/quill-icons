import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m-3.5-6.562a.45.45 0 0 0-.437.437c0 .246.19.438.437.438h.656a3.48 3.48 0 0 0 3.254 2.242H8.56c.355 0 .656-.301.656-.657 0-.355-.3-.656-.656-.656H7.41a2.15 2.15 0 0 1-1.777-.93h2.242a.45.45 0 0 0 .438-.437.47.47 0 0 0-.438-.437H5.25c-.027-.11-.027-.274-.027-.41 0-.165 0-.301.027-.466h2.625a.45.45 0 0 0 .438-.437.47.47 0 0 0-.438-.437H5.66c.41-.52 1.04-.876 1.75-.876H8.56a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656H7.41c-1.45 0-2.734.93-3.254 2.188H3.5a.45.45 0 0 0-.437.437c0 .246.19.438.437.438h.438c-.028.164-.028.328-.028.464 0 .137 0 .274.027.41z' />
    </g>
    <defs>
      <clipPath id='cb5860d37f9c4392b85494f4595a1e7f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroSmFillIcon);
export default ForwardRef;
