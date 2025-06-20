import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.469 7v.688h1.343a.347.347 0 0 0 .344-.344A.347.347 0 0 0 6.813 7zm0 1.344V9h1.343a.347.347 0 0 0 .344-.344c0-.156-.156-.312-.343-.312zm8.375 3.406c2.281 0 4.156 1.844 4.156 4.125S16.125 20 13.844 20H4.656A2.654 2.654 0 0 1 2 17.344V8.156C2 5.875 3.844 4 6.125 4s4.125 1.875 4.125 4.156c0 .344-.031.688-.125 1l2.719 2.719a3.5 3.5 0 0 1 1-.125M3.5 17.344c0 .625.531 1.156 1.156 1.156h6c-.594-.687-.937-1.625-.937-2.625 0-1.344.656-2.562 1.687-3.312l-1.969-1.97a4.06 4.06 0 0 1-3.312 1.688c-1 0-1.937-.344-2.625-.937zm1.969-11v-.688h-.657v.688h-.656V7h.657v2h-.657v.688h.657v.656h.656v-.656h.687v.656h.657v-.656c.53 0 1-.438 1-1A.97.97 0 0 0 7.53 8a.99.99 0 0 0-.062-1.406 1 1 0 0 0-.657-.25v-.688h-.656v.688zm8.937 7.531V13.5h-.844v.375c-.53.156-.874.656-.874 1.219 0 .719.562 1.312 1.28 1.312.282 0 .5.219.5.5 0 .25-.218.469-.5.469a.48.48 0 0 1-.468-.469v-.125h-.812v.125c0 .563.343 1.063.874 1.219v.375h.844v-.375c.531-.156.875-.656.875-1.219a1.32 1.32 0 0 0-1.312-1.312c-.25 0-.469-.219-.469-.5a.48.48 0 0 1 .469-.469c.281 0 .5.219.5.469v.125h.812v-.125c0-.563-.344-1.063-.875-1.219m.688-6.219v2.907c0 .312-.188.562-.469.687a.72.72 0 0 1-.812-.156l-2.907-2.906c-.281-.282-.281-.75 0-1.063a.775.775 0 0 1 1.063 0l1.625 1.625V7.656a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='9c2979606678fa994464a7510d8e1fb0__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpMdFillIcon);
export default ForwardRef;
