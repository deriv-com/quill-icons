import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaySmRegularIcon = (
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
      <path d='M1.781 5.555a.47.47 0 0 0-.437 0 .43.43 0 0 0-.219.383v9.625q0 .246.219.382a.47.47 0 0 0 .437 0l7.875-4.812a.43.43 0 0 0 .219-.383.43.43 0 0 0-.219-.383zm-.847-.766q.656-.356 1.312.027l7.875 4.813q.601.383.629 1.121-.027.738-.629 1.121l-7.875 4.813q-.656.383-1.312.027-.657-.383-.684-1.148V5.938q.027-.766.684-1.149' />
    </g>
    <defs>
      <clipPath id='e26ea2ccc1cccf00eebb90df6e3f0af9__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmRegularIcon);
export default ForwardRef;
