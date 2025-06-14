import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeSmRegularIcon = (
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
      <path d='M7 16.875c.438 0 1.094-.383 1.668-1.559.273-.546.52-1.203.684-1.941H4.648c.137.738.383 1.395.657 1.941.574 1.176 1.23 1.559 1.695 1.559M4.484 12.5h5.004c.082-.547.137-1.121.137-1.75 0-.602-.055-1.176-.137-1.75H4.484c-.082.574-.109 1.148-.109 1.75 0 .629.027 1.203.11 1.75m.164-4.375h4.704a8.2 8.2 0 0 0-.684-1.914C8.094 5.035 7.438 4.625 7 4.625c-.465 0-1.121.41-1.695 1.586a7.2 7.2 0 0 0-.657 1.914M10.391 9c.054.574.109 1.148.109 1.75 0 .629-.055 1.203-.11 1.75h2.462a6 6 0 0 0 .273-1.75c0-.602-.11-1.176-.273-1.75zm2.132-.875a6.22 6.22 0 0 0-3.582-3.172c.575.766 1.04 1.887 1.286 3.172zm-8.777 0c.274-1.285.711-2.406 1.285-3.172A6.22 6.22 0 0 0 1.45 8.125zM1.121 9a6.3 6.3 0 0 0-.246 1.75c0 .629.082 1.203.246 1.75H3.61a12 12 0 0 1-.109-1.75c0-.602.027-1.176.11-1.75zm7.82 7.574a6.17 6.17 0 0 0 3.582-3.199h-2.296c-.247 1.313-.711 2.406-1.286 3.2m-3.91 0c-.574-.793-1.011-1.887-1.285-3.199H1.45a6.17 6.17 0 0 0 3.582 3.2M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75' />
    </g>
    <defs>
      <clipPath id='b8a4595f55baa046882c38e491ce7a4e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeSmRegularIcon);
export default ForwardRef;
