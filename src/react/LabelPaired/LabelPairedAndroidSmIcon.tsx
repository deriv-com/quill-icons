import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.61 12.008a.65.65 0 0 0 .656-.656c0-.356-.301-.657-.657-.657-.355 0-.656.301-.656.657 0 .382.3.656.656.656m-7.247 0a.65.65 0 0 0 .657-.656c0-.356-.301-.657-.657-.657-.355 0-.656.301-.656.657 0 .382.3.656.656.656m7.492-3.938c2.243 1.23 3.774 3.5 4.02 6.18H.125a7.72 7.72 0 0 1 3.992-6.18L2.805 5.8a.25.25 0 0 1 0-.273q.081-.164.246-.164c.11 0 .191.082.246.164l1.312 2.297a8.3 8.3 0 0 1 6.754 0l1.313-2.297c.054-.082.136-.164.246-.164q.164 0 .246.164a.25.25 0 0 1 0 .274z' />
    </g>
    <defs>
      <clipPath id='b16e28e7df66ba9d8fe5983190751532__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidSmIcon);
export default ForwardRef;
