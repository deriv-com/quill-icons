import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M20.25 8.625H2.75a.64.64 0 0 0-.625.625v1.25h18.75V9.25c0-.312-.312-.625-.625-.625m.625 5.625H2.125v7.5c0 .352.273.625.625.625h17.5a.64.64 0 0 0 .625-.625zM2.75 6.75h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5m2.188 11.875h1.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m5 0h4.374a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H9.936c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='83a6ae727bd1084355cd26ab819f0976__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardLgBoldIcon);
export default ForwardRef;
