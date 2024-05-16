import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeLgBoldIcon = (
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
      <path d='M.938 6.75a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.688c0-.508.39-.938.938-.938m3.437 0c.313 0 .625.313.625.625v16.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.375c0-.312.273-.625.625-.625m2.813 0a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.688c0-.508.39-.938.938-.938m4.375 0a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.688c0-.508.39-.938.938-.938m6.562.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937zm-2.5-.313c0-.312.273-.625.625-.625.313 0 .625.313.625.625v16.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625z' />
    </g>
    <defs>
      <clipPath id='5d9cd7451ea2ce1f121fdc40d288e427__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgBoldIcon);
export default ForwardRef;
