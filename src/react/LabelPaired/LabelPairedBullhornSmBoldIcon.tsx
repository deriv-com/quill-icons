import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornSmBoldIcon = (
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
      <path d='m11.813 5.773-.301.301a8.9 8.9 0 0 1-2.68 1.805 8.7 8.7 0 0 1-3.145.684v3.5a8.7 8.7 0 0 1 3.145.683 8.9 8.9 0 0 1 2.68 1.805l.3.3zM4.375 7.25h1.121a7.142 7.142 0 0 0 5.086-2.105l1.04-1.04q.464-.41.956-.19.492.19.547.792v3.965q.383.19.629.629.246.437.246 1.011t-.246 1.012a1.5 1.5 0 0 1-.629.63v3.964q-.055.601-.547.793-.492.219-.957-.191l-1.039-1.04a7.2 7.2 0 0 0-2.242-1.53 7.7 7.7 0 0 0-2.652-.575v2.844q-.029.656-.438 1.093-.437.411-1.094.438h-.875q-.656-.027-1.094-.437-.41-.438-.437-1.094v-2.844q-.738-.027-1.23-.52-.493-.492-.52-1.23V9q.027-.738.52-1.23.492-.493 1.23-.52zm-1.312 6.125v2.844q.026.19.218.218h.875q.191-.026.219-.218v-2.844zM1.75 8.563q-.41.027-.437.437v2.625q.027.41.437.438h2.625v-3.5z' />
    </g>
    <defs>
      <clipPath id='ebba3d8f7880bb8e606a02e6afa52971__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornSmBoldIcon);
export default ForwardRef;
