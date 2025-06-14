import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerSmBoldIcon = (
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
      <path d='M10.75 5.938H2a.45.45 0 0 0-.437.437V12.5c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438V6.375a.47.47 0 0 0-.438-.437M2 14.25c-.984 0-1.75-.766-1.75-1.75V6.375c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75V12.5c0 .984-.793 1.75-1.75 1.75H8.371l.438 1.313h1.285c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.656A.63.63 0 0 1 2 16.219c0-.356.273-.657.656-.657h1.258l.438-1.312zm3.309 1.313h2.105l-.437-1.313h-1.23zm9.379-9.625v.875h1.75v-.875zm0 2.187V9h1.75v-.875zm1.75 2.188h-1.75v5.25h1.75zm-3.063-4.376c0-.71.574-1.312 1.313-1.312h1.75c.71 0 1.312.602 1.312 1.313v9.625c0 .738-.602 1.312-1.312 1.312h-1.75a1.296 1.296 0 0 1-1.313-1.312zm2.188 7.657a.63.63 0 0 1-.657-.656c0-.356.274-.657.656-.657.356 0 .657.301.657.656 0 .383-.301.657-.657.657' />
    </g>
    <defs>
      <clipPath id='f35fceb14c5535c72b07df37a57b481f__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerSmBoldIcon);
export default ForwardRef;
