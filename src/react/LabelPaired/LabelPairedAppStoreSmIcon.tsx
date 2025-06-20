import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreSmIcon = (
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
      <path d='m6.973 7.059-.22-.41a.585.585 0 0 0-.765-.22.58.58 0 0 0-.218.766l.574.985-1.832 3.172H3.09c-.3 0-.547.246-.547.546s.246.547.547.547h5.086c.246-.437-.082-1.093-.63-1.093h-1.75l2.407-4.157c.164-.273.055-.601-.219-.765-.246-.137-.601-.055-.738.218zm-2.133 5.96c-.3-.328-.656-.437-1.121-.3l-.383.683a.545.545 0 0 0 .191.766c.274.137.63.055.766-.219zm4.62-1.667c-.737-1.286-1.284-2.215-1.64-2.844-.355.273-.683 1.066-.218 1.887.464.793 1.148 1.968 2.078 3.554.136.274.492.356.765.219.246-.164.356-.492.192-.766l-.547-.957h.82c.3 0 .547-.246.547-.547 0-.3-.246-.546-.547-.546zM7 3.969a6.78 6.78 0 0 1 6.781 6.781A6.78 6.78 0 0 1 7 17.531 6.78 6.78 0 0 1 .219 10.75 6.78 6.78 0 0 1 7 3.969m5.906 6.781c0-3.254-2.68-5.906-5.906-5.906-3.281 0-5.906 2.68-5.906 5.906A5.9 5.9 0 0 0 7 16.656a5.916 5.916 0 0 0 5.906-5.906' />
    </g>
    <defs>
      <clipPath id='aa682d9fba7a29f0dc2aef2dc29a9f23__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreSmIcon);
export default ForwardRef;
