import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserPlusSmBoldIcon = (
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
      <path d='M6.375 5.063c-.793 0-1.504.437-1.914 1.093-.383.684-.383 1.532 0 2.188a2.22 2.22 0 0 0 1.914 1.094c.766 0 1.477-.41 1.887-1.094.383-.656.383-1.504 0-2.188-.41-.656-1.121-1.093-1.887-1.093m0 5.687A3.48 3.48 0 0 1 3.34 9a3.48 3.48 0 0 1 0-3.5 3.54 3.54 0 0 1 3.035-1.75c1.23 0 2.379.684 3.008 1.75a3.48 3.48 0 0 1 0 3.5 3.47 3.47 0 0 1-3.008 1.75m-1.258 2.625a3.57 3.57 0 0 0-3.527 3.063h9.543a3.57 3.57 0 0 0-3.528-3.063zm0-1.312h2.488a4.89 4.89 0 0 1 4.895 4.894c0 .438-.383.793-.82.793H1.043a.794.794 0 0 1-.793-.793c0-2.707 2.16-4.895 4.867-4.895m8.914.218v-1.75h-1.75a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h1.75v-1.75c0-.356.274-.657.656-.657.356 0 .657.301.657.657v1.75h1.75c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.75v1.75c0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656' />
    </g>
    <defs>
      <clipPath id='aab045721d317a6ef72cc61884a67b43__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserPlusSmBoldIcon);
export default ForwardRef;
