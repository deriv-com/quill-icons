import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6.375a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629q0 .383.246.629A.85.85 0 0 0 2 8.125a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629.85.85 0 0 0-.246-.629A.85.85 0 0 0 2 6.375M2 9q-.984-.027-1.504-.875-.492-.875 0-1.75Q1.016 5.527 2 5.5q.985.027 1.504.875.492.875 0 1.75Q2.984 8.973 2 9m7 4.375a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629q0 .383.246.629a.85.85 0 0 0 .629.246.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246M9 16q-.985-.027-1.504-.875-.492-.875 0-1.75.52-.848 1.504-.875.985.027 1.504.875.492.875 0 1.75-.52.848-1.504.875m1.613-9.762L.988 15.863q-.3.275-.601 0-.274-.3 0-.601l9.625-9.625q.3-.274.601 0 .274.3 0 .601' />
    </g>
    <defs>
      <clipPath id='d83cf96be247c0e1__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentSmRegularIcon);
export default ForwardRef;
