import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeLgFillIcon = (
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
      <path d='M.938 6.75h.625a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937H.938c-.547 0-.938-.39-.938-.937V7.688c0-.508.39-.938.938-.938m3.437 0c.313 0 .625.313.625.625v16.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.375c0-.312.273-.625.625-.625m2.813 0h.625a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937h-.625c-.547 0-.938-.39-.938-.937V7.688c0-.508.39-.938.938-.938m3.75 0h.624a.95.95 0 0 1 .938.938v15.625c0 .546-.43.937-.937.937h-.626c-.546 0-.937-.39-.937-.937V7.688c0-.508.39-.938.938-.938m6.562.938c0-.508.39-.938.938-.938h.625a.95.95 0 0 1 .937.938v15.625c0 .546-.43.937-.937.937h-.625c-.547 0-.938-.39-.938-.937zM15 7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625v16.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625z' />
    </g>
    <defs>
      <clipPath id='b602d309dc85502872e363d82e0eb77a__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgFillIcon);
export default ForwardRef;
