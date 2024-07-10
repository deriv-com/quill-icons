import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampSmRegularIcon = (
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
      <path d='M12.5 4.625c-.957.027-1.832.52-2.297 1.34a2.65 2.65 0 0 0 0 2.625c.492.793 1.34 1.312 2.297 1.312.93 0 1.805-.52 2.27-1.312a2.7 2.7 0 0 0 0-2.652 2.67 2.67 0 0 0-2.27-1.313m2.625 4.95A3.48 3.48 0 0 1 12.5 10.75c-1.258 0-2.379-.656-2.98-1.64l-2.188 2.187A3.47 3.47 0 0 1 9 14.25a3.42 3.42 0 0 1-1.203 2.625h6.016c.71 0 1.312-.574 1.312-1.312zm-9.625 7.3a2.618 2.618 0 0 0 .957-5.059H6.43a2.6 2.6 0 0 0-.93-.191 2.626 2.626 0 0 0 0 5.25m.984-5.96 2.653-2.653C9.027 7.934 9 7.605 9 7.25c0-1.914 1.559-3.5 3.5-3.5 1.914 0 3.5 1.586 3.5 3.5v8.313c0 1.23-.984 2.187-2.187 2.187H5.5a3.49 3.49 0 0 1-3.5-3.5c0-1.914 1.559-3.5 3.5-3.5q.492 0 .984.164M4.625 6.812a.45.45 0 0 1 .438-.438h2.625c.164 0 .328.11.382.273.082.165.028.356-.082.493L5.363 9.766a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63L6.621 7.25H5.062a.43.43 0 0 1-.437-.437m1.23 5.25v.328c.465.136.766.574.766 1.066v.11h-.71v-.11c0-.219-.192-.41-.438-.41a.42.42 0 0 0-.41.41c0 .246.19.438.41.438.629 0 1.148.52 1.148 1.148 0 .492-.3.93-.766 1.066v.328h-.738v-.328c-.465-.136-.765-.574-.765-1.066v-.11h.71v.11c0 .219.192.41.41.41.247 0 .438-.191.438-.41a.43.43 0 0 0-.437-.437c-.63 0-1.121-.52-1.121-1.149 0-.492.3-.93.765-1.066v-.328zm6.208-6.864v.602h.574v-.602h.574v.602a.83.83 0 0 1 .574.219.867.867 0 0 1 .055 1.23.85.85 0 0 1 .246.602c0 .492-.41.875-.875.875V9.3h-.574v-.574h-.575V9.3h-.601v-.574h-.574v-.602h.574v-1.75h-.574v-.574h.574v-.602zm1.148 2.352h-1.149v.574h1.149c.164 0 .3-.137.3-.3 0-.138-.136-.274-.3-.274m0-1.176h-1.149v.602h1.149c.164 0 .3-.137.3-.301s-.136-.301-.3-.301' />
    </g>
    <defs>
      <clipPath id='b8a90716f859169ab08235d45b5c1f2b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampSmRegularIcon);
export default ForwardRef;
