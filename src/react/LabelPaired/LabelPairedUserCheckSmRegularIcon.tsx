import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCheckSmRegularIcon = (
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
      <path d='M6.375 4.625c-.957 0-1.805.52-2.297 1.313a2.65 2.65 0 0 0 0 2.625 2.65 2.65 0 0 0 2.297 1.312c.93 0 1.777-.492 2.27-1.312a2.65 2.65 0 0 0 0-2.626c-.493-.792-1.34-1.312-2.27-1.312m0 6.125A3.48 3.48 0 0 1 3.34 9a3.48 3.48 0 0 1 0-3.5 3.54 3.54 0 0 1 3.035-1.75c1.23 0 2.379.684 3.008 1.75a3.48 3.48 0 0 1 0 3.5 3.47 3.47 0 0 1-3.008 1.75m-1.258 2.188a4.004 4.004 0 0 0-3.992 3.937h10.5c-.055-2.16-1.832-3.937-4.02-3.937zm0-.876h2.488a4.89 4.89 0 0 1 4.895 4.895c0 .438-.383.793-.82.793H1.043a.794.794 0 0 1-.793-.793c0-2.707 2.16-4.895 4.867-4.895m12.496-3.171-3.5 3.5a.463.463 0 0 1-.629 0l-1.75-1.75a.463.463 0 0 1 0-.63.463.463 0 0 1 .63 0l1.448 1.45 3.172-3.2a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .63' />
    </g>
    <defs>
      <clipPath id='654e35874437ed85d88128eeddb8ccdd__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCheckSmRegularIcon);
export default ForwardRef;
