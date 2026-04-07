import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSparklesSmRegularIcon = (
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
      <path d='M11.813 4.625a.47.47 0 0 1 .437.438v1.312h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H12.25v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V7.25h-1.312a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.312V5.063a.45.45 0 0 1 .438-.438m0 7.875a.47.47 0 0 1 .437.438v1.312h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H12.25v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-1.313h-1.312a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.312v-1.312a.45.45 0 0 1 .438-.438M3.719 9.684l-2.242 1.039 2.242 1.039a.85.85 0 0 1 .437.437l1.04 2.242L6.233 12.2a.85.85 0 0 1 .438-.437l2.242-1.04-2.242-1.038a.85.85 0 0 1-.438-.438L5.195 7.004 4.156 9.246a.85.85 0 0 1-.437.438m-.356 2.87L.246 11.134a.45.45 0 0 1-.246-.41c0-.164.082-.328.246-.383l3.117-1.45 1.45-3.117a.41.41 0 0 1 .382-.273c.164 0 .328.11.41.273l1.422 3.118 3.118 1.422a.48.48 0 0 1 .273.41c0 .164-.11.328-.273.382l-3.118 1.45-1.422 3.117a.48.48 0 0 1-.41.273.41.41 0 0 1-.383-.273z' />
    </g>
    <defs>
      <clipPath id='851816c0c92d5e9d6c8c567ce526ee79__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSparklesSmRegularIcon);
export default ForwardRef;
