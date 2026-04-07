import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSparklesSmFillIcon = (
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
      <path d='M8.941 6.102 10.5 5.5l.574-1.531c.028-.137.164-.219.301-.219.11 0 .246.082.273.219L12.25 5.5l1.531.602c.137.027.219.164.219.273 0 .137-.082.273-.219.3l-1.531.575-.602 1.559c-.027.109-.164.191-.273.191-.137 0-.273-.082-.3-.191L10.5 7.25l-1.559-.574c-.109-.028-.191-.164-.191-.301 0-.11.082-.246.191-.273m-3.336-.329 1.422 3.118 3.118 1.422a.48.48 0 0 1 .273.41c0 .164-.11.328-.273.382l-3.118 1.45-1.422 3.117a.48.48 0 0 1-.41.273.41.41 0 0 1-.383-.273l-1.449-3.117-3.117-1.422a.45.45 0 0 1-.246-.41c0-.164.082-.328.246-.41L3.363 8.89l1.45-3.118a.41.41 0 0 1 .382-.273c.164 0 .328.11.41.273M10.5 14.25l.574-1.531c.028-.137.164-.219.301-.219.11 0 .246.082.273.219l.602 1.531 1.531.602c.137.027.219.164.219.273 0 .137-.082.273-.219.3L12.25 16l-.602 1.559c-.027.109-.164.191-.273.191-.137 0-.273-.082-.3-.191L10.5 16l-1.559-.574c-.109-.028-.191-.164-.191-.301 0-.11.082-.246.191-.273z' />
    </g>
    <defs>
      <clipPath id='57a629e3a5f19d63a9115c87e6ad8f23__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSparklesSmFillIcon);
export default ForwardRef;
