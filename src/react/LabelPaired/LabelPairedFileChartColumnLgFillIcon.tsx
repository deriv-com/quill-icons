import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnLgFillIcon = (
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
      <path d='M2.5 5.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zm-1.562 9.688a.95.95 0 0 0-.938-.938.925.925 0 0 0-.937.938v6.874c0 .547.39.938.937.938.508 0 .938-.39.938-.937zm3.437 2.5a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v4.375c0 .546.39.937.938.937.507 0 .937-.39.937-.937zM5 20.188a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v1.875c0 .546.39.937.938.937.507 0 .937-.39.937-.937z' />
    </g>
    <defs>
      <clipPath id='9938953e1da50116a4b31b5ccec7faff__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnLgFillIcon);
export default ForwardRef;
