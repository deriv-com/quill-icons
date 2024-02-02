import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsDownSmBoldIcon = (
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
      <path d='M8.86 16.793q-.82.219-1.505-.164-.682-.383-.93-1.176l-.163-.547a2.6 2.6 0 0 0-.52-.957L4.32 12.391q-.355-.465.055-.903.492-.383.93.028l1.394 1.558q.574.63.82 1.477l.165.547q.218.546.82.437.546-.22.437-.82l-.164-.547a4.6 4.6 0 0 0-.71-1.504.66.66 0 0 1-.055-.684.68.68 0 0 1 .574-.355h3.664q.41-.027.438-.437-.028-.302-.274-.41a.66.66 0 0 1-.41-.466.6.6 0 0 1 .137-.574.47.47 0 0 0 .109-.3q-.027-.355-.355-.438a.67.67 0 0 1-.493-.41.65.65 0 0 1 .11-.63.44.44 0 0 0 .082-.272q-.028-.302-.274-.41-.52-.247-.41-.794a.24.24 0 0 0 .027-.109q-.027-.41-.437-.437H7.848q-.547 0-.985.3L5.168 7.36q-.52.274-.902-.191-.3-.52.191-.902l1.668-1.121a3.1 3.1 0 0 1 1.723-.52H10.5q.738 0 1.23.492.493.465.52 1.203.63.492.656 1.367 0 .192-.027.356.656.492.684 1.395 0 .273-.083.519.493.492.52 1.23-.027.74-.52 1.231-.492.492-1.23.52H9.734q.191.437.329.874l.136.547q.219.821-.164 1.504-.383.684-1.176.93M.874 14.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V7.25q0-.383.246-.629a.85.85 0 0 1 .629-.246h1.75q.383 0 .629.246a.85.85 0 0 1 .246.629v6.125a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246z' />
    </g>
    <defs>
      <clipPath id='dfd8fd56bcbea65a29e9084c38c29b2b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsDownSmBoldIcon);
export default ForwardRef;
