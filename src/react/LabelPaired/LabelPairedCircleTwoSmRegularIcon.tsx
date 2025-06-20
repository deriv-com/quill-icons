import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoSmRegularIcon = (
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
      <path d='M7 4.625a6.11 6.11 0 0 0-5.305 3.063c-1.12 1.914-1.12 4.238 0 6.125C2.79 15.727 4.785 16.875 7 16.875a6.04 6.04 0 0 0 5.277-3.062c1.121-1.887 1.121-4.211 0-6.126A6.1 6.1 0 0 0 7 4.626M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.934 8.535l-.41.356a.407.407 0 0 1-.602-.028.407.407 0 0 1 .027-.601l.383-.356c.41-.41.984-.629 1.586-.629a2.282 2.282 0 0 1 1.586 3.91l-2.215 2.188h2.899a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H5.25c-.191 0-.355-.11-.41-.246-.082-.164-.027-.356.082-.492l2.953-2.953a1.43 1.43 0 0 0 .438-1.012 1.4 1.4 0 0 0-1.395-1.395c-.383 0-.738.137-.984.383' />
    </g>
    <defs>
      <clipPath id='a8d501372f49ba276183ca2b35017519__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoSmRegularIcon);
export default ForwardRef;
