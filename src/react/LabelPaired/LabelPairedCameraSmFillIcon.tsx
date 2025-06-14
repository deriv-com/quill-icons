import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraSmFillIcon = (
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
      <path d='M4.074 5.527c.164-.52.656-.902 1.23-.902h3.364c.574 0 1.066.383 1.23.902l.301.848h2.051c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h2.023zM7 9c-.957 0-1.805.52-2.297 1.313a2.65 2.65 0 0 0 0 2.624A2.65 2.65 0 0 0 7 14.25c.93 0 1.777-.492 2.27-1.312a2.65 2.65 0 0 0 0-2.626C8.777 9.52 7.93 9 7 9' />
    </g>
    <defs>
      <clipPath id='78a3637e32c14a4029fbe7250dc87ca8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraSmFillIcon);
export default ForwardRef;
