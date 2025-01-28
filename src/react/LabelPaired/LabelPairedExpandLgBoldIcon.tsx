import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.563 6.75a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.125v3.438c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.687c0-.507.39-.937.938-.937zM.25 18.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v3.437h3.438a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937zM16.813 6.75a.95.95 0 0 1 .937.938v4.375c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V8.625h-3.437c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938zm-.938 12.188c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v4.375c0 .546-.43.937-.937.937h-4.375c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.437z' />
    </g>
    <defs>
      <clipPath id='ec900f8870c4a37cdb3aff23dadf55ad__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgBoldIcon);
export default ForwardRef;
