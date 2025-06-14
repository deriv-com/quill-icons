import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeSmFillIcon = (
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
      <path d='M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M3.5 9v.273l3.254 1.477c.082.027.164.055.246.055a.5.5 0 0 0 .219-.055L10.5 9.273V9a.9.9 0 0 0-.875-.875h-5.25A.88.88 0 0 0 3.5 9m4.074 2.543A1.4 1.4 0 0 1 7 11.68a1.5 1.5 0 0 1-.602-.137L3.5 10.231V12.5c0 .492.383.875.875.875h5.25a.88.88 0 0 0 .875-.875v-2.27z' />
    </g>
    <defs>
      <clipPath id='b3476ad1f147118ebf239c20975492ce__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeSmFillIcon);
export default ForwardRef;
