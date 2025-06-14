import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.766 22.688a.974.974 0 0 1-1.328.117l-6.25-5.235 1.445-1.25 6.015 5.04c.391.35.43.937.118 1.328M4.375 7.374c-.898 0-1.719.508-2.187 1.25-.43.781-.43 1.758 0 2.5a2.54 2.54 0 0 0 2.187 1.25c.86 0 1.68-.469 2.148-1.25.43-.742.43-1.719 0-2.5-.468-.742-1.289-1.25-2.148-1.25m0-1.875c2.383 0 4.375 1.992 4.375 4.375 0 .703-.195 1.367-.469 1.953l2.93 2.461 7.227-6.055a.974.974 0 0 1 1.328.118.974.974 0 0 1-.118 1.328L8.281 19.21c.274.587.469 1.25.469 1.915 0 2.422-1.992 4.375-4.375 4.375A4.37 4.37 0 0 1 0 21.125c0-2.383 1.953-4.375 4.375-4.375 1.016 0 1.992.39 2.734.977L9.766 15.5l-2.657-2.187a4.45 4.45 0 0 1-2.734.937A4.37 4.37 0 0 1 0 9.875C0 7.492 1.953 5.5 4.375 5.5m2.5 15.625c0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188' />
    </g>
    <defs>
      <clipPath id='1341a0414388d0284d5f04772ca7ed06__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsLgBoldIcon);
export default ForwardRef;
