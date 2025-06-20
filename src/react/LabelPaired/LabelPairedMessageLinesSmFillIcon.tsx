import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesSmFillIcon = (
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
      <path d='M0 5.5c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v7.875c0 .984-.793 1.75-1.75 1.75h-3.8l-3.391 2.543c-.137.11-.301.11-.465.055a.45.45 0 0 1-.219-.41v-2.188H1.75c-.984 0-1.75-.766-1.75-1.75zm4.156 2.188c-.383 0-.656.3-.656.656 0 .383.273.656.656.656h5.688a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656zm0 2.625c-.383 0-.656.3-.656.656 0 .383.273.656.656.656H7.22a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656z' />
    </g>
    <defs>
      <clipPath id='61f653b29fdbbb15c2615cc994b076a8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesSmFillIcon);
export default ForwardRef;
