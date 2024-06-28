import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeSmFillIcon = (
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
      <path d='M1.875 4.625h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75M3.406 7.25c-.383 0-.656.3-.656.656v5.688c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656V7.906c0-.355-.3-.656-.656-.656m1.531.438v6.125c0 .246.192.437.438.437a.45.45 0 0 0 .438-.437V7.687a.47.47 0 0 0-.438-.437.45.45 0 0 0-.437.438m2.407-.438c-.383 0-.657.3-.657.656v5.688c0 .383.274.656.657.656A.65.65 0 0 0 8 13.594V7.906c0-.355-.3-.656-.656-.656m2.406.656v5.688c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656V7.906c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656m3.063-.656a.45.45 0 0 0-.438.438v6.125c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437V7.687a.47.47 0 0 0-.437-.437' />
    </g>
    <defs>
      <clipPath id='a1b20aa15f66e5183f1f067f946fccb1__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeSmFillIcon);
export default ForwardRef;
