import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.383 8.156 2.46 17.375h8.164v-5.937c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v5.937h1.563a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H12.5v4.063c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V19.25H.938c-.352 0-.665-.156-.82-.43a1 1 0 0 1-.04-.937L5.703 7.258c.274-.43.82-.625 1.29-.39.429.234.624.82.39 1.288' />
    </g>
    <defs>
      <clipPath id='88bf200c7647856225c21980141c4103__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourLgBoldIcon);
export default ForwardRef;
