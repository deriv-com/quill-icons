import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingSmRegularIcon = (
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
      <path d='M10.992 15.398 8.504 12.91c-.438.3-.957.465-1.504.465a2.67 2.67 0 0 1-1.531-.465L2.98 15.398c1.067.93 2.461 1.477 4.02 1.477a6.04 6.04 0 0 0 3.992-1.477m.63-.628a6.08 6.08 0 0 0 1.503-4.02 6.06 6.06 0 0 0-1.504-3.992L9.133 9.246c.3.438.492.957.492 1.504 0 .574-.191 1.094-.492 1.531zm.628.628.3.301a.463.463 0 0 1 0 .63.463.463 0 0 1-.628 0l-.3-.329A6.92 6.92 0 0 1 7 17.75 7 7 0 0 1 2.352 16l-.301.328a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.629l.329-.3A7 7 0 0 1 0 10.75C0 9 .656 7.36 1.75 6.129l-.328-.3a.463.463 0 0 1 0-.63.463.463 0 0 1 .629 0l.3.301A7.13 7.13 0 0 1 7 3.75c1.75 0 3.39.684 4.621 1.75l.3-.3a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .628l-.301.3C13.316 7.36 14 8.974 14 10.75a7.13 7.13 0 0 1-1.75 4.648m-1.258-9.27A6.06 6.06 0 0 0 7 4.626a6.08 6.08 0 0 0-4.02 1.504L5.47 8.617c.437-.3.957-.492 1.531-.492a2.67 2.67 0 0 1 1.504.492zM4.84 12.282a2.67 2.67 0 0 1-.465-1.531c0-.547.164-1.066.465-1.504L2.352 6.758A6.04 6.04 0 0 0 .875 10.75c0 1.559.547 2.953 1.477 4.02zm.41-1.531c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531 0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504' />
    </g>
    <defs>
      <clipPath id='e5717b84ca2dd22272492e94ef4703d3__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingSmRegularIcon);
export default ForwardRef;
