import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighSmBoldIcon = (
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
      <path d='M14.824 4.652c1.778 1.45 2.926 3.637 2.926 6.098 0 2.488-1.148 4.676-2.926 6.125a.68.68 0 0 1-.93-.082.68.68 0 0 1 .11-.93 6.558 6.558 0 0 0 0-10.2.68.68 0 0 1-.11-.929.68.68 0 0 1 .93-.082m-1.64 2.024v.027a5.22 5.22 0 0 1 1.941 4.074c0 1.641-.766 3.09-1.941 4.075a.68.68 0 0 1-.93-.11.68.68 0 0 1 .082-.93 3.86 3.86 0 0 0 1.476-3.062 3.85 3.85 0 0 0-1.476-3.035c-.274-.246-.328-.656-.082-.93a.68.68 0 0 1 .93-.11m-1.668 2.05c.601.493.984 1.204.984 2.024 0 .848-.383 1.559-.984 2.05a.68.68 0 0 1-.93-.081.68.68 0 0 1 .11-.93c.3-.246.492-.629.492-1.039s-.192-.766-.493-1.012a.68.68 0 0 1-.11-.93.68.68 0 0 1 .93-.081m-6.918.547a.6.6 0 0 1-.41.165H1.78a.216.216 0 0 0-.218.218v2.188c0 .136.082.219.218.219h2.407c.136 0 .3.082.41.19l3.09 2.708V6.566zM8.18 4.625c.437 0 .82.383.82.82v10.637c0 .438-.383.793-.82.793-.22 0-.41-.055-.547-.191l-3.719-3.309H1.781A1.53 1.53 0 0 1 .25 11.844V9.656c0-.82.684-1.531 1.531-1.531h2.133l3.719-3.281a.76.76 0 0 1 .547-.219' />
    </g>
    <defs>
      <clipPath id='fdfa72f59575b90ca81e2fcb6fe6df5f__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighSmBoldIcon);
export default ForwardRef;
